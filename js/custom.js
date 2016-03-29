// Ajaxing svg sprite to be cashed
$(document).ready(function () {
    // Ajaxing svg sprite to be cashed
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/images/sprite.svg", true);
    ajax.send();
    ajax.onload = function (e) {
        var div = document.createElement("div");
        div.style.display = "none";
        div.innerHTML = ajax.responseText;
        document.body.insertBefore(div, document.body.childNodes[0]);
    };
});
