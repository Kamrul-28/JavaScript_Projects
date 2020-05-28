window.onload = function() {

    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');


    var div = document.getElementsByClassName('paragraph');

    var num1 = document.getElementById('number1'),
        num2 = document.getElementById('number2');



    btn1.addEventListener('click', function() {
        window.alert('Stop');
    });



    //CallBack Function
    btn2.addEventListener('click', myFunction);

    function myFunction() {
        alert('Hello');
    }



    btn3.addEventListener('click', function() {
        window.alert(div[0].innerHTML);
    });

    //Addition with Validation

    btn4.addEventListener('click', function() {
        if (num1.value !== '' && num2.value !== '') {
            var result = parseInt(num1.value) + parseInt(num2.value);
            alert(result)
        } else {
            alert('Plese Enter Both Values')
        }

    });

    //Normal Function
    // function myFunction() {
    //     alert('This is a Normal Function');
    // }

    // myFunction();

    //Anonymous Function

    var var5 = document.getElementById('btn5');
    var5.addEventListener('click', function() {

        alert('Anonymous Function');
    })


    //Callback Function

    // var var5 = document.getElementById('btn5');
    // var5.addEventListener('click', myFunction);

    //Self Executed Function

    // (function() {
    //     alert('This is a self Executed Function');
    // })();



    //Object And Array

    var student = []
    var btn6 = document.getElementById('btn6');

    var name = document.getElementById('name');
    var age = document.getElementById('age');


    btn6.addEventListener('click', function() {

        var person = {
            name: name.value,
            age: age.value
        }

        student.push(person)

        name.value = ""
        age.value = ""

        console.log(student)


    });

}