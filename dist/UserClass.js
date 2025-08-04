export { User };
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.assignTask = (task) => {
            task.assignee = this;
            return task;
        };
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
