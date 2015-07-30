(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var utils = require('./utils');

console.log('Client side code started');

utils.count();

},{"./utils":2}],2:[function(require,module,exports){
'use strict';

// ES6 CODE
module.exports = {
	count: count
};

function count() {
	var count = 0;
	setInterval(function () {
		return console.log(count++);
	}, 400);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWxsZW4vRGV2ZWxvcG1lbnQvYmFiZWwtc3RhcnRlci9jbGllbnQvYXBwL21haW4uanMiLCIvVXNlcnMvYWxsZW4vRGV2ZWxvcG1lbnQvYmFiZWwtc3RhcnRlci9jbGllbnQvYXBwL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOztBQUViLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDOztBQUV4QyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7OztBQ05kLFlBQVksQ0FBQzs7O0FBSWIsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNoQixNQUFLLEVBQUwsS0FBSztDQUNMLENBQUM7O0FBRUYsU0FBUyxLQUFLLEdBQUc7QUFDaEIsS0FBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsWUFBVyxDQUFDO1NBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztFQUFBLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDN0MiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmNvbnNvbGUubG9nKCdDbGllbnQgc2lkZSBjb2RlIHN0YXJ0ZWQnKTtcblxudXRpbHMuY291bnQoKTsiLCIndXNlIHN0cmljdCc7XG5cblxuLy8gRVM2IENPREVcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRjb3VudFxufTtcblxuZnVuY3Rpb24gY291bnQoKSB7XG5cdHZhciBjb3VudCA9IDA7XG5cdHNldEludGVydmFsKCgpID0+IGNvbnNvbGUubG9nKGNvdW50KyspLCA0MDApO1xufSJdfQ==
