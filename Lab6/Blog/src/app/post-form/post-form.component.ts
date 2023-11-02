import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{
  @Output() onAdd:EventEmitter<Post> = new EventEmitter<Post>()
  title='';
  text='';

  myDate$:Observable<Date>=new Observable(obs=>
    {setInterval(()=>{
    obs.next(new Date())
    },1000)})    
  
  constructor() {}
  ngOnInit(): void {}

  addPost(){
    if (this.title.trim() && this.text.trim()){
      const post: Post = {
        title:this.title,
        text:this.text,
        date: new Date()
      }
      this.onAdd.emit(post);
      console.log('New post', post);
      this.title = this.text = ''; // очищення полів 
    }
  }
}
