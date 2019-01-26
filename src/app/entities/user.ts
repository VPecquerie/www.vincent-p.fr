import { TokenInfo } from './tokeninfo';
import { autoserialize, autoserializeAs } from 'cerialize';

export class User {

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
