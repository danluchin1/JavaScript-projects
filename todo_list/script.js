const listInput = document.querySelector(".listInput");
const displayList = document.querySelector(".displayList");
const addBtn = document.querySelector(".addBtn");

let todoList = [];

addBtn.addEventListener("click", () => {
    if(listInput.value !== ""){
        todoList.push({ text: listInput.value, checked: false });
        listInput.value = "";
        update();
    }else{
        alert("You must write something!");
    }
});

function update(){
    displayList.innerHTML = "";

    todoList.forEach((item, index) => {
        const li = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = item.text;
        if(item.checked){
            taskText.style.textDecoration = "line-through";
        }

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("buttonContainer");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.onclick = () => removeTask(index);

        const checkBtn = document.createElement("button");
        checkBtn.classList.add("checkBtn");

        if(item.checked){
            const checkIcon = document.createElement("i");
            checkIcon.classList.add("fa-solid", "fa-check");
            checkBtn.append(checkIcon);
        }

        checkBtn.onclick = () => {
            todoList[index].checked = !todoList[index].checked;
            update();
        };

        buttonContainer.append(checkBtn, deleteBtn);

        li.append(taskText, buttonContainer);
        displayList.append(li);
    });
}




function removeTask(index){
    todoList.splice(index, 1);
    update();
}