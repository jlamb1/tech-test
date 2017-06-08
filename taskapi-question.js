var hapikey = "process.env.HAPIKEY";

var http = require('https');
var fs = require('fs');

getTimestamp = new Date().getTime()

var put_data = JSON.stringify({
    "engagement": {
        "active": true,
        "ownerId": 9388137,
        "type": "TASK",
        "timestamp": getTimestamp
    },
    "associations": {
        "contactIds": [74151],
        "companyIds": [470319531]

    },
    "metadata": {
        "body": "Because the UI is boring",
        "subject": "Make a task via API",
        "status": "NOT_STARTED",
        "forObjectType": "CONTACT"
    }
});

// An object of options to indicate where to put to
var put_options = {
    hostname: "api.hubapi.com",
    path: "/engagements/v1/engagements?hapikey=" + hapikey,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(put_data),
      "User-Agent": "Mozilla/5.0"
    }
};

// Set up the request
var put_req = http.request(put_options, function(res) {
    console.log("Status: " + res.statusCode);
    // console.log("Headers: " + JSON.stringify(res.headers));
    // res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });
});


// put the data
put_req.write(put_data);
put_req.end();
