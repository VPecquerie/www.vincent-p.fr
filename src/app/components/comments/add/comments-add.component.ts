import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractComponent } from '../../abstract.component';
import { CommentForm, DefaultCommentForm } from '../../../models/forms/comment.form';


@Component({
    selector: 'app-comments-add',
    templateUrl: './comments-add.component.html',
    styleUrls: ['./comments-add.component.scss'],
})
export class CommentsAddComponent extends AbstractComponent implements OnInit, OnDestroy {

    public form = CommentForm;

    ngOnInit(): void {
        this.form.setValue(DefaultCommentForm);
    }


}
