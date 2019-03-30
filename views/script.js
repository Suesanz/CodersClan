$(document).ready(function () {
    $.getJSON("./frontend.json", function (data) {

        const arrItems = [];      // THE ARRAY TO STORE JSON ITEMS.
        $.each(data, function (index, value) {
            arrItems.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
        });
        document.getElementsByClassName("heading-text").innerHTML = arrItems[0];
        // v.innerHTML=arrItems[0];
    })
})
