import "./styles.css";
import {createProject} from "./projects.js";
import {createToDo} from "./todo-factory.js";




const toDoOne = createToDo("clean room", "the room needs to be cleaned!", "4/6/26", "red", "no");
const toDoTwo = createToDo("brush teeth", "use tooth brush and floss to clean your teeth", "7/9/29", "green", "no");

//const newProject = createProject(toDoOne);


console.log(createProject("My Project", toDoOne));
const newProject = createProject("Chores", toDoTwo);
newProject.projectTitle = "test title";
console.log(newProject);
//console.log(toDoOne);
//console.log(toDoTwo);