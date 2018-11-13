import { Experience } from './experience';
import { StringUtils } from '../utils/string';

export class Company {
    public CompanyId: number;
    public Name: string;
    public Location: string;
    public Logo: string;
    public Experiences: Experience[];

    public static deserializeArray(json: {}[]): Company[] {
        const instances = [];
        for (const item of json) {
            const instance = new Company(item);
            instances.push(instance);
        }
        return instances;
    }

    public constructor(json: {}) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                if (key === 'Experiences') {
                    this[
                        StringUtils.Capitalize(key)
                    ] = Experience.deserializeArray(json[key]);
                } else {
                    this[StringUtils.Capitalize(key)] = json[key];
                }
            }
        }
        return this;
    }
}
