"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// singleton.js
var somePrivateState = ["state"];

function privateMethod() {
    console.log("privateMethod");
}

exports.default = {
    method1: function method1() {
        console.log("method1");
    },
    method2: function method2() {
        console.log("method2");
    }
};