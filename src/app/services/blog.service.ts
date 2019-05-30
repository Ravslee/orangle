import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment'
const hostV1 = environment.host
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http:HttpClient) { }

  public getAllBlogs(){
    return this.http.get(hostV1+"/core/api/blogs").toPromise();
  }
}
