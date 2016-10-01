'use strict';

var name = "Bob", time = "today", nIntervId;
var tmptxt = document.getElementById('temp1');

tmptxt.insertAdjacentHTML('beforeend',`Hello ${name}, how are you ${time}?`);


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
    for (var value of list) {
      console.log(value); // 3, 5, 7
    }

    // Built-in iterables
    // ------------------
    var string = "hello";
     
    for (var chr of string) {
      console.log(chr); // h, e, l, l, o
    }

    // Spread construct
    // ----------------
    // var hello = "world";
    // var [first, second, ...rest] = [...hello];
    // console.log(first, second, rest); // w o ["r","l","d"]

    // Infinite iterator
    // -----------------
    var ids = {
      *[Symbol.iterator]: function () {
        var index = 0;
        
        return {
          next: function () {
            return { value: 'id-' + index++, done: false };
          }
        };
      }
    };
     
    var counter = 0;
     
    for (var value of ids) {
      console.log(value);
      done: true;
      
      if (counter++ > 100) { // let's make sure we get out!
        break;
      }
    }

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
    module.exports = {
    	count, changeTemp, stopCounting
    };

    function stopCounting() {
        clearInterval(nIntervId);
    }

    function changeTemp() {
        var name = document.getElementById('name').value;
        var time = document.getElementById('time').value;
        // var name = "Sue", time = "yesterday";
        tmptxt.innerHTML = `Hello ${name}, how are you ${time}?`;

    }

    function count() {
        var count = 0
        // nIntervId = setInterval(() => console.log(count++), 400);
    }


    function stopCounting() {
        clearInterval(nIntervId);
    }

    // Lixical this
    var bob = {
        _name: "Bob",
        _friends: ["Jack","Sue","Barney"],  // ADDED NAMES
        printFriends() {
            this._friends.forEach(f =>
                console.log(this._name + " knows " + f));
        }
    }
    console.log("Arrow function demo 1");
    bob.printFriends();


// Promise Demo
// ======================================================
var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;

    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>');

    // We make a new promise: we promise the string 'result' (after waiting 3s)
    var p1 = new Promise(
        // The resolver function is called with the ability to resolve or
        // reject the promise
        function(resolve, reject) {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');
            // This only is an example to create asynchronism
            window.setTimeout(
                function() {
                    // We fulfill the promise !
                    resolve(thisPromiseCount);
                //}, Math.random() * 2000 + 6000);
                }, 3000);
        });

    // We define what to do when the promise is fulfilled
    //but we only call this if the promise is resolved/fulfilled
    p1.then(
        // Just log the message and a value
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled <span class="redded">6 seconds later</span> (<small>Async code terminated</small>)<br/>');
        })
    .catch(
        // Rejected promises are passed on by Promise.prototype.then(onFulfilled)
        function(reason) {
            console.log('Handle rejected promise ('+reason+') here.');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
} 

if ("Promise" in window) {
  var btn = document.getElementById("btn");
  btn.addEventListener("click",testPromise);
} else {
  log = document.getElementById('log');
  log.innerHTML = "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
}


// FROM Babel: http://babeljs.io/docs/learn-es2015/
// ======================================================





