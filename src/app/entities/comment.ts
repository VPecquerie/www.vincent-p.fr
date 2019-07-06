import {autoserialize} from 'cerialize';

export class Comment {

    @autoserialize
    public CommentId: number;

    @autoserialize
    public Title: string;

    @autoserialize
    public Content: string;

    @autoserialize
    public CreatorName: string;

    @autoserialize
    public CreatorEmail: string;

}
