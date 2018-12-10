import { TokenInfo } from './tokeninfo';

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
                if (key === 'Token') {
                    this[key] = new TokenInfo(
                        json[key]
                    );
                } else {
                    this[key] = json[key];
                }
            }
        }
        return this;
    }
}
