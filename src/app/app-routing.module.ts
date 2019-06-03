import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewBlogComponent } from './pages/view-blog/view-blog.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'post/:postId',
    component: ViewBlogComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
