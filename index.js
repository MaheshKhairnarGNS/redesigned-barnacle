//console.log("Hi Friends...");

//1. Import area

// const ObjectName = require('someLibrary');
const express = require('express');
const appObj = express();

require('dotenv').config();

console.log(process.env.PORT);

//Middleware
//object.method(actual argument)

// appObj.get('/employee', (req, res) => {

//     res.json({"name":"mahesh"});
// });


appObj.get('/employee', (req, res, next) =>{

    console.log("request to the Middleware : ", req.query.name)

    //req.query.name = 'shubham';
    req.query.name = req.query.name.toUpperCase();

    next();

}, (req, res) => {

    console.log("request to the cbfun : ", req.query.name)

    res.json({"name":req.query.name});
});


let PORT = process.env.PORT || 5000;
appObj.listen(PORT, () => {
    console.log('The server is running on the port : ' +PORT);
})