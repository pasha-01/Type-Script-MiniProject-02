var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from "./UserClass";
import { paginate } from "./PaginateFtn";
import { TaskManager } from "./TaskManagerClass";
import { fetchUsers } from "./AsyncFtns";
import { fetchTasks } from "./AsyncFtns";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // fetch Users and Tasks
        console.log("Task Manager Application Started");
        console.log("Fetching users and tasks...");
        const users = yield fetchUsers();
        const tasks = yield fetchTasks();
        console.log("Users: ", users);
        console.log("Tasks: ", tasks);
        // assign task to user
        const assigntasks = new User(1, "Ali", "ali@example.com");
        assigntasks.assignTask;
        //taskmanager  to add task
        const taskmanager = new TaskManager();
        taskmanager.addTask;
        //Filter tasks by status
        const filtertaskbyStatus = new TaskManager();
        filtertaskbyStatus.getTaskByStatus;
        // Filter task by User
        const filtertaskbyUser = new TaskManager();
        filtertaskbyUser.getTaskByUser;
        //Use Paginate and log first page
        const firstPage = paginate(tasks, 2, 1);
        console.log("First Page of Tasks:", firstPage);
    });
}
main();
