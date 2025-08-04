import { ITask } from "./ITask";
import { TaskStatus } from "./Enum";
export {TaskManager}

class TaskManager {
     private tasks : ITask [] = [];

     addTask(task : ITask) : void {
        this.tasks.push (task)
     }

     getTaskByStatus(status : TaskStatus ) : ITask[] {
        return this.tasks.filter ( task => task.status ===status)
     }

     getTaskByUser(userId : number ) : ITask []{
        return this.tasks.filter(task => task.assignee && task.assignee.id ===userId)
     }

     findTask(id : string | number): ITask [] {
            if (typeof id === "number"){
                return this.tasks.filter(task => task.id === id);
            }
            else if (typeof id === "string"){
                return this.tasks.filter(task => task.title === id);
            }
            else {
                throw new Error("Id is  missing")
                
            }
     }
}