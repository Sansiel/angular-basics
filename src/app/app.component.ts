import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basics';
  posts: Post[] = [
    {title: '1', text: '1', id: 1}
  ]

  updatePosts(post: Post){
    this.posts.unshift(post)
    console.log("post",post)
  }
}
