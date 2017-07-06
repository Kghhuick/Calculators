document.addEventListener("DOMContentLoaded", function(event) {



var allButtons = document.querySelectorAll("input[type=button]");
var input = document.querySelector("input[type=text]");
var result = document.querySelector("#basicCalculator > input:nth-child(20)");
var cancel = document.querySelector("#basicCalculator > input:nth-child(19)");


[...allButtons].forEach(function(el){
 el.addEventListener("click",function(){
   if(el.value=="=" || el.value=="C"){
     return;
   } else {
  input.value=input.value + el.value;
  console.log(input.value);
  console.log(typeof(input.value));
   return input.value;
 }
});

});


result.addEventListener("click",function(){
 input.value=eval(input.value);
});


cancel.addEventListener("click",function(){
  input.value=""
});











});
