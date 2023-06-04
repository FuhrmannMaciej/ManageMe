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

    constructor(name: string, description: string, priority: string, functionality: Functionality, estimatedFinishTime: string, state: string, creationDate: Date, startDate: Date, finishDate: Date, assignee: User) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.functionality = functionality;
        this.estimatedFinishTime = estimatedFinishTime;
        this.state = state;
        this.creationDate = creationDate;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.assignee = assignee;
    }
}
