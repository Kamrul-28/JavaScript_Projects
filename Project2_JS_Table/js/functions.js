window.onload = function() {

    var tableBody = document.querySelector('table tbody');
    var btn = document.querySelector('.btnAdd');
    var input = document.querySelector('.input');


    function addRow(text) {
        var htmlString = '<tr><td>' + text + '</td><td><button class="btnDel">Delete</button></td>';
        tableBody.insertAdjacentHTML('beforeend', htmlString);
    }

    btn.addEventListener('click', function() {
        addRow(input.value)
        input.value = null;
        input.focus()
    });

    document.addEventListener('click', function(e) {

        if (e.target && e.target.className == 'btnDel') {

            e.target.parentNode.parentNode.remove();
        }


    });



}