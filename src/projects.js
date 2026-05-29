function createProject(name, list = []){

    const project =  {
        name,
        list,

        createToDo(title, description, dueDate, priority, complete){
            const toDo =  {
               title,
               description,
               dueDate,
               priority,
               complete
           };
           toDo.id = self.crypto.randomUUID();
           return toDo;
       },

        pushIntoProject(toDo){
list.push(toDo)}
        };
        project.id = self.crypto.randomUUID();
        
        return project;
    };
   


export {createProject};

