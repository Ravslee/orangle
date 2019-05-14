import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SideLayoutComponent } from './components/side-layout/side-layout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ViewBlogComponent } from './pages/view-blog/view-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideLayoutComponent,
    HeaderComponent,
    ViewBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
