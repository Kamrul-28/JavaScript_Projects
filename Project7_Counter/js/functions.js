window.onload = function() {


    const addCount = document.querySelector('#addCountBtn');
    const lowerCount = document.querySelector('#lowerCountBtn');
    const counter = document.querySelector('.counter');
    var count = '0';
    addCount.addEventListener('click', function() {

        count++;
        counter.innerHTML = count;
        if (counter.innerHTML > '0') {
            counter.style.color = '#4caf50';
        } else if (counter.innerHTML === '0') {
            counter.style.color = 'white';
        }

        counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 1000, fill: 'forwards' });
    });

    lowerCount.addEventListener('click', function() {
        count--;
        counter.innerHTML = count;
        if (counter.innerHTML < '0') {
            counter.style.color = 'red';
        } else if (counter.innerHTML === '0') {
            counter.style.color = 'white';
        }
        counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 1000, fill: 'forwards' });


    });



}