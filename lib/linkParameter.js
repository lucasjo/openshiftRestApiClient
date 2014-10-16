/**
 * Created by kikimans on 2014-10-16.
 */

var linkParameter = module.exports = function linkParamter(name, type, description, defaultValue, validOption){
    this.name = name;
    this.type = typeof(type);
    this.description = description;
    this.defaultValue = defaultValue;
    this.validOption = validOption;
};

linkParameter.prototype.getName = function(){
    return this.name;
};

linkParameter.prototype.getType = function(){
    return this.type;
};

linkParameter.prototype.getDescription = function(){
    return this.description;
};

linkParameter.prototype.getDefalutType = function(){
    return this.defaultValue;
};

linkParameter.prototype.getValidOption = function(){
    return this.validOption;
};
