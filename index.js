const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increasBtn = document.getElementById("increasBtn");
const Countlable = document.getElementById("lb1");
let count = 100;

increasBtn.onclick = function(){
    count++;
    Countlable.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    Countlable.textContent = count;
}
resetBtn.onclick = function(){
    count = 100;
    Countlable.textContent = count;
}
#lb2{
    font-size: 2em;
    font-family:Arial, Helvetica, sans-serif;
    font-style: italic;
    color: rgb(237, 147, 51);
}

