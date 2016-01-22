/**
 * Created by zews on 22.01.2016.
 */
var versions = "init.js@0.0.2";
console.log(versions);
//

function StartUp(){
    this.info = function(){
          console.log("StartUp Init");
      }
    var enabled = true;
    this.enable = function() {
        enabled = true;
    };

    this.disable = function() {
        console.log("disable Init");
        enabled = false;
    };
    this.GetExtebsionsStart = function (){

        return enabled;
   }

      //...
}
var ter = new StartUp();
exports.enabled =  ter.GetExtebsionsStart();
//console.log(ter.GetExtebsionsStart());
exports.init =  StartUp();
