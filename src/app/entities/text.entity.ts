export class TextEntity {
    private _Updated: Date;
    private _Created: Date;
    private _slug: string;
    private _content: string;

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }
    get slug(): string {
        return this._slug;
    }

    set slug(value: string) {
        this._slug = value;
    }
    get Created(): Date {
        return this._Created;
    }

    set Created(value: Date) {
        this._Created = value;
    }

    get Updated(): Date {
        return this._Updated;
    }

    set Updated(value: Date) {
        this._Updated = value;
    }

    public constructor(json: {}) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                this[key] = json[key];
            }
        }
        return this;
    }
}
