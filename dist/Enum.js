export { TaskStatus };
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["pending"] = 0] = "pending";
    TaskStatus[TaskStatus["inProgress"] = 1] = "inProgress";
    TaskStatus[TaskStatus["Completed"] = 2] = "Completed";
})(TaskStatus || (TaskStatus = {}));
