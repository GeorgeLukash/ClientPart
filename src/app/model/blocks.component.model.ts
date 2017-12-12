export class BlockModel {
    public planName: String = '';
    public exerciseType: String = '';
    public exercise: ExerciseMolde = new ExerciseMolde();
};

class ExerciseMolde {
    public excName: String = '';
}