import { autoserialize } from 'cerialize';
import { Model } from './abstract.model';

export class Skill extends Model {

    @autoserialize
    public SkillId: number;

    @autoserialize
    public Name: string;

    @autoserialize
    public Level: number;

}
