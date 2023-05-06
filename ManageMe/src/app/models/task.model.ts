import { Functionality } from "./functionality.model";
import { User } from "./user.model";

export class Task {
    name: string;
    description: string;
    priority: string;
    functionality: Functionality;
    estimatedFinishTime: string;
    state: string;
    creationDate: Date;
    startDate: Date;
    finishDate: Date;
    assignee: User;
}
