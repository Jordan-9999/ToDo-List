function createProject(name, list = [], completed = []){

    const project =  {
        name,
        list,
        completed,
        createToDo(title, description, dueDate, priority, complete){
            const toDo =  {
               title,
               description,
               dueDate,
               priority,
               complete
           };
           toDo.id = self.crypto.randomUUID();
           list.push(toDo);},

        setToCompleted(toDo){
         completed.push(...list.splice(toDo, 1));
        },
        returnToList(toDo){
         list.push(...completed.splice(toDo, 1));
        }}

        project.id = self.crypto.randomUUID();
        return project;
    };
   


export {createProject};

