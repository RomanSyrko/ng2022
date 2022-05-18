import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsComponent} from './comments-components/comments.component';
import {CommentComponent} from './comments-components/comment/comment.component';
import {CommentDataService} from "./comments-service/comment-data.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [CommentDataService]
})
export class CommentsModule {
}
