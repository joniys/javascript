/*var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var  text   =document.getElementById("teksti_id") ;


button.onclick = function(){
    text.innerHTML=input.value;
}
*/

var text = "loremloremloremloremloremloremloremlorem";
var result = text.search("digital");
document.getElementById("result") .innerHTML=result;

var text1 = "loremloremloremloremloremloremloremlorem";
var result1 = text1.search(/digital school/, "another school");
document.getElementById("result1") .innerHTML=result1;

var text = "loremloremloremloremloremloremloremlorem";
var regex = /(top|best|lorem)/g;
document.getElementById("result3") .innerHTML= text.match(regex);