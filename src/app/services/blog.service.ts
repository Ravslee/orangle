import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http:HttpClient) { }

  public getAllBlogs(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts").toPromise();
  }
}
