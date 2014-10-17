/**
 * Created by kikimans on 2014-10-17.
 */

var OpenShiftClient = require('../lib/api'),
    user = require('./user');

var OpenShiftConnection = {
    username : '',
    password : '',
    getConnection : function(userConfig){
        this.username = userConfig.getUsername();
        this.password = userConfig.getPassword();
        var defaultVal = OpenShiftClient.defaultCall(this.username, this.password);
        defaultVal.on('end', function(res){
            if(res.status == 'ok'){
                return this;
            }else{
                throw new TypeError('연결에 실패 하였습니다.');
            }
        })
        return this;
    },
    getUser : function(){
        var evt =
        user.getUser(this.username,this.password, function(res){
            var res = new ApiResponse(result);
            OpenShiftClient.apiSetting(res.getAllData());
            evt.emit('end', res);
        });
        return evt;

    }
}

module.exports = OpenShiftConnection;