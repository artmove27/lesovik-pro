/**
 * Created by zews on 19.01.2016.
 */
/*
 *
 *
 *
 */

var versions = "gui.js@3.0.1";
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
        //сщздаем кнопку
        var addbuttont =  document.createElement('button');
        addbuttont.className = "md-trigger";
        addbuttont.id = self.Id;
        addbuttont.innerHTML = self.BtnName;
        return addbuttont;
         }

   akshin = function(){

        $("#" + self.Id).live('click', function() {
                alert('Вы нажали на элемент кнопку');
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
function  modalWindow(mId, classN, Title){
    var self = this;
    this.Id = mId;
    this.classN = classN;
    this.Title = Title ;

   function creat() {
       $("#art-main").prepend("<div id=" + self.Id +"></div>");
       $("#"+self.Id).addClass("md-modal");
       $("#"+self.Id).addClass(self.classN);
       //
       //var cnid = "#";
      var cnid = "#" + self.Id + " div.md-conten";
       alert(cnid);
       $(cnid).prepend('<h3>dsfsdf</h3>');
       $("#"+self.Id).prepend('<div class=md-content></div>');
      // $("#cn-"+self.Id).prepend('<h3></h3>');
       //
    //   $("#"+self.Id).addClass("md-show");
    //   $("#mdoverlay").addClass("md-show");
   }

    creat();
    //...
}
// окна
var teswin = modalWindow("modal-1", "md-modal-1", "oooo")

// меню на главной
var m1 = new Menus();
var b1 = new buttons("qq", "Супер кнопка");
b1.addakshin = function() {alert("OOOOOO")};
m1.menuView( b1.views(), "menu" );

// тест открытия окна
var b2 = new buttons("b2", "OpenWindow");
m1.menuView( b2.views(), "menu" );
//b2.addakshin = function() {


  //  $("#mdoverlay").addClass("md-show");
//   $("#"+teswin.Id).addClass("md-show");
  //      alert("O!!");
//};
//$("#art-main").prepend("<div class='md-modal' id='modal-1'>sdsad</div>");