export class Plan
{
    public id:number;
    public name:string;

    constructor(public _id:number, public _name:string)
    {
        this.id = _id;
        this.name = _name;
    }
}