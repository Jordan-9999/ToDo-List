import "./styles.css";
import {createToDo} from "./todo-factory.js";
import {createProject} from "./projects.js";




const toDoOne = createToDo("clean room", "the room needs to be cleaned!", "4/6/26", "red", "no");
const toDoTwo = createToDo("brush teeth", "use tooth brush and floss to clean your teeth", "7/9/29", "green", "no");
const toDoThree = createToDo("wash car", "take care through the local car wash", "4/22/26", "red", "no");

const firstProject = createProject("My First To-Do List");
firstProject.pushIntoProject(toDoOne);
firstProject.pushIntoProject(toDoTwo);

const secondProject = createProject("Other things I need to get done");
secondProject.pushIntoProject(toDoThree);



console.log(firstProject);
console.log(secondProject);

