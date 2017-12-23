export class Plan {
    public id: number;
    public name: string;
    public duration: number;

    constructor(public _id: number, public _name: string, public _duration: number) {
        this.id = _id;
        this.name = _name;
        this.duration = _duration;
    }
}
