window.onload=function (){
    var onespan = document.getElementById("onespan");
    var threespan = document.getElementById("threespan");

    onespan.addEventListener("click", thick);
    threespan.addEventListener("click", thick2);

    function thick () {
        onespan.style.border = "2px solid black";
        threespan.style.border = "1px solid #676767";
        onespan.removeEventListener("click", thick);
        onespan.addEventListener("click", cleanslate);
    }

    function thick2 () {
        threespan.style.border = "2px solid black";
        onespan.style.border = "1px solid #676767";
        threespan.removeEventListener("click", thick2);
        threespan.addEventListener("click", cleanslate);
    }

    function cleanslate () {
        threespan.style.border = "1px solid #676767";
        onespan.style.border = "1px solid #676767";
        onespan.addEventListener("click", thick);
        threespan.addEventListener("click", thick2);
    }
}