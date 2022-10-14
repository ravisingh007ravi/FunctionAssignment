// Problem 3
// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler

function infotrim(){
    let str="   FunctionUp   ";
    let name1="Hello world!"
    console.log(str.trim());
    console.log(name1.toLowerCase());
    console.log(name1.toUpperCase());
    return "done";
}

//infotrim()
module.exports.infotrim=infotrim