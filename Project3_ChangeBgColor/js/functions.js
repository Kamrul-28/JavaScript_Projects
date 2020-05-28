window.onload = function() {

    const colorBtn = document.querySelector('.colorBtn ');
    const bodyBcg = document.querySelector('body');
    const colors = ['yellow', 'red', 'green', 'purple', 'blue'];

    colorBtn.addEventListener('click', function() {
        // bodyBcg.style.backgroundColor = colors[3];
        let random = Math.floor(Math.random() * colors.length);
        bodyBcg.style.backgroundColor = colors[random];

    })




}