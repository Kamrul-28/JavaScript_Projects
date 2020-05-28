/*
    Ecma Script 5 ES5

    Normal Function
    Anonymous Function
    Call Back Function
    self Executed Funnction
    Higer Order Function


    Arrow function(ES6)
*/


//Normal Function
function myFunction() {
    alert('This is a Normal Function');
}

myFunction();


//Self Executed Function

(function() {
    alert('This is a self Executed Function');
})();


//Anonymous Function

var var5 = document.getElementById('btn5');
var5.addEventListener('click', function() {

    alert('Anonymous Function');
})


//Callback Function

var var5 = document.getElementById('btn5');
var5.addEventListener('click', myFunction);


//Arrow Function ES6