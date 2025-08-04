import { ITask } from "./ITask";
import { IUser } from "./IUser";
import { TaskStatus } from "./Enum";
export {Task}
class Task implements ITask {
    constructor (
            public id: number,
            public title: string,
            public description: string,
            public assignee: IUser | null,
            public status: TaskStatus) 
            {
                this.id = id;
                this.title = title;
                this.description = description;
                this.assignee = assignee;
                this.status = status;
            }

        updateStatus=(newStatus  : TaskStatus):TaskStatus => {
            this.status = newStatus;
            return this.status;
        }
}