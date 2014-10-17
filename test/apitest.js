/**
 * Created by kikimans on 2014-10-17.
 */


var OpenShiftClient = require('../lib/api');
var init = OpenShiftClient.defaultCall('kikimans@jyes.co.kr', 'alsgh@1716');

init.on('end', function(res){

    console.log(res.status);
    console.log(OpenShiftClient.apis);
})
