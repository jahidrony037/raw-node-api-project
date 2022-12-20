/*
 *Title:Uptime Monitoring Application
 *Description: A RestFul API to monitor up or down time of user defined links 
 *Author: Jahid Hasan 
 *Date: 20/12/2022

 */

 //dependencies 
 const http = require('http');
 const {handleReqRes} = require('./helpers/handleReqRes');
 
 //app object - module scaffolding
 const app ={};

 //configuration
 app.config={
   port:3000
 }

 //create server 
 app.createServer = () =>{
   const server = http.createServer(app.handleReqRes);
   server.listen(app.config.port,() =>{
      console.log(`listening form port ${app.config.port}`);
   })
 }

 //handle Request Response
  app.handleReqRes = handleReqRes;
 //start server 
 app.createServer();
