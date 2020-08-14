//selectors
const todoInput = document.querySelector('.todoinput');
const todoButton = document.querySelector('.todobtn');
const todoList = document.querySelector('.todolist');
const filteroption = document.querySelector('.filter-todo');

//event listener
todoButton.addEventListener('click',addToDo);
todoList.addEventListener('click',delcheck);
filteroption.addEventListener('click',filterTodo);

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
    tododiv.classList.add("a");

    todoList.appendChild(tododiv);
    todoInput.value = "";
}

function delcheck(e){
    const item = e.target;

    if(item.classList[0]==="delbtn"){
        item.parentNode.classList.add('fall');
        item.parentNode.addEventListener('transitionend',function(){
            item.parentNode.remove();
        })
    } 
    
    if(item.classList[0]==="checkbtn"){
        var x =item.parentNode;
        x.classList.add("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    console.log(todos);
    todos.forEach((todo)=>{
        var boo = todo.classList;
        console.log(boo);
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(boo){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!boo){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    })
}