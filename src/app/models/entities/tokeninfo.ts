import { autoserialize } from 'cerialize';
import { Model } from './abstract.model';

export class TokenInfo extends Model {

    @autoserialize
    public AccessToken: string;

    @autoserialize
    public ExpiresAt: Date;

    public hasExpired() {
        return this.ExpiresAt < new Date();
    }

}
