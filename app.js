import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';

let app = express();

let filename = fileURLToPath(import.meta.url);
let dirname = path.dirname(filename);

app.get('/', function(req,res) {
    res.sendFile(dirname+'/src/main.html');
})
app.get(/^(.+)$/, function(req, res) {
    if(req.params[0].includes("node_modules")){
        res.sendFile(dirname+'/' + req.params[0]);
    }else{
        res.sendFile(dirname+'/src/' + req.params[0]);
    }
});

export {app};