/**
 * Created by zews on 19.01.2016.
 *
 */

var versions = "gui.js@4.0.4";
console.log(versions);
// добавляем кнопки в меню
function Menus(){
    this.menuView = function(ntnName, menu) {
        // menu.appendChild(ntnName);
        $("#" + menu).append(ntnName);
    }

}
//создаем кнопки
function buttons(BtnId, BtnName, classN){

   this.Id = BtnId;
    this.BtnName = BtnName;
    this.classN = classN;
    var self = this;

      function creat(){
        //создаем кнопку
        var addbuttont =  document.createElement('button');
        addbuttont.className = self.classN;
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
   // this.Id = mId;
  //  this.classN = classN;
   // this.Title = Title ;
     msg = contemt;

      content = function(){
          var content  = msg + "jghjgh" ;
          return content;
    }

   function creat() {
       $("#art-main").prepend("<div id=" + mId +"></div>");
       $("#"+mId).addClass("md-modal");
       $("#"+mId).addClass(classN);
       //

       $("#"+mId).prepend("<div id=" + "cn-" + mId +"></div>");
       $("#cn-"+mId).addClass("md-content");

       $("#cn-"+mId).prepend("<h3 id=" + "tl-" + mId +"></h3>");
          $("#tl-"+mId).prepend(Title);
       $("#tl-"+mId).after( "<div id=cn2-" + mId + "></div>" );

      // $("#cn2-"+self.Id).prepend( content() );
       $("#cn2-"+mId).prepend( msg );

     //  $("#"+self.Id).addClass("md-show");
     //  $("#mdoverlay").addClass("md-show");
      // alert( "Привет, я " + Title );
   }
   this.modalOpen = function(){
       $("#"+mId).addClass("md-show");
        $("#mdoverlay").addClass("md-show");
    };

    this.modalClose = function(){
       // alert("do " + self.Id);
        $("#"+mId).removeClass("md-show");
        $("#mdoverlay").removeClass("md-show");
       // alert("to");
    };
    creat();
    //...
}

// меню на главной
var m1 = new Menus();
var b1 = new buttons("vk", "Открыть VK", "md-trigger");
b1.addakshin = function() {
     self.port.emit('tbo', "http://vk.com");
    event.stopPropagation();
    event.preventDefault();
}
m1.menuView( b1.views(), "menu" );
//вставляем интерфейс


// настройки системы
var content = "<ul>" +
    "<li><a href='#'>Редактировать пользователей</a></li>" +
    "<li>Активировать PRO версию</li>" +
    "</ul>" +
    "Основные настройки системы" +
    "<br /><br />";
var teswin = new modalWindow("modal-1", "md-effect-1", "Настройки", content )
//  открытие окна
var b2 = new buttons("b2", "Настройки", "md-trigger");
m1.menuView( b2.views(), "menu" );
b2.addakshin = function() {
   // alert("do " + teswin.Title);
    teswin.modalOpen();
   // alert("end");
};

var b2close = new buttons("b2close", "Закрыть", "md-close");  //кнопка закрытие окна
 b2close.addakshin = function() {
    teswin.modalClose();
};         // закрываем окно

var teswin_footmenu = new Menus(); // нижние меню окна
teswin_footmenu.menuView( b2close.views(), "cn2-modal-1");  //добавляем кнопки в нижнее меню



// help
//добовляем свой контент
var content = "<ul>" +
    "<li>О программе</li>" +
    "<li>Помощь</li>" +
    "<li>Лицензия</li>" +
    "</ul>";
var help = new modalWindow("modal-2", "md-effect-1", "Помощь", content)
var h1 = new buttons("h1", "Помощь", "md-trigger");
m1.menuView( h1.views(), "menu" );
h1.addakshin = function() {

    help.modalOpen();

};


//кнопка закрытие окна
var helpclose = new buttons("helpclose", "Закрыть", "md-close");

helpclose.addakshin = function() {
   // alert("do " + help.Title);
    help.modalClose();
   // alert("end");
};
// закрываем окно

var help_footmenu = new Menus(); // нижние меню окна
help_footmenu.menuView( helpclose.views(), "cn2-modal-2");  //добавляем кнопки в нижнее меню
//меняем class
//$("#helpclose").removeClass("md-trigger");
//$("#helpclose").addClass("md-close");




