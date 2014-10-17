/**
 * Created by kikimans on 2014-10-17.
 */
var connection = require('../lib/openshiftConnection'),
    OpenShiftConfig = require('../lib/openshiftConfig');

var conn = connection.getConnection(new OpenShiftConfig('kikimans@jyes.co.kr', 'alsgh@1716'));

var user = conn.getUser();

user.on('end', function(res){
    console.log(res);
})