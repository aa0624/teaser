let darkMode = false;
const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", () => {
  if (darkMode === false) {
    toggle.classList.add("darkMode");
    darkMode = true;
  } else {
    toggle.classList.remove("darkMode");
    darkMode = false;
  }
});

try{
  count = parseInt(window.localStorage.getItem("countStorage"))
}
catch{
  count = 0;
  window.lcalStorage.setItem("countStorage", count)
  console.log("empty")
}

function add() {
   document.getElementById("count").innerHTML = parseInt(document.getElementById("count").innerHTML) +1;
  count=count+1;
  if (count>20){
  alert("you have 20!")
}
}

function buy(price){
  if(count>price){
    count = count-price;
  }
}

