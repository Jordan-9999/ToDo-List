import "./styles.css";
import {createProject} from "./projects.js";


const defaultProject = createProject("My First To-Do List");
const secondProject = createProject("My second project");


console.log(createProject("My next list"));



defaultProject.pushIntoProject(defaultProject.createToDo("clean room", "the room needs to be cleaned!", "4/6/26", "red", "no"));

secondProject.pushIntoProject(secondProject.createToDo("brush teeth", "use tooth brush and floss to clean your teeth", "7/9/29", "green", "no"));
secondProject.pushIntoProject(secondProject.createToDo("wash car", "take car through the local car wash", "4/22/26", "red", "no"));









console.log(defaultProject);
console.log(secondProject);

defaultProject.list[0].complete = "yes";
secondProject.list[1].complete = "yes";
secondProject.list.splice(0, 1);

console.log(defaultProject.list[0]);



