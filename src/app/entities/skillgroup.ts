import { Skill } from './skill';
import { StringUtils } from '../utils/string';

export class Skillgroup {
    public SkillGroupId: number;
    public Icon: string;
    public Name: string;
    public Skills: Skill[];

    public static deserializeArray(json): Skillgroup[] {
        const instances = [];
        for (const item of json) {
            const instance = new Skillgroup(item);
            instances.push(instance);
        }
        return instances;
    }

    public constructor(json: {}) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                if (StringUtils.Capitalize(key) === 'Skills') {
                    this[StringUtils.Capitalize(key)] = Skill.deserializeArray(
                        json[key]
                    );
                } else {
                    this[StringUtils.Capitalize(key)] = json[key];
                }
            }
        }
    }
}
