import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {CommentUpdate, Comment, User} from '../../../model';

@Component({
  selector: 'mac-comments',
  templateUrl: './comments.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit {

  @ViewChild('commentContentEditable', {static: false}) commentContentEditable: ElementRef;
  @Input() user: User;
  @Input() comments: Comment[];
  @Output() outUpdateComment = new EventEmitter<CommentUpdate>();
  @Output() outCreateComment = new EventEmitter<Comment>();

  constructor() { }

  ngOnInit() {
  }

  createComment() {
    this.outCreateComment.emit({
      user: this.user,
      time: +new Date(),
      content: (this.commentContentEditable.nativeElement as HTMLElement).textContent
    });
    (this.commentContentEditable.nativeElement as HTMLElement).textContent = '';
  }

  updateComment(index: number, comment: Comment) {
    this.outUpdateComment.emit({
      index,
      comment
    });
  }
}
