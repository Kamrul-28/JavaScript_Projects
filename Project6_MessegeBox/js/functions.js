window.onload = function() {


    const sendBtn = document.querySelector('#sendBtn');
    const messageIn = document.querySelector('#messageIn');
    const messageOut = document.querySelector('#messageOut');

    sendBtn.addEventListener('click', function() {

        let content = messageIn.value;
        if (content === '') {
            alert('Please Enter valid Value. Current Value is Empty');

        } else {
            messageOut.innerHTML = content;
            messageIn.value = "";
        }

    });

}