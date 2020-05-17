var express = require ('express');
var http = require ('http');
var server = http.createServer(app);
var app = express();
app.get('/', function(req,res){
    res.sendFile(_dirname+"/index.html");

});
app.listen(3000, function(){
    console.log('listening on server port 3000');
});
app.get('/task' , function(req , res ){
    res.end('this is the about page ');
});


