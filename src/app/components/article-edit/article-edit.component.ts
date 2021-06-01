import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html', //Reutilizar vista
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article = new Article('' , '', '', null, null);  
  public status: string = '';
  public isEdit: boolean = true;
  public articleId: string = '';
  public url: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: Global.url + 'upload-image/' + this.article._id,      
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube Archivo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.articleId = params["id"];

      this.getArticle(this.articleId);
    });
  }

  getArticle(articleId: string) {
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

  onSubmit() {
    this._articleService.update(this.articleId, this.article).subscribe(
      response => {
        if (response.status == "success") {
          this.status = "success";
          this.article.title = '';
          this.article.content = '';
          this._router.navigate(['/blog/articulo/', this.article._id]);
        } else {
          this.status = "error";
        }
      },
      error => {
        console.log("ERROR", error);
      }
    );
  }

  imageUpload(data) {
    this.article.image = data.body.image;;
  }

}
