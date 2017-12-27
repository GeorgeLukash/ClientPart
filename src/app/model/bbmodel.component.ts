export class BlockGet {
    public id: number;
    public Name: number;
    public Exersices: Exercise[] = [];
}

class Exercise {
    public Id: number;
    public Time: number;
    public Distance: number;
    public Weight: number;
    public Amount: number;
    public CreatedAt: any;

}