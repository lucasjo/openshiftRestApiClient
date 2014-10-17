/**
 * Created by kikimans on 2014-10-17.
 */

var OpenShiftClient = require('./api');


var apirespon = module.exports = function ApiResponse(obj){
    console.log('obj.api_version : ' + obj.api_version);
    this.api_version = obj.api_version;
    this.data = obj.data;
    this.message = obj.message;
    this.status = obj.status;
    this.supported_api_versions = obj.status;
    this.type = obj.type;
    this.version = this.version;

}


apirespon.prototype.getAllData = function(){
    return this.data;
};

apirespon.prototype.getApi = function(apiname){
    var apis;
    if(this.data){
        apis = this.getData(apiname);
    }else{
        throw new TypeError('Invalid value for Api Name  `'+ apiname  +'`');
    }

    return apis;
};

apirespon.prototype.getData = function(apiname){
    for(var key in this.data){
        if(key === apiname){
            return this.data[key];
        }
    }
};





