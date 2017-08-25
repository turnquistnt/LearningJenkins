package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class SSOSimulation extends Simulation {

object Authenticate {

  val auth = exec(http("Authorize")
    .get("/auth")
    .header("authorizationToken","eyJhbGciOiJIUzI1NiJ9.Inp4Y2RzZHM1MzMzZiI.buxH5bcwLJX_TjnGJIN9xlsrY93FnA0qZvAYJWK1aec")
    .check(status.is(200)))
    .pause(1)
}

object Generate {

  val generate = exec(http("Generate")
    .post("/generate")
    .body(RawFileBody("../user-files/data/testbody.json")).asJSON
    .check(status.is(200)))
    .pause(1)
}


  val httpConf = http //maybe needs to be https
    .baseURL("https://h9lurtec4c.execute-api.us-east-1.amazonaws.com/dev/")
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Chrome/60.0.3112.78 Safari/537.36")


  val users = scenario("Users").exec(Authenticate.auth, Generate.generate)

  setUp(
    users.inject(rampUsers(1000) over (30 seconds))
  ).protocols(httpConf)
}
