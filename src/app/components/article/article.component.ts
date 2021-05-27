import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article("", "", "", "", "");
    this.url = Global.url;
  }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {
      let articleId = params["id"];

      this.getArticle(articleId);
    });
     
  }

  getArticle(articleId: number) {
    this._articleService.getArticle(articleId).subscribe(
      response => {
        if (response.status == "success") {
          this.article = response.article;
        } else {
          this._router.navigate(['/home']);
        }
      },
      error => {
        console.log("ERROR", error);
        this._router.navigate(['/home']);
      }
    );
  }
}