import { Component, OnInit } from '@angular/core';
import {IPost} from "../../models/IPost";
import {PostDataService} from "../posts-services/post-data.service";

@Component({
  selector: 'app-posts-components',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postDataService: PostDataService) { }

  ngOnInit(): void {
    this.postDataService.getPosts().subscribe(value => this.posts = value)
  }

}
