import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService:PostsService) { }
  data:any = []
  ngOnInit(): void {

    this.postService.getPosts().subscribe((res:any)=>{
      this.data = res
    })
  }

}
