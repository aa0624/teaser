document.addEventListener("DOMContentLoaded", (event) => {
  
window.onload = function () {
    setCount();
  };

  
let darkMode = false;
const toggle = document.querySelector("#toggle")
toggle.addEventListener("click", () => {
  if (darkMode === false) {
    document.getElementById("toggle").innerHTML = "lmao";
    toggle.classList.add("darkMode");
    darkMode = true;
  } else {
    document.getElementById("toggle").innerHTML = "Toggle Dark Mode";
    toggle.classList.remove("darkMode");
    darkMode = false;
   
  }
  
});

function setCount(){
  let count;
  let windowCount = window.localStorage.getItem("countStorage");
  if (windowCount==="null"){
    count = 0;
    window.localStorage.setItem("countStorage", count);
    console.log("countStorage empty");
  }
  else{
    count = windowCount;
    console.log("countStorage retrieved");
  }
  console.log(count);
  document.getElementById("countID").innerHTML = count;
}


 
document.querySelector("#addButton").addEventListener("click", () => {
  add();
});
  
let alert20 = false;
function add() {
  let count = window.localStorage.getItem("countStorage");
  count = parseInt(count) + 1;
  window.localStorage.setItem("countStorage", count);
  document.getElementById("countID").innerHTML = count;
  if (parseInt(count)>20){
    if (alert20 === false){
      alert("you have 20! you can now buy an autoClicker");
      alert20 = true;
      document.getElementByID("autoClicker").style.visibility = "visible";
    }
}
}


document.querySelector("#autoClicker").addEventListener("click", () => {
  
});
  
  
  
});