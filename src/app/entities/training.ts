import { Skill } from './skill';

export class Training {
    public TrainingId: number;
    public Title: string;
    public Begin: Date;
    public End: Date;
    public Description: string;
    public Skills: Skill[];

    /**
     * Array Deserialize Method.
     * @param {{}} json
     * @returns {Training[]}
     */
    public static deserializeArray(json): Training[] {
        const instances = [];
        for (const item of json) {
            const instance = new Training(item);
            instances.push(instance);
        }
        return instances;
    }

    /**
     * Deserialize Method.
     * @param {{}} json
     * @returns {this}
     */
    public constructor(json: {}) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                switch (key) {
                    case 'Skills':
                        this[key] = Skill.deserializeArray(json[key]);
                        break;

                    case 'Begin':
                    case 'End':
                        this[key] = new Date(json[key]);
                        break;

                    default:
                        this[key] = json[key];
                        break;
                }
            }
        }
        return this;
    }
}
