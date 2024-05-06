
function burger_menu(){
    var x = document.getElementById("_burger-links");
    if (x.style.transform == "translateX(0px)") {
        x.style.transform = "translateX(100%)";
    } else {
        x.style.transform = "translateX(0px)";
    }
}
