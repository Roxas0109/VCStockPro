import { Component, OnInit } from '@angular/core';
import { StocksAPIService } from '../stocks-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Object;

  constructor(private data: StocksAPIService) { }

  ngOnInit() {
    this.data.getPosts()
      .then(response => response.json())
      .then(data => this.posts=data.marketSummaryAndSparkResponse.result);

    /*this.data.getPosts()
      .then((response) => {
        response.json()
          .then((data) => {
            this.posts = data;
            console.log(this.posts);
            //this.posts = Array.of(this.posts);
          });
      })
      .catch((err) => {
        console.log('Error geenrted: ${err}');
      });*/

      /*.then(response => response.json())
      .then(json => console.log(json));*/
  }

}
