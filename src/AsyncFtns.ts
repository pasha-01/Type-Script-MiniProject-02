import { IUser } from "./IUser";
import { ITask } from "./ITask";
import { TaskStatus } from "./Enum";
export {fetchUsers,fetchTasks}
async function fetchUsers():Promise<IUser [] >  {
    return [
        { id: 1, name: "Ali", email: "ali@example.com",  },
        { id: 2, name: "Bilal", email: "bilal@example.com",  },
        { id: 3, name: "Chand", email: "chand@example.com", }
    ];
}

async function fetchTasks () :Promise <ITask []>{
    return [
        { id: 2, title: "Task 2", description: "Description 2", assignee: null, status: TaskStatus.inProgress },
        { id: 3, title: "Task 3", description: "Description 3", assignee: null, status: TaskStatus.Completed },
        { id: 1, title: "Task 1", description: "Description 1", assignee: null, status: TaskStatus.pending },
        { id: 4, title: "Task 4", description: "Description 4", assignee: null, status: TaskStatus.pending },
        { id: 5, title: "Task 5", description: "Description 5", assignee: null, status: TaskStatus.inProgress }
    ];
    
} 