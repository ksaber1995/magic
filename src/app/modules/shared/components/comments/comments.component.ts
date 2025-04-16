import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { CommentItem } from '../../../../../model/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  @Input()  form: FormGroup;
  user = this.auth.getCurrentUser();
  @Output() addComment = new EventEmitter<boolean>();
  @Input() comments: CommentItem[] = [];

  constructor(private auth: AuthService){

  }
  ngOnInit(): void {
    console.log(this.comments)
  }

  submit(){
    this.addComment.next(true)
  }
}
