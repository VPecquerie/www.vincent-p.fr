import { autoserialize } from 'cerialize';
import { Model } from './abstract.model';

export class Company extends Model {

    @autoserialize
    public CompanyId: number;

    @autoserialize
    public Name: string;

    @autoserialize
    public Location: string;

    @autoserialize
    public Logo: string;

    constructor(CompanyId: number, Name: string, Location: string, Logo: string) {
        super();
        this.CompanyId = CompanyId;
        this.Name = Name;
        this.Location = Location;
        this.Logo = Logo;
    }
}
