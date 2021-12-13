export class Task {
    public id: string = "";
    public name: string = "";
    public isComplete: boolean = false;
    public isActive: boolean = false;

    constructor(id : string, name : string, isComplete : boolean, isActive : boolean) {
            this.id = id;
            this.name = name;
            this.isComplete = isComplete;
            this.isActive = isActive;
    }
}