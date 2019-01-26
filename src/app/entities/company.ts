import { autoserialize } from 'cerialize';

export class Company {

    @autoserialize
    public CompanyId: number;

    @autoserialize
    public Name: string;

    @autoserialize
    public Location: string;

    @autoserialize
    public Logo: string;

    constructor(CompanyId: number, Name: string, Location: string, Logo: string) {
        this.CompanyId = CompanyId;
        this.Name = Name;
        this.Location = Location;
        this.Logo = Logo;
    }
}
