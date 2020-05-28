window.onload = function() {



    const hDel = document.querySelector('.h');
    const mDel = document.querySelector('.m');
    const sDel = document.querySelector('.s');


    setInterval(function() {
        var now = new Date();

        hDel.innerHTML = now.getHours();
        mDel.innerHTML = now.getMinutes();
        sDel.innerHTML = now.getSeconds();
    })


}