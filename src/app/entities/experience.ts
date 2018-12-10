import { Skill } from './skill';
import { Company } from './company';

export class Experience {
    public ExperienceId: number;
    public Title: string;
    public Company: Company;
    public Description: string;
    public Skills: Skill[];
    public Start: Date;
    public End: Date;

    public static deserializeArray(json): Experience[] {
        const instances = [];
        for (const item of json) {
            const instance = new Experience(item);
            instances.push(instance);
        }
        return instances;
    }

    public constructor(json: {}) {
        for (const key in json) {
            if (json.hasOwnProperty(key) && json[key] != null) {
                switch (key) {
                    case 'Skills':
                        this[key] = Skill.deserializeArray(json[key]);
                        break;

                    case 'Company':
                        this[key] = new Company(json[key]);
                        break;

                    case 'Start':
                    case 'End':
                        if (json[key] != null) {
                            this[key] = new Date(json[key]);
                        } else {
                            this[key] = null;
                        }
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
