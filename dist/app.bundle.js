(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var utils = require('./utils');
console.log("");
console.log("Arrow function demo 2");
utils.count();

var tmpl1 = document.getElementById("tmpl1");
tmpl1.addEventListener("click", utils.changeTemp);

var stopcount = document.getElementById("stopcount");
stopcount.addEventListener("click", utils.stopCounting);

},{"./utils":2}],2:[function(require,module,exports){
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var name = "Bob",
    time = "today",
    nIntervId;
var tmptxt = document.getElementById('temp1');

tmptxt.insertAdjacentHTML('beforeend', "Hello " + name + ", how are you " + time + "?");

// https://strongloop.com/strongblog/introduction-to-es6-iterators/
// ======================================================

// ES6 'for-in'
// ------------
var list = [3, 5, 7];
list.foo = 'bar';

for (var key in list) {
    console.log(key); // 0, 1, 2, foo
}

// ES6 'for-of'
// ------------
var _iteratorNormalCompletion = true;

// Built-in iterables
// ------------------
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;

        console.log(value); // 3, 5, 7
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var string = "hello";

var _iteratorNormalCompletion2 = true;

// Spread construct
// ----------------
// var hello = "world";
// var [first, second, ...rest] = [...hello];
// console.log(first, second, rest); // w o ["r","l","d"]

// Infinite iterator
// -----------------
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = string[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var chr = _step2.value;

        console.log(chr); // h, e, l, l, o
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
            _iterator2["return"]();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var ids = _defineProperty({}, Symbol.iterator, function () {
    var index = 0;

    return {
        next: function next() {
            return { value: 'id-' + index++, done: false };
        }
    };
});

var counter = 0;

var _iteratorNormalCompletion3 = true;

// Generators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// ----------
// function* list(value) {
//   for (var item of value) {
//     yield item;
//   }
// }

// for (var value of list([1, 2, 3])) {
//   console.log(value);
// }

// var iterator = list([1, 2, 3]);

// console.log(typeof iterator.next); // function
// console.log(typeof iterator[Symbol.iterator]); // function

// console.log(iterator.next().value); // 1

// for (var value of iterator) {
//   console.log(value); // 2, 3
// }

// ES6 CODE - Arrow function
// ======================================================
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = ids[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var value = _step3.value;

        console.log(value);
        done: true;

        if (counter++ > 100) {
            // let's make sure we get out!
            break;
        }
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
            _iterator3["return"]();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

module.exports = {
    count: count, changeTemp: changeTemp, stopCounting: stopCounting
};

function stopCounting() {
    clearInterval(nIntervId);
}

function changeTemp() {
    var name = document.getElementById('name').value;
    var time = document.getElementById('time').value;
    // var name = "Sue", time = "yesterday";
    tmptxt.innerHTML = "Hello " + name + ", how are you " + time + "?";
}

function count() {
    var count = 0;
    // nIntervId = setInterval(() => console.log(count++), 400);
}

function stopCounting() {
    clearInterval(nIntervId);
}

// Lixical this
var bob = {
    _name: "Bob",
    _friends: ["Jack", "Sue", "Barney"], // ADDED NAMES
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (f) {
            return console.log(_this._name + " knows " + f);
        });
    }
};
console.log("Arrow function demo 1");
bob.printFriends();

// Promise Demo
// ======================================================
var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;

    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Started (<small>Sync code started</small>)<br/>');

    // We make a new promise: we promise the string 'result' (after waiting 3s)
    var p1 = new Promise(
    // The resolver function is called with the ability to resolve or
    function (resolve, reject) {
        log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise started (<small>Async code started</small>)<br/>');
        // This only is an example to create asynchronism
        window.setTimeout(function () {
            // We fulfill the promise !
            resolve(thisPromiseCount);
            //}, Math.random() * 2000 + 6000);
        }, 3000);
    });

    // We define what to do when the promise is fulfilled
    //but we only call this if the promise is resolved/fulfilled
    p1.then(
    // Just log the message and a value
    function (val) {
        log.insertAdjacentHTML('beforeend', val + ') Promise fulfilled <span class="redded">6 seconds later</span> (<small>Async code terminated</small>)<br/>');
    })["catch"](
    // Rejected promises are passed on by Promise.prototype.then(onFulfilled)
    function (reason) {
        console.log('Handle rejected promise (' + reason + ') here.');
    });

    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise made (<small>Sync code terminated</small>)<br/>');
}

if ("Promise" in window) {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", testPromise);
} else {
    log = document.getElementById('log');
    log.innerHTML = "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
}

// FROM Babel: http://babeljs.io/docs/learn-es2015/
// ======================================================
// reject the promise

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWxsZW4vRGV2ZWxvcG1lbnQvYmFiZWwtc3RhcnRlci9jbGllbnQvYXBwL21haW4uanMiLCIvVXNlcnMvYWxsZW4vRGV2ZWxvcG1lbnQvYmFiZWwtc3RhcnRlci9jbGllbnQvYXBwL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOztBQUViLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7O0FBRWQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFakQsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyRCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzs7O0FDWHZELFlBQVksQ0FBQzs7OztBQUViLElBQUksSUFBSSxHQUFHLEtBQUs7SUFBRSxJQUFJLEdBQUcsT0FBTztJQUFFLFNBQVMsQ0FBQztBQUM1QyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU5QyxNQUFNLENBQUMsa0JBQWtCLENBQUMsV0FBVyxhQUFVLElBQUksc0JBQWlCLElBQUksT0FBSSxDQUFDOzs7Ozs7O0FBUXpFLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxF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ZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuY29uc29sZS5sb2coXCJcIik7XG5jb25zb2xlLmxvZyhcIkFycm93IGZ1bmN0aW9uIGRlbW8gMlwiKTtcbnV0aWxzLmNvdW50KCk7XG5cbnZhciB0bXBsMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG1wbDFcIik7XG50bXBsMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix1dGlscy5jaGFuZ2VUZW1wKTtcblxudmFyIHN0b3Bjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcGNvdW50XCIpO1xuc3RvcGNvdW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHV0aWxzLnN0b3BDb3VudGluZyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbmFtZSA9IFwiQm9iXCIsIHRpbWUgPSBcInRvZGF5XCIsIG5JbnRlcnZJZDtcbnZhciB0bXB0eHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcDEnKTtcblxudG1wdHh0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxgSGVsbG8gJHtuYW1lfSwgaG93IGFyZSB5b3UgJHt0aW1lfT9gKTtcblxuXG4vLyBodHRwczovL3N0cm9uZ2xvb3AuY29tL3N0cm9uZ2Jsb2cvaW50cm9kdWN0aW9uLXRvLWVzNi1pdGVyYXRvcnMvXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8vIEVTNiAnZm9yLWluJ1xuICAgIC8vIC0tLS0tLS0tLS0tLVxuICAgIHZhciBsaXN0ID0gWzMsIDUsIDddO1xuICAgIGxpc3QuZm9vID0gJ2Jhcic7XG4gICAgIFxuICAgIGZvciAodmFyIGtleSBpbiBsaXN0KSB7XG4gICAgICBjb25zb2xlLmxvZyhrZXkpOyAvLyAwLCAxLCAyLCBmb29cbiAgICB9XG4gICAgIFxuXG4gICAgLy8gRVM2ICdmb3Itb2YnXG4gICAgLy8gLS0tLS0tLS0tLS0tXG4gICAgZm9yICh2YXIgdmFsdWUgb2YgbGlzdCkge1xuICAgICAgY29uc29sZS5sb2codmFsdWUpOyAvLyAzLCA1LCA3XG4gICAgfVxuXG4gICAgLy8gQnVpbHQtaW4gaXRlcmFibGVzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdmFyIHN0cmluZyA9IFwiaGVsbG9cIjtcbiAgICAgXG4gICAgZm9yICh2YXIgY2hyIG9mIHN0cmluZykge1xuICAgICAgY29uc29sZS5sb2coY2hyKTsgLy8gaCwgZSwgbCwgbCwgb1xuICAgIH1cblxuICAgIC8vIFNwcmVhZCBjb25zdHJ1Y3RcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gdmFyIGhlbGxvID0gXCJ3b3JsZFwiO1xuICAgIC8vIHZhciBbZmlyc3QsIHNlY29uZCwgLi4ucmVzdF0gPSBbLi4uaGVsbG9dO1xuICAgIC8vIGNvbnNvbGUubG9nKGZpcnN0LCBzZWNvbmQsIHJlc3QpOyAvLyB3IG8gW1wiclwiLFwibFwiLFwiZFwiXVxuXG4gICAgLy8gSW5maW5pdGUgaXRlcmF0b3JcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciBpZHMgPSB7XG4gICAgICAqW1N5bWJvbC5pdGVyYXRvcl06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICdpZC0nICsgaW5kZXgrKywgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgICAgXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICBcbiAgICBmb3IgKHZhciB2YWx1ZSBvZiBpZHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgIGRvbmU6IHRydWU7XG4gICAgICBcbiAgICAgIGlmIChjb3VudGVyKysgPiAxMDApIHsgLy8gbGV0J3MgbWFrZSBzdXJlIHdlIGdldCBvdXQhXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdlbmVyYXRvcnNcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9TdGF0ZW1lbnRzL2Z1bmN0aW9uKlxuICAgIC8vIC0tLS0tLS0tLS1cbiAgICAvLyBmdW5jdGlvbiogbGlzdCh2YWx1ZSkge1xuICAgIC8vICAgZm9yICh2YXIgaXRlbSBvZiB2YWx1ZSkge1xuICAgIC8vICAgICB5aWVsZCBpdGVtO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAgXG4gICAgLy8gZm9yICh2YXIgdmFsdWUgb2YgbGlzdChbMSwgMiwgM10pKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgLy8gfVxuICAgICBcbiAgICAvLyB2YXIgaXRlcmF0b3IgPSBsaXN0KFsxLCAyLCAzXSk7XG4gICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiBpdGVyYXRvci5uZXh0KTsgLy8gZnVuY3Rpb25cbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSk7IC8vIGZ1bmN0aW9uXG4gICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKGl0ZXJhdG9yLm5leHQoKS52YWx1ZSk7IC8vIDFcbiAgICAgXG4gICAgLy8gZm9yICh2YXIgdmFsdWUgb2YgaXRlcmF0b3IpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHZhbHVlKTsgLy8gMiwgM1xuICAgIC8vIH1cblxuXG4vLyBFUzYgQ09ERSAtIEFycm93IGZ1bmN0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBcdGNvdW50LCBjaGFuZ2VUZW1wLCBzdG9wQ291bnRpbmdcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc3RvcENvdW50aW5nKCkge1xuICAgICAgICBjbGVhckludGVydmFsKG5JbnRlcnZJZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlVGVtcCgpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgICAgICB2YXIgdGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykudmFsdWU7XG4gICAgICAgIC8vIHZhciBuYW1lID0gXCJTdWVcIiwgdGltZSA9IFwieWVzdGVyZGF5XCI7XG4gICAgICAgIHRtcHR4dC5pbm5lckhUTUwgPSBgSGVsbG8gJHtuYW1lfSwgaG93IGFyZSB5b3UgJHt0aW1lfT9gO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY291bnQoKSB7XG4gICAgICAgIHZhciBjb3VudCA9IDBcbiAgICAgICAgLy8gbkludGVydklkID0gc2V0SW50ZXJ2YWwoKCkgPT4gY29uc29sZS5sb2coY291bnQrKyksIDQwMCk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzdG9wQ291bnRpbmcoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwobkludGVydklkKTtcbiAgICB9XG5cbiAgICAvLyBMaXhpY2FsIHRoaXNcbiAgICB2YXIgYm9iID0ge1xuICAgICAgICBfbmFtZTogXCJCb2JcIixcbiAgICAgICAgX2ZyaWVuZHM6IFtcIkphY2tcIixcIlN1ZVwiLFwiQmFybmV5XCJdLCAgLy8gQURERUQgTkFNRVNcbiAgICAgICAgcHJpbnRGcmllbmRzKCkge1xuICAgICAgICAgICAgdGhpcy5fZnJpZW5kcy5mb3JFYWNoKGYgPT5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9uYW1lICsgXCIga25vd3MgXCIgKyBmKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJBcnJvdyBmdW5jdGlvbiBkZW1vIDFcIik7XG4gICAgYm9iLnByaW50RnJpZW5kcygpO1xuXG5cbi8vIFByb21pc2UgRGVtb1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcHJvbWlzZUNvdW50ID0gMDtcblxuZnVuY3Rpb24gdGVzdFByb21pc2UoKSB7XG4gICAgdmFyIHRoaXNQcm9taXNlQ291bnQgPSArK3Byb21pc2VDb3VudDtcblxuICAgIHZhciBsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nJyk7XG4gICAgbG9nLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpc1Byb21pc2VDb3VudCArXG4gICAgICAgICcpIFN0YXJ0ZWQgKDxzbWFsbD5TeW5jIGNvZGUgc3RhcnRlZDwvc21hbGw+KTxici8+Jyk7XG5cbiAgICAvLyBXZSBtYWtlIGEgbmV3IHByb21pc2U6IHdlIHByb21pc2UgdGhlIHN0cmluZyAncmVzdWx0JyAoYWZ0ZXIgd2FpdGluZyAzcylcbiAgICB2YXIgcDEgPSBuZXcgUHJvbWlzZShcbiAgICAgICAgLy8gVGhlIHJlc29sdmVyIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSBhYmlsaXR5IHRvIHJlc29sdmUgb3JcbiAgICAgICAgLy8gcmVqZWN0IHRoZSBwcm9taXNlXG4gICAgICAgIGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbG9nLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpc1Byb21pc2VDb3VudCArXG4gICAgICAgICAgICAgICAgJykgUHJvbWlzZSBzdGFydGVkICg8c21hbGw+QXN5bmMgY29kZSBzdGFydGVkPC9zbWFsbD4pPGJyLz4nKTtcbiAgICAgICAgICAgIC8vIFRoaXMgb25seSBpcyBhbiBleGFtcGxlIHRvIGNyZWF0ZSBhc3luY2hyb25pc21cbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBmdWxmaWxsIHRoZSBwcm9taXNlICFcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzUHJvbWlzZUNvdW50KTtcbiAgICAgICAgICAgICAgICAvL30sIE1hdGgucmFuZG9tKCkgKiAyMDAwICsgNjAwMCk7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH0pO1xuXG4gICAgLy8gV2UgZGVmaW5lIHdoYXQgdG8gZG8gd2hlbiB0aGUgcHJvbWlzZSBpcyBmdWxmaWxsZWRcbiAgICAvL2J1dCB3ZSBvbmx5IGNhbGwgdGhpcyBpZiB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZC9mdWxmaWxsZWRcbiAgICBwMS50aGVuKFxuICAgICAgICAvLyBKdXN0IGxvZyB0aGUgbWVzc2FnZSBhbmQgYSB2YWx1ZVxuICAgICAgICBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIGxvZy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHZhbCArXG4gICAgICAgICAgICAgICAgJykgUHJvbWlzZSBmdWxmaWxsZWQgPHNwYW4gY2xhc3M9XCJyZWRkZWRcIj42IHNlY29uZHMgbGF0ZXI8L3NwYW4+ICg8c21hbGw+QXN5bmMgY29kZSB0ZXJtaW5hdGVkPC9zbWFsbD4pPGJyLz4nKTtcbiAgICAgICAgfSlcbiAgICAuY2F0Y2goXG4gICAgICAgIC8vIFJlamVjdGVkIHByb21pc2VzIGFyZSBwYXNzZWQgb24gYnkgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZClcbiAgICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSGFuZGxlIHJlamVjdGVkIHByb21pc2UgKCcrcmVhc29uKycpIGhlcmUuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgbG9nLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpc1Byb21pc2VDb3VudCArXG4gICAgICAgICcpIFByb21pc2UgbWFkZSAoPHNtYWxsPlN5bmMgY29kZSB0ZXJtaW5hdGVkPC9zbWFsbD4pPGJyLz4nKTtcbn0gXG5cbmlmIChcIlByb21pc2VcIiBpbiB3aW5kb3cpIHtcbiAgdmFyIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuXCIpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGVzdFByb21pc2UpO1xufSBlbHNlIHtcbiAgbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZycpO1xuICBsb2cuaW5uZXJIVE1MID0gXCJMaXZlIGV4YW1wbGUgbm90IGF2YWlsYWJsZSBhcyB5b3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRoZSA8Y29kZT5Qcm9taXNlPGNvZGU+IGludGVyZmFjZS5cIjtcbn1cblxuXG4vLyBGUk9NIEJhYmVsOiBodHRwOi8vYmFiZWxqcy5pby9kb2NzL2xlYXJuLWVzMjAxNS9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuXG5cbiJdfQ==
