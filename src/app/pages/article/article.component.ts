import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article: Article;
  category: Category;
  pageLoad: boolean = false;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
    this.pageLoad = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.articleService.loading = true;
      this.pageLoad = this.articleService.loading;
      let id = Number(this.route.snapshot.paramMap.get('id'));

      this.articleService.getArticle(id).subscribe((data) => {
        this.article = data;
        this.category = data.category;
        this.articleService.articleViewCountUp(id);
        this.pageLoad = this.articleService.loading;
      });
    });
  }
}
