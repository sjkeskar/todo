//selectors
const todoInput = document.querySelector('.todoinput');
const todoButton = document.querySelector('.todobtn');
const todoList = document.querySelector('.todolist');
var a = 1;

//event listener
todoButton.addEventListener('click',addToDo);
todoList.addEventListener('click',delcheck);

//function
function addToDo(event){
    event.preventDefault();
    console.log("i");

    const tododiv = document.createElement('div');
    tododiv.classList.add("todo");

    const todoli = document.createElement('li');
    todoli.innerHTML = todoInput.value;
    todoli.classList.add('todoitem');
    tododiv.appendChild(todoli);

    const chlbtn = document.createElement('button');
    chlbtn.innerHTML = '<i class="fas fa-check"></i>';
    chlbtn.classList.add("checkbtn");
    tododiv.appendChild(chlbtn);

    const delbtn = document.createElement('button');
    delbtn.innerHTML = '<i class="fas fa-trash"></i>';
    delbtn.classList.add("delbtn");
    tododiv.appendChild(delbtn);

    todoList.appendChild(tododiv);
    todoInput.value = "";
}

function delcheck(e){
    const item = e.target;

    if(item.classList[0]==="delbtn"){
        item.parentNode.remove();
    } 
    
    if(item.classList[0]==="checkbtn"){
        var x =item.parentNode;
        x.classList.toggle("completed");
    }
}