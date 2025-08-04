export { Task };
class Task {
    constructor(id, title, description, assignee, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.assignee = assignee;
        this.status = status;
        this.updateStatus = (newStatus) => {
            this.status = newStatus;
            return this.status;
        };
        this.id = id;
        this.title = title;
        this.description = description;
        this.assignee = assignee;
        this.status = status;
    }
}
