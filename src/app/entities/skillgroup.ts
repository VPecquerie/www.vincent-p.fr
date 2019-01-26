import { Skill } from './skill';

import { autoserialize, autoserializeAs } from 'cerialize';

export class Skillgroup {

    @autoserialize
    public SkillGroupId: number;

    @autoserialize
    public Icon: string;

    @autoserialize
    public Name: string;

    @autoserializeAs(Skill)
    public Skills: Skill[];

}
