export { TaskManager };
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    getTaskByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }
    getTaskByUser(userId) {
        return this.tasks.filter(task => task.assignee && task.assignee.id === userId);
    }
    findTask(id) {
        if (typeof id === "number") {
            return this.tasks.filter(task => task.id === id);
        }
        else if (typeof id === "string") {
            return this.tasks.filter(task => task.title === id);
        }
        else {
            throw new Error("Id is  missing");
        }
    }
}
