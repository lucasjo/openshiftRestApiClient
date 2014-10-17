/**
 * Created by kikimans on 2014-10-17.
 */
var OpenShiftConfig = module.exports = function OpenShiftConfig(username,password){
    this.username = username;
    this.password = password;
};


OpenShiftConfig.prototype.getUsername = function(){
    return this.username;
};

OpenShiftConfig.prototype.getPassword = function(){
    return this.password;
};


