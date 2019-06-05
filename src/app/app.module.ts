import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SideLayoutComponent } from './components/side-layout/side-layout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ViewBlogComponent } from './pages/view-blog/view-blog.component';
import { NgxMdModule } from 'ngx-md';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ShareButtonsModule } from '@ngx-share/buttons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideLayoutComponent,
    HeaderComponent,
    ViewBlogComponent,
    FooterComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxMdModule.forRoot(),
    ShareButtonsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
