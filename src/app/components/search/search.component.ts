import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Article[];
  public searchValue: string = '';

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {
      let searchString = params["search"];

      this.searchValue = searchString;

      this.search(searchString);
    });

  }

  search(searchString: string) {
    this._articleService.search(searchString).subscribe(
      response => {
        if (response.status == "success") {
          this.articles = response.articles;
        } 
      },
      error => {
        console.log("ERROR", error);
        this.articles = [];
      }
    );
  }

}
