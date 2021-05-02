import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticlePg } from '../models/article-pg';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  public loading: boolean = true;
  private apiUrl: string = 'http://localhost:58096/api/articles';

  constructor(private httpClient: HttpClient) {}

  getArticles(page: number, pageSize: number) {
    let api = `${this.apiUrl}/${page}/${pageSize}`;

    console.log(api);

    return this.httpClient.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
}
