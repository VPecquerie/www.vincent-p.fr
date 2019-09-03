import { autoserialize, autoserializeAs } from 'cerialize';
import { Model } from './abstract.model';

export class TokenInfo extends Model {

    @autoserialize
    public AccessToken: string;

    @autoserializeAs(Date)
    public ExpiresAt: Date;

    public hasExpired() {
        return this.ExpiresAt < new Date();
    }

}
