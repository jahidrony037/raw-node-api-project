/*
 *Title: NOt Found Handler
 *Description: 404 not Found  Handler
 *Author:Jhaid Hasan
 *Date: 20/12/2022
 */

 //module scaffolding
 const handler = {};

 handler.notFoundHandler = (requestProperties,callBack) =>{
    console.log('Not Found');
    callBack(404,{
        message: 'Your Requested URL NOT FOUND!',
    })
 }

 

 module.exports = handler;