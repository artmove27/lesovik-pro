/**
 * 
 * 
 *
 * 
 * 
 * 
 * Copyright 2015, 
 * 
 */

  var  action ;
 var mdopen;
 var mClose;
 var URLS;
  //var mdclose;

//======== просто функции
function pause() {
  //alert( 'Привет' );
}

//============ class для открытия и закрытия окон
  function modalTools()
      {
       //---------------- 
        this.modClose = function()
          {
           // alert ("mdclose");
          
              document.getElementById(mdclose).classList.remove('md-show');
           
          }
        //---------------- 
        this.modOpen = function(winop)
        {
          
          document.getElementById(mdopen).classList.add('md-show');
       document.getElementById("mdoverlay").classList.add('md-show');
        }
        //---------------- 
        }   
//============= class обработчик событий

 function btncl(elem) {
  
   //---------------- 
   this.modal = function() {
           modT.modOpen();
           };
   
   //------------------------
   
     this.mClose = function() {
  
       modT.modClose();
 
            if (mdopen) {
             modT.modOpen();
                  }
    };
   
    //------------------------
   this.testbot = function() {
  
   
      
      var URLs = "imacros://run/?m="+URLS;
     //document.cookie = "userName=Vasya";
   //window.open("imacros://run/?m=TestPost.iim");
   myWindow = window.open(URLs, 'IIM', "width=850,height=700");
      myWindow.postMessage("сообщение", "*");
   //  ww =  myWindow.document.write("var ww=222;");
    //  window.location.href=URLs;
      //  myWindow.window.close(); 
           modT.modClose();
   }
   //------------------------
   
    var self = this;
    //-----------------
  
    var container = document.getElementById('art-main');
    
    container.onclick = function(event) {
          action = event.target.getAttribute('data-action');
        mdopen = event.target.getAttribute('data-modalOpen');
        mdclose = event.target.getAttribute('data-modalClose');
         URLS = event.target.getAttribute('bots');
               
     //if (!event.target.classList.contains('md-modal')) return;
      
      if (action) {
        self[action]();
      }
    
    }
   //----------------------

 }

//========= INIT =================

modT= new modalTools();
ert = new btncl();


