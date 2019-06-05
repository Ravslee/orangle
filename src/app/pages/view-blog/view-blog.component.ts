import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  public post: any;
  public postId: any;
  public postBody: any = "";

  constructor(private blogSrv: BlogService,
    private seoSrv:SeoService,
    private route: ActivatedRoute,
    private sanitizer:DomSanitizer) {
    this.route.paramMap.subscribe((params: any) => {
      this.postId = params.get('postId');
      this.loadPost();
    })
  }

  ngOnInit() {

  }

  loadPost() {
    this.blogSrv.
      getPostById(this.postId)
      .then((res: any) => {
        this.post = res.data;
        this.postBody = this.post.body;

        this.seoSrv.generateTags({
          title: this.post.title,
          description: this.post.body,
          image: this.post.banner,
          slug: 'post/' + this.post._id
        })
      })
      .catch(err => {
        console.log(err);

      });
  }

  getSafeUrl(image:any){
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
