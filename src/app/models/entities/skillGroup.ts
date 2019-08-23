import { Skill } from './skill';

import { autoserialize, autoserializeAs } from 'cerialize';
import { Model } from './abstract.model';

export class SkillGroup extends Model {

    @autoserialize
    public SkillGroupId: number;

    @autoserialize
    public Icon: string;

    @autoserialize
    public Name: string;

    @autoserializeAs(Skill)
    public Skills: Skill[];

}
