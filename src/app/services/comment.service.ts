import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) {
  }

  getComments(): Observable<IComment[]> {
    return this
      .httpClient
      .get<any[]>(this.url);
  }
}
