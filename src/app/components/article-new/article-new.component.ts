import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string = '';

  constructor(
    private _articleService: ArticleService
  ) { 
    this.article = new Article('' , '', '', null, null);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == "success") {
          this.status = "success";
          this.article.title = '';
          this.article.content = '';
        } else {
          this.status = "error";
        }
      },
      error => {
        console.log("ERROR", error);
      }
    );
  }

}