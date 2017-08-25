var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2773",
        "ok": "2773",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "432",
        "ok": "432",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "832",
        "ok": "832",
        "ko": "-"
    },
    "percentiles1": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles2": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2576",
        "ok": "2576",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2734",
        "ok": "2734",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17,
        "percentage": 85
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 15
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
        "ko": "-"
    }
},
contents: {
"req_authorize-7f83d": {
        type: "REQUEST",
        name: "Authorize",
path: "Authorize",
pathFormatted: "req_authorize-7f83d",
stats: {
    "name": "Authorize",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "81",
        "ok": "81",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "183",
        "ok": "183",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "percentiles1": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles2": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "percentiles3": {
        "total": "160",
        "ok": "160",
        "ko": "-"
    },
    "percentiles4": {
        "total": "178",
        "ok": "178",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.833",
        "ko": "-"
    }
}
    },"req_generate-32b91": {
        type: "REQUEST",
        name: "Generate",
path: "Generate",
pathFormatted: "req_generate-32b91",
stats: {
    "name": "Generate",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2773",
        "ok": "2773",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "755",
        "ok": "755",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1085",
        "ok": "1085",
        "ko": "-"
    },
    "percentiles1": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1368",
        "ok": "1368",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2680",
        "ok": "2680",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2754",
        "ok": "2754",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7,
        "percentage": 70
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 30
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.833",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
