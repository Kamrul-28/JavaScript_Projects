window.onload=function(){

    (function () {
        var codeBlock = '<div class="content">' +
        '<h1>This is a heading</h1>' +
        '<p>This is a paragraph of text.</p>' +
        '<p><strong>Note:</strong> If you don\'t escape "quotes" properly, it will not work.</p>' + 
        '</div>';

        document.querySelector("#section").innerHTML= codeBlock;
        document.querySelector("#section").setAttribute(
            "style", "font-size: 30px; font-style: italic; color:#ff0000;");
        
    })();

}