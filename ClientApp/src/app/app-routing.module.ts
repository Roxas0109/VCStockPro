import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PopularComponent } from './popular/popular.component';
import { PostsComponent } from './posts/posts.component';
import { SearchcontentComponent } from './searchcontent/searchcontent.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'news', component: NewsComponent },
  { path: 'searchcontent', component: SearchcontentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
