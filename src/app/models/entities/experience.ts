import { Skill } from './skill';
import { Company } from './company';
import { autoserialize, autoserializeAs } from 'cerialize';
import { Model } from './abstract.model';

export class Experience extends Model {

    @autoserialize
    public ExperienceId: number;

    @autoserialize
    public Title: string;

    @autoserializeAs(Company)
    public Company: Company;

    @autoserialize
    public Description: string;

    @autoserializeAs(Skill)
    public Skills: Skill[];

    @autoserializeAs(Date)
    public Start: Date;

    @autoserializeAs(Date)
    public End: Date;

    constructor(experienceId: number, title: string, company: Company, description: string, skills: Skill[], start: Date, end: Date) {
        super();
        this.ExperienceId = experienceId;
        this.Title = title;
        this.Company = company;
        this.Description = description;
        this.Skills = skills;
        this.Start = start;
        this.End = end;
    }
}
