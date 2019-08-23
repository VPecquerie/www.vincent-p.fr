import {autoserialize} from 'cerialize';
import { Model } from './abstract.model';

export class Comment extends Model {

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
