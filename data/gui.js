/**
 * Created by zews on 19.01.2016.
 */
/*
 *    gui.js@1.1.1
 *
 *
 */


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
    this.BtnClick = function() {


    }
}


// конструктор меню

function Menus(name){

     this.name = name;
    //добовляем кнопки в меню и сортируем
     this.addMenuItem = function() {
        // alert(this.name);
        menu.appendChild(this.name);
      }

}

//var bb = document.createElement('button');
//bb.innerHTML = "JJJJ";
//menu.appendChild( bb);
//

var bb = new Btn("111", "222");
var bc = new Btn("987", "О программе");
//menu.appendChild( bb.buttonCrt() );
var mn = new Menus(bb.buttonCrt());
mn.addMenuItem();
var mns = new Menus(bc.buttonCrt());
mns.addMenuItem();