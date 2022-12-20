/*
 *Title: Routes
 *Description: Application Routes
 *Author:Jhaid Hasan
 *Date: 20/12/2022
 */

 //dependencies
 const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler');
 const {aboutHandler} = require('./handlers/routeHandlers/sampleHandler');


 //routes
 const routes = {
    sample: sampleHandler,
    about: aboutHandler,
    
 }

 module.exports = routes;