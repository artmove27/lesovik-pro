/**
 * Created by zews on 19.01.2016.
 */
/*
 *
 *
 *
 */

var versions = "gui.js@4.0.2";
console.log(versions);
// добавляем кнопки в меню
function Menus(){
    this.menuView = function(ntnName, menu) {
        // menu.appendChild(ntnName);
        $("#" + menu).append(ntnName);
    }

}
//создаем кнопки
function buttons(BtnId, BtnName){

   this.Id = BtnId;
    this.BtnName = BtnName;
    var self = this;

      function creat(){
        //создаем кнопку
        var addbuttont =  document.createElement('button');
        addbuttont.className = "md-trigger";
        addbuttont.id = self.Id;
        addbuttont.innerHTML = self.BtnName;
        return addbuttont;
         }

   akshin = function(){

        $("#" + self.Id).live('click', function() {
               // alert('Вы нажали на элемент кнопку');
          //  alert(self.Id);
            self.addakshin();
            }
        )

    };
      this.addaksin = null;
    this.views =function(){
       akshin();
        return  creat();

            }
}

// модальные окна
function  modalWindow(mId, classN, Title, contemt){
    var self = this;
    this.Id = mId;
    this.classN = classN;
    this.Title = Title ;
     this.msg = contemt;

      content = function(){
          var content  = self.msg + "jghjgh" ;
          return content;
    }

   function creat() {
       $("#art-main").prepend("<div id=" + self.Id +"></div>");
       $("#"+self.Id).addClass("md-modal");
       $("#"+self.Id).addClass(self.classN);
       //

       $("#"+self.Id).prepend("<div id=" + "cn-" + self.Id +"></div>");
       $("#cn-"+self.Id).addClass("md-content");

       $("#cn-"+self.Id).prepend("<h3 id=" + "tl-" + self.Id +"></h3>");
          $("#tl-"+self.Id).prepend(self.Title);
       $("#tl-"+self.Id).after( "<div id=cn2-" + self.Id + "></div>" );

      // $("#cn2-"+self.Id).prepend( content() );
       $("#cn2-"+self.Id).prepend( self.msg );

     //  $("#"+self.Id).addClass("md-show");
     //  $("#mdoverlay").addClass("md-show");
   }
   this.modalOpen = function(){
       $("#"+self.Id).addClass("md-show");
        $("#mdoverlay").addClass("md-show");
    };

    this.modalClose = function(){
       // alert("do " + self.Id);
        $("#"+self.Id).removeClass("md-show");
        $("#mdoverlay").removeClass("md-show");
       // alert("to");
    };
    creat();
    //...
}

// меню на главной
var m1 = new Menus();
var b1 = new buttons("vk", "Открыть VK");
b1.addakshin = function() {
     self.port.emit('tbo', "http://vk.com");
    event.stopPropagation();
    event.preventDefault();
}
m1.menuView( b1.views(), "menu" );

// окна
var content = "<ul>" +
    "<li>3333</li>" +
    "<li>456546b</li>" +
    "</ul>";
var teswin = new modalWindow("modal-1", "md-effect-1", "Тест окна", content )
//  открытие окна
var b2 = new buttons("b2", "OpenWindow");
m1.menuView( b2.views(), "menu" );
b2.addakshin = function() {
   // alert("do " + teswin.Title);
    teswin.modalOpen();
   // alert("end");
};

var b2close = new buttons("b2close", "Закрыть");  //кнопка закрытие окна
 b2close.addakshin = function() {
    teswin.modalClose();
};         // закрываем окно

var teswin_footmenu = new Menus(); // нижние меню окна
teswin_footmenu.menuView( b2close.views(), "cn2-" + teswin.Id );  //добавляем кнопки в нижнее меню
$("#b2close").removeClass("md-trigger");
$("#b2close").addClass("md-close");

// настройки системы

// help
//добовляем свой контент
var content = "<ul>" +
    "<li>О программе</li>" +
    "<li>Помощь</li>" +
    "</ul>";
var help = new modalWindow("modal-2", "md-effect-1", "Помощь", content)
var h1 = new buttons("h1", "Помощь");
m1.menuView( h1.views(), "menu" );
h1.addakshin = function() {

    help.modalOpen();

};

alert(help.msg2);
//кнопка закрытие окна
var helpclose = new buttons("helpclose", "Закрыть");

helpclose.addakshin = function() {
   // alert("do " + help.Title);
    help.modalClose();
   // alert("end");
};
// закрываем окно

var help_footmenu = new Menus(); // нижние меню окна
help_footmenu.menuView( helpclose.views(), "cn2-" + help.Id );  //добавляем кнопки в нижнее меню
//меняем class
$("#helpclose").removeClass("md-trigger");
$("#helpclose").addClass("md-close");




