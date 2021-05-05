import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  @Input() totalCount: number;
  @Input() articles: Article[];
  @Input() page: number;
  @Input() pageSize: number;
  @Input() loadingItem: number;
  default_article: string = 'assets/article_empty.jpg';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.articleService.loading = true;
  }

  pageChanged(event) {
    this.articleService.loading = true;
    this.page = event;
    this.router.navigateByUrl(`/sayfa/${this.page}`);
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= this.loadingItem; i++) {
      items.push(i);
    }

    return items;
  }
}
