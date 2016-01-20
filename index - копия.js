/*
*
*
*
*/
var versions = "index.js@1.1.3";
console.log(versions);
// "permissions": {"private-browsing": true},
var self = require('sdk/self');
//var {Cc, Ci} = require("chrome");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var windows = require("sdk/windows").browserWindows;
var data = require("sdk/self").data
var pageMod = require("sdk/page-mod");

//контроллер
 function startListening(worker) {
    worker.port.on('click', function (html) {
      worker.port.emit('warning', 'Do not click this again');
    });
  }

//

//мсесто для вставок

//

var button = buttons.ActionButton({
  id: "lesovikPRO-link",
  label: "lesovik-PRO",
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
  console.log("gui.html");
}


pageMod.PageMod({
  include: data.url("gui.html"),
 // contentScriptFile: ("./content-gui.js")
  contentScriptWhen: 'ready',
  contentScriptFile: [data.url("jquery-1.8.3.js"),
                            data.url("gui.js")],
    onAttach: startListening
});



//tabs.open("http://vk.com");



function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;
