'use strict';
/*
    Code of Advent - Day 02
 */
// How many passwords are valid according to their policies?
// https://adventofcode.com/2020/day/2

function validatePassword(reqCount, req, password) {
    // Setup required count for later
    const ballpark = reqCount.split('-');
    const regex = new RegExp(`[^${req}]`,"g");
    // Get the length of the required charcter
    const totalLetters = password.replace(regex, "").length;
    // Check if that length falls better the required count.
    const valid = totalLetters >= parseInt(ballpark[0]) && totalLetters <= parseInt(ballpark[1]);
    return valid;
}

const fs = require('fs');
let passwords;
fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;
    // Take data and create array of objects with all the info for each input.
    const arrOfPass = data.toString().split("\r\n").map((str, ix) => {
        let strSplit = str.split(':');
        if (strSplit[0] && strSplit[1]) {
            const criteriaSplit = strSplit[0].split(' ');
            // console.log('user.passLength', user.passLength)
            return {
                passLength: criteriaSplit[0],
                criteria: criteriaSplit[1],
                password: strSplit[1]
            };
        }
    }, []);

    // Loop through each user and check password
    const invalid = [];
    const valid = [];
    arrOfPass.forEach((user, ix) => {
        // console.count('USER!::::', ix)
       if(validatePassword(user.passLength, user.criteria, user.password)) {
           // console.log('password checks pass');
           valid.push(user);
       } else {
           invalid.push(user);
       }
    });
    console.log('Total invalid passwords: ', invalid.length);
    console.log('Total valid passwords: ', valid.length);
});
