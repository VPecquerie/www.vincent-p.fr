import { TokenInfo } from './tokeninfo';
import { autoserialize, autoserializeAs } from 'cerialize';
import { Model } from './abstract.model';

export class User extends Model {

    @autoserialize
    public UserId: number;

    @autoserialize
    public Firstname: string;

    @autoserialize
    public Lastname: string;

    @autoserialize
    public Email: string;

    @autoserializeAs(TokenInfo)
    public Token: TokenInfo;

}
