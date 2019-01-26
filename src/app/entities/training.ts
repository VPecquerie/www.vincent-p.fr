import { Skill } from './skill';
import { autoserialize, autoserializeAs } from 'cerialize';

export class Training {

    @autoserialize
    public TrainingId: number;

    @autoserialize
    public Title: string;

    @autoserializeAs(Date)
    public Begin: Date;

    @autoserializeAs(Date)
    public End: Date;

    @autoserialize
    public Description: string;

    @autoserializeAs(Skill)
    public Skills: Skill[];

    constructor(TrainingId: number, Title: string, Begin: Date, End: Date, Description: string, Skills: Skill[]) {
        this.TrainingId = TrainingId;
        this.Title = Title;
        this.Begin = Begin;
        this.End = End;
        this.Description = Description;
        this.Skills = Skills;
    }
}
