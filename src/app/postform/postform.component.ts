import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput') inputRef!: ElementRef;

  title = ''
  text = ''

  constructor() { }

  ngOnInit(): void {
  }

  addPost(){
    if (this.text.trim() && this.title.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      console.log('New Post', post)
      this.title=this.text=''
    }
    else{
      this.inputRef.nativeElement.focus()
    }
  }

}
