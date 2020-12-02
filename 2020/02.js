'use strict';
/*
    Code of Advent - Day 02
 */
// How many passwords are valid according to their policies?
// https://adventofcode.com/2020/day/2

const fs = require('fs')
var data;
fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;

    data = data.toString();
});


console.log('data', data)
