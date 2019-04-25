import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: any= [];
  constructor(public blogSrv:BlogService) {

   }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.blogSrv.getAllBlogs()
    .then((res:any)=>{
      this.blogs= res;
    })
  }

}
