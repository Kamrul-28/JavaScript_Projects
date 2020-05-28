window.onload = function() {

    const nextBtn = document.querySelector('.nextBtn');
    const prevBtn = document.querySelector('.prevBtn');
    const images = document.querySelector('.images');

    let counter = 0;

    nextBtn.addEventListener('click', function() {

        //images.animate([{ opacity: '0.1' }, { opacity: '1.0' }], { duration: 1000, fill: 'forwords' });

        if (counter === 4) {
            counter = -1;
        }

        counter++;

        images.style.background = `url('E:/Study/2020/JavaScript/Project9_PhotoSlider/img/pic-${counter}.jpg')center/cover no-repeat`;

    });

    prevBtn.addEventListener('click', function() {

        if (counter === 0) {
            counter = 5;
        }

        counter--;

        images.style.background = `url('E:/Study/2020/JavaScript/Project9_PhotoSlider/img/pic-${counter}.jpg')center/cover no-repeat`;

    });

}