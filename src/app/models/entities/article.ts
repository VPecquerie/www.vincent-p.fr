import { autoserialize, autoserializeAs } from 'cerialize';
import { Comment } from './comment';
import { Model } from './abstract.model';

export class Article extends Model {
    @autoserialize
    public ArticleId: number;

    @autoserialize
    public Title: string;

    @autoserialize
    public Content: string;

    @autoserialize
    public Resume: string;

    @autoserializeAs(Date)
    public CreatedDate: Date;

    @autoserializeAs(Date)
    public UpdatedDate: Date;

    @autoserializeAs(Date)
    public PublishedDate: Date;

    @autoserialize
    public IsPublished: boolean;

    @autoserializeAs(Comment)
    public Comments: Comment[];

    constructor() {
        super();
        this.Comments = [];
    }
}
