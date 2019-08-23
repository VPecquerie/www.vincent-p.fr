import { autoserialize } from 'cerialize';
import { Model } from './abstract.model';

export class TextEntity extends Model {

    @autoserialize
    public Updated: Date;

    @autoserialize
    public Created: Date;

    @autoserialize
    public Slug: string;

    @autoserialize
    public Content: string;

    constructor(Updated: Date, Created: Date, Slug: string, Content: string) {
        super();
        this.Updated = Updated;
        this.Created = Created;
        this.Slug = Slug;
        this.Content = Content;
    }
}
