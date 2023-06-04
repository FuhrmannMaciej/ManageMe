
export class Functionality {
    id: number;
    name: string;
    description: string;
    priority: string;
    owner: string;
    state: string;
    projectId: number;

    constructor(id: number, name: string, description: string, priority: string, owner: string, state: string, projectId: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.owner = owner;
        this.state = state;
        this.projectId = projectId;
    }
}
