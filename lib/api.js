/**
 * Created by kikimans on 2014-10-16.
 */
var querystring = require('querystring'),
     https = require('https'),
     url = require('url'),
    ApiResponse = require('./apiresponse'),
    EvnetEmitter = require('events').EventEmitter;

var OpenShiftClient = exports = module.exports = {
    settings : {},
    apis : {},
    userConfig : ''
};


OpenShiftClient.init = function(configuration){
    this.settings = {};
    this.apis = {};
    this.userConfig = configuration;


};

OpenShiftClient.defaultCall = function(username,password){
    var evt = new EvnetEmitter();
    this.defaultConfiguratirion(username,password,function(result){
        var res = new ApiResponse(result);
        OpenShiftClient.apiSetting(res.getAllData().links);
        evt.emit('end', res);
    });
    return evt;
}

OpenShiftClient.defaultConfiguratirion = function(username, password, callback){
    var api = {
        'href':'https://broker-test.ucareme.co.kr/broker/rest/api',
        'method':'GET',
        'optional_params':[],
        'rel':'API entry point',
        'required_params':[],
        'options' : {
            hostname : 'broker-test.ucareme.co.kr',
            port : 443,
            path : '/broker/rest/api',
            method : 'GET',
            headers : { },
            rejectUnauthorized: false,
            agent: false
        }

    }
    this.apis['API'] = api;

    this.performRequest(username, password, 'API', '', callback);



};

OpenShiftClient.set = function(setting, val){
    if(arguments.length === 1){
        return this.settings[setting];
    }
    this.settings[setting] = val;
};

OpenShiftClient.apiSetting = function(obj){
    for(var key in obj){
        this.apis[key] = obj[key];
        var options = {};

        options['hostname'] = url.parse(obj[key].href).hostname;
        options['path'] = url.parse(obj[key].href).pathname;
        options['method'] = obj[key].method;
        options['rejectUnauthorized'] = false;
        options['agent'] = false;
        options['headers'] = {};

        this.apis[key]['options'] = options;

    }
};

OpenShiftClient.performRequest = function(username, password, api, paramdata, callback){
    var dataString = JSON.stringify(paramdata);
    var headers = {};

    var restApi = this.apis[api];
    console.log(restApi);
    if(restApi !== null){
        if(restApi.method == 'GET' ){
            if(dataString != ''){
                restApi.href += '?' + querystring.stringify(dataString);
            }
            console.log('username : ' + username);
            console.log('password : ' + password);
            headers = {
                'Accept' : 'application/json',
                'Authorization' : 'Basic ' + new Buffer(username + ':' + password).toString('base64')
            };
        }else{
            headers = {
                'Accept' : 'application/json',
                'Content-Length' : dataString.length,
                'Authorization' : 'Basic ' + new Buffer(username + ':' + password).toString('base64')
            };
        }
        restApi['options'].headers = headers;

        var req = https.request( restApi['options'], function(res){
            res.setEncoding('utf-8');
            var datas = '';
            res.on('data', function(data) {

                datas += data;

            });
            res.on('error', function(e){

                console.error(e);
            });

            res.on('end', function(){
                if(datas){
                    var objData = JSON.parse(datas);
                    callback(objData);
                }else{
                    callback('');
                }
            });
        });

        req.on('error', function(e){

            console.error(e);
        });

        req.write(dataString);
        req.end();
    }else{
        callback('restApi Name is not');
    }
};



