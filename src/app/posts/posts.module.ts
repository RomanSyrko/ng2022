import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts-components/posts.component';
import {PostDataService} from "./posts-services/post-data.service";
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './posts-components/post/post.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[PostDataService]
})
export class PostsModule {
}
