import { TokenInfo } from './tokeninfo';
import { StringUtils } from '../utils/string';

export class User {
    public UserId: number;
    public Firstname: string;
    public Lastname: string;
    public Email: string;
    public Token: TokenInfo;

    /**
     * Array Deserialize Method.
     * @param {{}[]} json
     * @returns {Training[]}
     */
    public static deserializeArray(json: {}[]): User[] {
        const instances = [];
        for (const item of json) {
            const instance = new User(item);
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
                if (StringUtils.Capitalize(key) === 'Token') {
                    this[StringUtils.Capitalize(key)] = new TokenInfo(
                        json[key]
                    );
                } else {
                    this[StringUtils.Capitalize(key)] = json[key];
                }
            }
        }
        return this;
    }
}
