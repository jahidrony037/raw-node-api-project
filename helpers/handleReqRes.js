/*
 *Title: Handle Request Response
 *Description: Handle Request Response
 *Author:Jhaid Hasan
 *Date: 20/12/2022
 *
 */



  //dependencies
  const {StringDecoder} = require('string_decoder');
  const url = require('url');
  const routes = require('../routes');
  const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandler');
const { type } = require('os');

 //module Scaffolding
 const handler = {};





 handler.handleReqRes=(req,res) =>{
    //request handling
    //get the url and parse it 
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.path;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject
    }

   const decoder = new StringDecoder('utf-8');
   let realData = "";

   const chosenHandler = routes[trimmedPath] ? routes[trimmedPath]: notFoundHandler;

         chosenHandler(requestProperties,(statusCode,payload) =>{
            statusCode = typeof statusCode === 'number'? statusCode : 500;
            payload = typeof payload === 'object'? payload : {};

            const payloadString = JSON.stringify(payload);

            //return the final response
            res.writeHead(statusCode);
            res.end(payloadString);
         })

    req.on('data',(buffer)=>{
          realData+= decoder.write(buffer);
    });


    req.on('end', ()=>{
       realData += decoder.end();
       console.log(realData);
    //request Response 
    res.end(realData);
    })
 
    
   }

 module.exports= handler;