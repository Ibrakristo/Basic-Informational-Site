import http from 'http';
import fs from 'fs/promises';
http.createServer(function(req,res){
    let url = new URL(req.url, `http://${req.headers.host}`);
    if(url.pathname == "/"){
        fs.readFile("./index.html").then(function(data){
            res.write(data);
            res.end();
        },function(err){
            console.log(err);
        })
    }
    else if(url.pathname == "/about"){
        fs.readFile("./about.html").then(function(data){
            res.write(data);
            res.end();
        },function(err){
            console.log(err);
        })
    }
    else if(url.pathname == "/contact-me"){
        fs.readFile("./contact-me.html").then(function(data){
            res.write(data);
            res.end();
        },function(err){
            console.log(err);
        })
    }
    else{
        fs.readFile("./404.html").then(function(data){
            res.write(data);
            res.end();
        },function(err){
            console.log(err);
        })
    }
}).listen(8080);