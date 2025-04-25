const inputBox = document.getElementById("tasks");
const listContainer = document.getElementById("list_container")

function addtask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
},false);


//to save data even after regreshing
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//to show data after refreshing
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

const datePicker = document.getElementById('datePicker');
const displayDate = document.getElementById('displayDate');

datePicker.addEventListener('change', () => {
  const selectedDate = new Date(datePicker.value);

  // Format the date nicely
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatted = selectedDate.toLocaleDateString(undefined, options);

  // Show the date
  displayDate.textContent = formatted;
});

showTask();