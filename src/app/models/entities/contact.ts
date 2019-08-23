import { Model } from './abstract.model';

export class ContactModel extends Model {
    public Message: string;
    public Mail: string;
    public Name: string;
    public Phone: string;
}
