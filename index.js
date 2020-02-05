const express = require('express');
const app = new express();
const path = require('path');
const bodyParser = require('body-parser');
const {config,engine} = require('express-edge');

//configure edge
config({cache:process.env.NODE_ENV == 'production'})
var port = process.env.PORT || 8080;
app.use(engine);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
//set static pages
app.use(express.static('public'));

//send home page as route
app.get("/",(req,res)=>{
  res.sendFile(path.resolve(__dirname,'pages/index.html'))
});
//send homepage when requested
app.get("/home",(req,res)=>{
  res.sendFile(path.resolve(__dirname,'pages/index.html'))
})

//send about page
app.get("/about",(req,res)=>{
  res.sendFile(path.resolve(__dirname,'pages/about.html'))
});
//send projects page using router
app.get("/projects",(req,res)=>{
  res.sendFile(path.resolve(__dirname,'pages/projects.html'))
});
//const r = require('./router/routes.js')(app);

//start the server
app.listen(port,()=>{
  console.log("Server running your site at 5000")
});
