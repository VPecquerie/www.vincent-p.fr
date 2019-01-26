import { Skill } from './skill';
import { Company } from './company';
import { autoserialize, autoserializeAs } from 'cerialize';

export class Experience {

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
        this.ExperienceId = experienceId;
        this.Title = title;
        this.Company = company;
        this.Description = description;
        this.Skills = skills;
        this.Start = start;
        this.End = end;
    }
}
