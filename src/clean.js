"use strict";

const fs = require("fs");

const files = [
    "./geo-coord.js",
    "./geo-coord.d.ts",
    "./geo-coord.js.map",
    "./haversine.service.js",
    "./haversine.service.d.ts",
    "./haversine.service.js.map",
    "./index.js",
    "./index.d.ts",
    "./index.js.map",
];

files.forEach((file) => {
    try { fs.unlinkSync(file); } catch(err) { /* Do nothing */ }
});

console.log("Done!\n");
