package computerdatabase // 1

import io.gatling.core.Predef._ // 2
import io.gatling.http.Predef._
import scala.concurrent.duration._
import java.util.concurrent.ThreadLocalRandom

class TestSimulation extends Simulation { // 3

  object Search {

    val feeder = csv("search.csv").random // 1, 2 maybe add pathing as this has none

    val search = exec(http("Home")
      .get("/"))
      .pause(1)
      .feed(feeder)
      .exec(http("Search")
        .get("/computers?f=${searchCriterion}")
        .check(css("a:contains('${searchComputerName}')", "href").saveAs("computerURL")))
      .pause(1)
      .exec(http("Select")
        .get("${computerURL}")
        .check(status.is(200)))
      .pause(1)
  }

  object Browse {

    val browse = repeat(4, "i") { // Note how we force the counter name so we can reuse it
      exec(http("Page ${i}")
        .get("/computers?p=${i}"))
        .pause(1)
    }
  }

  object Edit {
    // Note we should be using a feeder here

    val headers_10 = Map("Content-Type" -> "application/x-www-form-urlencoded")

    // let's demonstrate how we can retry: let's make the request fail randomly and retry a given number of times

    val edit = tryMax(2) { // let's try at max 2 times
      exec(http("Form")
        .get("/computers/new"))
        .pause(1)
        .exec(http("Post")
          .post("/computers")
          .headers(headers_10)
          .formParam("name", "Beautiful Computer")
          .formParam("introduced", "2012-05-30")
          .formParam("discontinued", "")
          .formParam("company", "37").
          check(status.is(session => 200 + ThreadLocalRandom.current.nextInt(2)))) // we do a check on a condition that's been customized with a lambda. It will be evaluated every time a user executes the request
    }.exitHereIfFailed // if the chain didn't finally succeed, have the user exit the whole scenario
  }

  val httpConf = http // 4
    .baseURL("http://computer-database.gatling.io") // 5
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // 6
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Chrome/60.0.3112.78 Safari/537.36")


  val users = scenario("Users").exec(Search.search, Browse.browse)
  val admins = scenario("Admins").exec(Search.search, Browse.browse, Edit.edit)

  setUp(
    users.inject(rampUsers(10) over (10 seconds)),
    admins.inject(rampUsers(2) over (10 seconds))
  ).protocols(httpConf)
}
