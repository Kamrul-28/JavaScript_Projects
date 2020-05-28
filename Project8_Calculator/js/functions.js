window.onload = function() {


    var btns = [document.querySelector('.btn1'), document.querySelector('.btn2'),
        document.querySelector('.btn3'), document.querySelector('.btn4'),
        document.querySelector('.btn5'), document.querySelector('.btn6'),
        document.querySelector('.btn7'), document.querySelector('.btn8'),
        document.querySelector('.btn9'), document.querySelector('.btn10'),
        document.querySelector('.btn11'), document.querySelector('.btn12'),
        document.querySelector('.btn13'), document.querySelector('.btn14'), document.querySelector('.btn15')

    ];
    const screen = document.querySelector('.screen');
    const equalBtn = document.querySelector('.btn-equal');
    const clearBtn = document.querySelector('.btn-clear');



    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
            let number = btns[i].getAttribute('data-num');
            screen.value += number;

        });

    }
    equalBtn.addEventListener('click', function() {
        if (screen.value === '') {
            alert('Input is empty ');
        } else {
            let value = eval(screen.value);
            screen.value = value;
        }
    });


    clearBtn.addEventListener('click', function() {
        screen.value = '';
    });




}