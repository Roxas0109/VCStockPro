import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { NewsComponent } from './news/news.component';
import { CryptoComponent } from './crypto/crypto.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopnavComponent,
    ContentComponent,
    PostsComponent,
    HomeComponent,
    PopularComponent,
    NewsComponent,
    CryptoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
