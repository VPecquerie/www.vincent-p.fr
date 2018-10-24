import { StringUtils } from '../utils/string';

export class Skill {
    public SkillId: number;
    public Name: string;
    public Level: number;

    /**
     * Array Deserialize Method
     * @param {{}[]} json
     * @returns {Skill[]} An array of Skill.
     */
    public static deserializeArray(json: {}[]): Skill[] {
        const instances = [];
        for (const item of json) {
            const instance = new Skill(item);
            instances.push(instance);
        }
        return instances;
    }

    /**
     * Deserialize Method
     * @param {{}} json A populated instance of Skill.
     */
    public constructor(json: {}) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                this[StringUtils.Capitalize(key)] = json[key];
            }
        }

        return this;
    }
}
