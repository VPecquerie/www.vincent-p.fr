import { autoserialize} from 'cerialize';
import 'reflect-metadata';
export class TokenInfo {

    @autoserialize
    public AccessToken: string;

    @autoserialize
    public ExpiresAt: Date;

    public hasExpired() {
        return this.ExpiresAt < new Date();
    }

}
