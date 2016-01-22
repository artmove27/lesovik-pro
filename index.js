/*
*
*
*
*/

var versions = "index.js@1.1.6";
console.log(versions);

// "permissions": {"private-browsing": true},
var windows = require("sdk/windows").browserWindows;
var notifications = require("sdk/notifications");
var self = require('sdk/self');
//var {Cc, Ci} = require("chrome");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var windows = require("sdk/windows").browserWindows;
var data = require("sdk/self").data
var gui = require("sdk/page-mod");
//var init = require("./init");
//init.info;
//init.disable;

function StartUp() {
    this.info = function () {
        console.log("StartUp Init");
    }
    var enabled = true;
    this.enable = function () {
        enabled = true;
    };

    this.disable = function () {
        console.log("disable Init");
        enabled = false;
    };
    this.GetExtebsionsStart = function () {

        return enabled;
    }

    this.Msg = function(Title, msg){
        notifications.notify({
            title: Title,
            text: msg,
            data: "did gyre and gimble in the wabe",
            onClick: function (data) {
                console.log(data);
                // console.log(this.data) would produce the same result.
            }
        });

    }

//..

}
 var init = new StartUp();
//init.disable();
console.log(init.GetExtebsionsStart());

//контроллер
 function listiner(worker) {
    worker.port.on('tbo', function(urs) {
             tabs.open(urs);
        tabs.on('open', onOpen);
    });
     //...

   }

//мсесто для вставок

function onOpen(tab) {
        console.log(tab.url + " is open");
        tab.on("pageshow", logShow);
        tab.on("activate", logActivate);
        tab.on("deactivate", logDeactivate);
        tab.on("close", logClose);
    }

    function logShow(tab) {
       // init.disable();
        console.log(tab.url + " is loaded");
    }

    function logActivate(tab) {
        console.log(tab.url + " is activated");
    }

    function logDeactivate(tab) {
        console.log(tab.url + " is deactivated");
    }

    function logClose(tab) {
        if(tab.url == "resource://alfa-lesovik/data/gui.html"){

        }
        console.log(tab.url + " is closed");
    }

    tabs.on('open', onOpen);
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

//...
function handleClick(state) {
  tabs.open({
   url: "lesovik.html",
     inNewWindow: true
});
}
//...

function ClickOpenWin() {
 if (init.GetExtebsionsStart() == true) {
     //windows.open("http://www.example.com");
    // tabs.open({
    //     url: "gui.html",
    //     inNewWindow: true
  //   });
     windows.open("./gui.html");
     console.log("gui.html@2.1.1");
          init.disable();
   //  tabs.on('open', onOpen);

     windows.on("close", function() {
         init.enable();
         console.log("The active window was closed");
     })

 }else {
     init.Msg("Приложение уже запущено", "Можно запустить только одну копию приложения")
 };
    //...
}
//tabs.onClose(init.enable());

gui.PageMod({
  include: data.url("gui.html"),
 // contentScriptFile: ("./content-gui.js")
  contentScriptWhen: 'ready',
  contentScriptFile: [data.url("jquery-1.8.3.js"),
                            data.url("gui.js"),
                            data.url("n2.js"),

  ],
    onAttach: listiner



});


//tabs.open("http://vk.com");

function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;
