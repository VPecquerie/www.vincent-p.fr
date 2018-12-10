export class TokenInfo {
    public AccessToken: string;
    public ExpiresAt: Date;

    public hasExpired() {
        return this.ExpiresAt < new Date();
    }

    /**
     * Deserialize Method.
     * @param {{}} json
     * @returns {this}
     */
    public constructor(json: {}) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                if (key === 'ExpiresIn') {
                    const currentDate = new Date();
                    this.ExpiresAt = new Date(
                        currentDate.getTime() + json[key] * 1000,
                    );
                } else if (key === 'ExpiresAt') {
                    this.ExpiresAt = new Date(json[key]);
                } else {
                    this[key] = json[key];
                }
            }
        }
        return this;
    }
}
