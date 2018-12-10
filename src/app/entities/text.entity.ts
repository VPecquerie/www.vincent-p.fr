export class TextEntity {
    public Updated: Date;
    public Created: Date;
    public Slug: string;
    public Content: string;

    public constructor(json: {}) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                this[key] = json[key];
            }
        }
        return this;
    }
}
