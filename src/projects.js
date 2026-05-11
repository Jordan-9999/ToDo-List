function createProject(name, list = []){

    return {
        name,
        list,
        pushIntoProject(obj){
list.push(obj)}
        }
    };
   


export {createProject};

