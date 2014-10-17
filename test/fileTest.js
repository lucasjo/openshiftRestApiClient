/**
 * Created by kikimans on 2014-10-17.
 */
var fs = require('fs');
var evt = require('events').EventEmitter;

fs.readFile('data.json', 'utf8', function(err, data){
    var obj = JSON.parse(data.toString('utf-8'));
    //console.log(obj.data);

    obj.data.forEach(function(elem, index, array){
        console.log(index);
    })


})