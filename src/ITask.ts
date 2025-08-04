import  {IUser} from "./IUser"
import { TaskStatus} from "./Enum"
export{ITask}
interface ITask 
{
    id :number ;
    title : string;
    description: string;
    assignee : IUser | null;
    status : TaskStatus;
}