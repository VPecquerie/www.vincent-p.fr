import { Skill } from './skill';
import { Company } from './company';
import { StringUtils } from '../utils/string';

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
                    case 'skills':
                        this[
                            StringUtils.Capitalize(key)
                        ] = Skill.deserializeArray(json[key]);
                        break;

                    case 'company':
                        this[
                            StringUtils.Capitalize(key)
                        ] = new Company(json[key]);
                        break;

                    case 'start':
                    case 'end':
                        if (json[key] != null) {
                            this[StringUtils.Capitalize(key)] = new Date(
                                json[key]
                            );
                        } else {
                            this[StringUtils.Capitalize(key)] = null;
                        }
                        break;

                    default:
                        this[StringUtils.Capitalize(key)] = json[key];
                        break;
                }
            }
        }
        return this;
    }
}
