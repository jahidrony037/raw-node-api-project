/*
 *Title: Sample Handler
 *Description: Sample Handler
 *Author:Jhaid Hasan
 *Date: 20/12/2022
 */

 //module scaffolding
 const handler = {};

 handler.sampleHandler = (requestProperties, callBack) =>{
    console.log(requestProperties);
   callBack(200,{
    message: 'This is a sample url',
   });
 }
 
 handler.aboutHandler = (requestProperties,callBack) =>{
    console.log(requestProperties);
    callBack(200,{
        message: 'This is a about url',
       });
 };
 

 module.exports = handler;