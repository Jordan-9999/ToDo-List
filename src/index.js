import "./styles.css";
import {createProject} from "./projects.js";


const defaultProject = createProject("My First To-Do List");
const secondProject = createProject("My second project");

const completedList = createProject("Completed List");





defaultProject.createToDo("clean room", "the room needs to be cleaned!", "4/6/26", "red", "no");

defaultProject.createToDo("brush teeth", "use tooth brush and floss to clean your teeth", "7/9/29", "green", "no");
defaultProject.createToDo("wash car", "take car through the local car wash", "4/22/26", "red", "no");



defaultProject.setToCompleted(0);
defaultProject.setToCompleted(0);
defaultProject.returnToList(0);








console.log(defaultProject.list);
console.log(defaultProject.completed);
console.log(defaultProject);





