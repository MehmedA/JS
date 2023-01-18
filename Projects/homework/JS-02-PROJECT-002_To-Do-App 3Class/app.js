//Elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//load event vs. DomContentLoaded
window.addEventListener("load", ()=>{
    getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
    //get TodoList from localStorage and load to UI
};

//form => submit event vs. button => click
// form.addEventListener("Submit", ()=>{})
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(todoInput.value.trim() === "") {
        alert("Please enter new todo text!");
        return;
    }
    // else{
    //     alert("continue")
    // }
    const newTodo = {
        id : new Date().getTime(), //unique id with ms of now
        completed : false, //status
        text : todoInput.value //userInput
    }

    createTodo(newTodo);

    todoList.push(newTodo);
    // localStorage todolist update
    // localStorage vs sessionStorage vs Cookies
    // !!!!!!!!Stringify!!!!!!!!!
    localStorage.setItem("todoList", JSON.stringify(todoList));
    // event.target vs event.currentTarget
    e.target.closest("form").reset();
})

const createTodo = (newTodo) => {
    // todo item creation 
    // alert("item was added");
    // obj. dest. (ES6 => JS'e kazandirilan yapilar??)
    const { id, completed, text } = newTodo;

    const li = document.createElement("li");
    li.setAttribute("id", "id");
}
 