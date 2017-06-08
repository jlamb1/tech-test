var http = require('https');
var fs = require('fs');

var put_data = JSON.stringify(
{
  "properties": [
    {
      "property": "email",
      "value": "testingapis@hubspot.com"
    },
    {
      "property": "firstname",
      "value": "Adrian"
    },
    {
      "property": "lastname",
      "value": "Mott"
    },
    {
      "property": "website",
      "value": "http://hubspot.com"
    },
    {
      "property": "company",
      "value": "HubSpot"
    },
    {
      "property": "phone",
      "value": "555-122-2323"
    },
    {
      "property": "address",
      "value": "25 First Street"
    },
    {
      "property": "city",
      "value": "Cambridge"
    },
    {
      "property": "state",
      "value": "MA"
    },
    {
      "property": "zip",
      "value": "02139"
    }
  ]
}
    );

// An object of options to indicate where to put to
var put_options = {
    hostname: "api.hubapi.com",
    path: "/contacts/v1/contact",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(put_data),
      "User-Agent": "Mozilla/5.0",
      "Authorization": "OAUTH2_KEY_HERE"
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
