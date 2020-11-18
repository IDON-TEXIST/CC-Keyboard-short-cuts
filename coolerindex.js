// ==UserScript==
// @name Cookie Clicker Keyboard Shortcuts
// @namespace Cookie
// @include http://orteil.dashnet.org/cookieclicker/
// @include https://orteil.dashnet.org/cookieclicker/
// @version 1
// @grant none
// ==/UserScript==

var code = "(" + (function() {
    var checkReady = setInterval(function() {
        if (typeof Game.ready !== 'undefined' && Game.ready) {
            Game.LoadMod('https://IDON-TEXIST.github.io/cc-Keyboard-short-cuts/index.js');
            clearInterval(checkReady);
        }
    }, 1000);
}).toString() + ")()";

window.eval(code);
