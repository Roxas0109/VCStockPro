import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { CryptoComponent } from './crypto/crypto.component';
import { PostsComponent } from './posts/posts.component';
import { MetalsComponent } from './Metals/metals.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'crypto', component: CryptoComponent },
  { path: 'news', component: NewsComponent },
  { path: 'metals', component: MetalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
