const inputBox = document.querySelector("#input-box");
const listBox = document.querySelector("#list");

function task(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    save();
}

listBox.addEventListener('click', function(event){
    if(event.target.tagName == "LI"){
        event.target.classList.toggle("check");
        save();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        save();
    }
}, false);


function save(){
    localStorage.setItem("data", listBox.innerHTML);
}

function show(){
    listBox.innerHTML = localStorage.getItem("data");
}
show();