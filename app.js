"use strict";

//./ is required
const profile = require('./profile');

//this gets command line args removing the first two (which is node and the file name)
// const users = process.argv.slice(2);

const users = ["chalkers", "kylepfromer", "taylorpfromer", "davemcfarland", "d"];

//since node and javascript is non blocking, asynchronous, kyle and taylor are loaded first because we have less data than chalkers
for (let user of users){
    profile.get(user);
}