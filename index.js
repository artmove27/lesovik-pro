/*
*    index.js@1.1.1
*
*
*/

var self = require('sdk/self');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
var {Cc, Ci} = require("chrome");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var windows = require("sdk/windows").browserWindows;

//мсесто для вставок

//

var button = buttons.ActionButton({
  id: "lesovik-link",
  label: "lesovik",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: ClickOpenWin
});

function handleClick(state) {
  tabs.open({
   url: "lesovik.html",
     inNewWindow: true
});
}

function ClickOpenWin() {

  //windows.open("http://www.example.com");
  windows.open("./gui.html");
  console.log("222");
}


function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;
