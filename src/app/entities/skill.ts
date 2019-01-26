import { autoserialize } from 'cerialize';

export class Skill {

    @autoserialize
    public SkillId: number;

    @autoserialize
    public Name: string;

    @autoserialize
    public Level: number;

}
