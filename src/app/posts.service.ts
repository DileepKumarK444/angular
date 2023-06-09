import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPosts(){
    return  this.http.get<any>('http://localhost:8800/api/post/getposts')
  }
}
