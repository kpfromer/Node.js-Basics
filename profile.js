"use strict";

const https = require('https');

const http = require("http");

function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}

function get(username) {

    try {

        const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

            if (response.statusCode === 200){
                let body = "";

                // Read the data

                response.on("data", (data) => {
                    body += data.toString();
                });

                response.on("end", () => {

                    try {

                        const profile = JSON.parse(body);
                        printMessage(username, profile.badges.length, profile.points.JavaScript);

                    } catch (error){
                        console.error(`Bad username: "${username}"`);
                    }
                });
            } else {
                console.error(`There was an error getting the for profile for "${username}" (Status Code: [${response.statusCode}], message: [${http.STATUS_CODES[response.statusCode]}])`);
            }
        });

        request.on("error", error => {
            console.error(`Problem with request : ${error.message}`);
        });

    } catch (error) {

        console.error(`An error was encountered: ${error.message}`);
    }

}

//tells what is exposed for the module
//get of module.exports.get can be any thing, it is what the name users use
// the = get is the get function to use
module.exports.get = get;