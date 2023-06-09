import { State } from './state.model';

export class Functionality {
    id: number;
    name: string;
    description: string;
    priority: string;
    state: State;
    projectId: number;

    constructor(id: number, name: string, description: string, priority: string, state: State, projectId: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.state = state;
        this.projectId = projectId;
    }
}
