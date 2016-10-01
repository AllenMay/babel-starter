'use strict';

var utils = require('./utils');
console.log("");
console.log("Arrow function demo 2");
utils.count();

var tmpl1 = document.getElementById("tmpl1");
tmpl1.addEventListener("click",utils.changeTemp);

var stopcount = document.getElementById("stopcount");
stopcount.addEventListener("click",utils.stopCounting);