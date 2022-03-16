window.onload=function (){
    // var red = document.getElementById("red");
    // red.addEventListener("click", green);

    // function green () {
    //     red.style.background = "green";
    // }

    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var down = document.getElementById("down");
    var black = document.getElementById("black");
    var plus = document.getElementById("plus");
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var answer5 = document.getElementById("answer5");
    one.addEventListener("click", twounder);
    two.addEventListener("click", threeunder);
    three.addEventListener("click", fourunder);
    four.addEventListener("click", fiveunder);
    five.addEventListener("click", downunder);
    black.addEventListener("click", blvck);


    // FAQ PAGE
    function twounder () {
        two.style.top = "314px";
        three.style.top = "358px";
        four.style.top = "402px";
        five.style.top = "444px";
        plus.style.transform = "rotate(45deg)";
        answer1.style.opacity = "1";
        one.removeEventListener("click", twounder);
        one.addEventListener("click", retract);
    }
    
    function retract (){
        two.style.top = "242px";
        three.style.top = "286px";
        four.style.top = "330px";
        five.style.top = "372px";
        down.style.top = "40px";
        plus.style.transform = "rotate(90deg)";
        answer1.style.opacity = "0";
        answer2.style.opacity = "0";
        answer3.style.opacity = "0";
        answer4.style.opacity = "0";
        answer5.style.opacity = "0";
        one.removeEventListener("click", retract);
        two.removeEventListener("click", retract);
        three.removeEventListener("click", retract);
        four.removeEventListener("click", retract);
        five.removeEventListener("click", retract);
        one.addEventListener("click", twounder);
        two.addEventListener("click", threeunder);
        three.addEventListener("click", fourunder);
        four.addEventListener("click", fiveunder);
        five.addEventListener("click", downunder);
    }
    
    function threeunder () {
        three.style.top = "358px";
        four.style.top = "402px";
        five.style.top = "444px";
        answer2.style.opacity = "1";
        two.removeEventListener("click", threeunder);
        two.addEventListener("click", retract);
    }

    function fourunder () {
        four.style.top = "402px";
        five.style.top = "444px";
        answer3.style.opacity = "1";
        three.removeEventListener("click", fourunder);
        three.addEventListener("click", retract);
    }

    function fiveunder () {
        five.style.top = "444px";
        answer4.style.opacity = "1";
        four.removeEventListener("click", fiveunder);
        four.addEventListener("click", retract);
    }

    function downunder () {
        down.style.top = "140px";
        answer5.style.opacity = "1";
        five.removeEventListener("click", downunder);
        five.addEventListener("click", retract);
    }

    // PRODUCT PAGE
    function blvck () {
        black.style.opacity = "0";
    }
}