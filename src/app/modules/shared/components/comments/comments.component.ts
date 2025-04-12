import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  @Input() form: FormGroup;
  user = this.auth.getCurrentUser();
  @Output() addComment = new EventEmitter<boolean>();

  constructor(private auth: AuthService){

  }
  ngOnInit(): void {

  }

  submit(){
    this.addComment.next(true)
  }
}
