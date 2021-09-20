
"use strict";

// Part 1

let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved");
        }, 4000);
    });
}

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction2 is done");
        }, 3000);
    });
}

asyncFunction()
    .then(function(val) {
        console.log("Yeah!! " + val);
        return asyncFunction2();
    })
    .then(function(val) {
        console.log("Second promise: " + val);
    });



// Part 2

let wordnikWords = "http://api.wordnik.com/v4/words.json/",
    wordnikWord = "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=2efe06dd56a60633b30010e4d970da03b55279db9896d7127",
    wordObj;

fetch(wordnikWords + "randomWord" + apiKey)
    .then(function(response) {
        wordObj = response;
        //console.log(wordObj);
        return response.json();
    })
    .then(function(data) {
        console.log(data.word);
        return fetch(wordnikWord + data.word + "/definitions" + apiKey);
    })
    .then(function(def) {
        //console.log(def);
        return def.json();
    })
    .then(function(def) {
        console.log(def);
    })
    .catch(function(err) {
        console.log(err);
    });

console.log("See this is asynchronous!");
