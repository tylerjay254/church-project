var express = require ('express');
var http = require ('http');
var server = http.createServer(app);
var app = express();
app.get('/', function(req,res){
    res.sendFile(_dirname+"/index.html");

});
app.listen(port, function(){
    //callback
    //expected on production
    //-->sending a 200 oK
    //return error otherwise
});
app.get('--' , function(req , res ){
    res.end('');
});


