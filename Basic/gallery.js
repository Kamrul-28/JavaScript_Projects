window.onload = function() {

    var chck = document.getElementById("same");
    var chck1 = document.getElementsByTagName("input['submit']");


    var x = document.getElementById("shippingName").autocomplete
    var y = document.getElementById("shippingZip").autocomplete

    x.value.innerHTML = "kamrul Hasan"

    chck.addEventListener('onchange', billingFunction)

    function billingFunction() {

        document.getElementById("billingName").value = "Kamrul Hasan";
        document.getElementById("billingZip").value = "12345";

    }
}