import { autoserialize } from 'cerialize';

export class TextEntity {

    @autoserialize
    public Updated: Date;

    @autoserialize
    public Created: Date;

    @autoserialize
    public Slug: string;

    @autoserialize
    public Content: string;

    constructor(Updated: Date, Created: Date, Slug: string, Content: string) {
        this.Updated = Updated;
        this.Created = Created;
        this.Slug = Slug;
        this.Content = Content;
    }
}
