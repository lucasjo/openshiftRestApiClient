/**
 * Created by kikimans on 2014-10-17.
 */
var OpenShiftClient = require('../lib/api'),
    EvnetEmitter = require('events').EventEmitter;

var user = {
    APINAME : 'GET_USER',

    getUser : function(username, password, callback) {
        OpenShiftClient.performRequest(username, password, this.apiname, '', callback);
    }
}

module.exports = user;

