const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increasBtn = document.getElementById("increasBtn");
const Countlable = document.getElementById("lb1");
let count = 0;

increasBtn.onclick = function(){
    count++;
    Countlable.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    Countlable.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    Countlable.textContent = count;
}



