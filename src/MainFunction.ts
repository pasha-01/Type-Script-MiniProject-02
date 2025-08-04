import { IUser } from "./IUser";
import { ITask } from "./ITask";
import { TaskStatus } from "./Enum";
import { Task } from "./TaskClass";
import { User } from "./UserClass";
import {paginate} from "./PaginateFtn";
import { TaskManager } from "./TaskManagerClass";
import { fetchUsers } from "./AsyncFtns";
import { fetchTasks } from "./AsyncFtns";

async function main() {
// fetch Users and Tasks
 console.log("Task Manager Application Started");
console.log("Fetching users and tasks...");

    const users: IUser [] = await fetchUsers();
    const tasks: ITask[] = await fetchTasks();
    console.log("Users: " , users)
    console.log ("Tasks: ", tasks)

    // 1- Assign Tasks to Users 
// const assignableTask : User  = users[0];
// assignableTask.assignTask(tasks[0])



// 1- Assign Tasks to Users 
const firstUser = users[0];
firstUser.assignTask(tasks[0]);
console.log("Tasks after assignment:", firstUser.tasks);

    

   // 2- Create Task manager 
const taskManager = new TaskManager();

    // 3- Add these tasks to task manager
tasks.forEach(task => taskManager.addTask(task));

   // 4- Filter Task by status
const pendingTasks = taskManager.getTaskByStatus(TaskStatus.Completed);
console.log("Pending Tasks:", pendingTasks);

    // 5- filter task by user    
const filteredTasks = taskManager.getTaskByUser(2); 
console.log("Filtered Tasks:", filteredTasks);

    // 6- find task by id 
const TaskById = taskManager.findTask(2);
console.log("Task by Id: " , TaskById);

    // 7- find task by title 
const TaskByTitle = taskManager .findTask ("TaskByTitle");
console.log("Task by Title: " , TaskByTitle);

//Use Paginate and log first page
const firstPage = paginate(tasks, 2, 1);
console.log("First Page of Tasks:", firstPage);
}
main ();