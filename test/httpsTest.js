/**
 * Created by kikimans on 2014-10-17.
 */
var https = require('https');
var options = {
    hostname : 'broker-test.ucareme.co.kr',
    port : 443,
    path : '/broker/rest/api',
    method : 'GET',
    headers : {
        'Authorization': 'Basic ' + new Buffer('kikimans@jyes.co.kr' + ':' + 'alsgh@1716').toString('base64'),
        'Accept': 'application/json'
    },
    rejectUnauthorized: false,
    agent: false
};

var req = https.request(options, function(res){
    var datas = '';
    res.on('data', function(data) {
        datas += data;

    });
    res.on('error', function(e){
        console.error(e);
    });

    res.on('end', function(){
        console.log(datas);

        console.info('call end');
    });
});
req.on('error', function(e){
    console.error(e);
});



req.end();

