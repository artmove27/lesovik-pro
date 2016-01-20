/**
 * Created by zews on 19.01.2016.
 */
/*
 *
 *
 *
 */

var versions = "gui.js@2.1.2";
console.log(versions);

// конструктор кнопок
function Btn(BtnId, BtnName) {
    this.BtnId = BtnId;
    this.BtnName = BtnName;

    this.buttonCrt = function() {
       var addbuttont =  document.createElement('button');
        addbuttont.className = "md-trigger";
        addbuttont.id = BtnId
        addbuttont.innerHTML = this.BtnName;
            return addbuttont;
    }
      //  функции
    this.Activate = null;

}


// конструктор меню


function Menus(){
    this.menuView = function(ntnName, menu) {
      // menu.appendChild(ntnName);
        $("#" + menu).append(ntnName);
   }

}


//function ModalWindow(){
//   Menus.apply(this, arguments);
//   Btn.apply(this, arguments);


//}

// var modas = new ModalWindow();


// собираем меню
var bb = new Btn("111", "222");
var bc = new Btn("987", "О программе");
var tvk = new Btn("tvk", "Перейти в VK");
tvk.Activate = function() {
    $("#" + tvk.BtnId).live('click', function() {
       alert('Вы нажали на элемент кнопку');
            ctrpage();
    }
    )}
tvk.Activate();

var mn = new Menus();
mn.menuView( tvk.buttonCrt(), "menu");
mn.menuView( bb.buttonCrt(), "menu" );
mn.menuView( bc.buttonCrt(),"menu" );

// вставки
//
function ctrpage(){
    window.addEventListener('click', function(event) {
        self.port.emit('click', event.target.toString());
        event.stopPropagation();
        event.preventDefault();
    }, false);

    self.port.on('warning', function(message) {
        window.alert(message);
    });

}
//



