import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: any= [];
  constructor(public blogSrv:BlogService,
    private sanitizer:DomSanitizer) {

   }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.blogSrv.getAllBlogs()
    .then((res:any)=>{
      this.blogs= res.data;
      console.log(res);
      
    })
  }

  getSafeUrl(image:any){
    // return ""
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
