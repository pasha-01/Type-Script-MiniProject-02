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

// assign task to user
// const assigntasks = new User(1,"Ali","ali@example.com",);
// assigntasks.assignTask();
const assigntasks = new User(1, "Ali", "ali@example.com");
const task = {
  id: 101,
  title: "Test Feature",
  description: "Test the new feature release",
  status: "pending",
  assignee: 1
};
assigntasks.assignTask(task);

//taskmanager  to add task
// const taskmanager = new TaskManager();
// taskmanager.addTask;
const taskmanager = new TaskManager();
const newTask = {
  id: 1,
  title: "Fix login bug",
  description: "Fix the issue with login API",
  status: "pending",
  assignee: 2
};
taskmanager.addTask(newTask);

//Filter tasks by status
// const filtertaskbyStatus = new TaskManager();
//filtertaskbyStatus.getTaskByStatus;
const filtertaskbyStatus = new TaskManager();
const result = filtertaskbyStatus.getTaskByStatus("pending"); 
console.log(result);

// Filter task by User
const filtertaskbyUser = new TaskManager();
const userTasks = filtertaskbyUser.getTaskByUser(2);
console.log(userTasks);

//Use Paginate and log first page
const firstPage = paginate(tasks, 2, 1);
console.log("First Page of Tasks:", firstPage);
}
main ();