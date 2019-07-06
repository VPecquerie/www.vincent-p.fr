import { autoserialize, autoserializeAs } from 'cerialize';
import { Comment } from './comment';

export class Article {
    @autoserialize
    public ArticleId: number;

    @autoserialize
    public Title: string;

    @autoserialize
    public Content: string;

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
}
