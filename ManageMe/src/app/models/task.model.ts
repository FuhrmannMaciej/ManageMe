import { State } from "./state.model";

export class Task {
    id: number;
    name: string;
    description: string;
    priority: string;
    functionalityId: number;
    state: State;
    projectId: number;

    constructor(id: number, name: string, description: string, priority: string, functionalityId: number, state: State, projectId: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.functionalityId = functionalityId;
        this.state = state;
        this.projectId = projectId;
    }
}
