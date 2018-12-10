import { Skill } from './skill';

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
                if (key === 'Skills') {
                    this[key] = Skill.deserializeArray(json[key]);
                } else {
                    this[key] = json[key];
                }
            }
        }
    }
}
