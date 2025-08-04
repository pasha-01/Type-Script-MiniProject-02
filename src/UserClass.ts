import { IUser } from "./IUser";
import { ITask } from "./ITask";
export {User}
class User implements IUser{
    constructor(
        public id : number,
        public name: string,
        public email: string,
    ){
        this.id = id;
        this.name = name;
        this.email = email;
    }
    assignTask = (task : ITask ): ITask =>{
        task.assignee = this;
        return task;
    }

}