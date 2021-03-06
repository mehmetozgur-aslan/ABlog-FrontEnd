import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ArticlesComponent } from './articles/articles.component';
import {UrlformatPipe} from '../pipes/urlformat.pipe';
import { MenuArticleMostViewComponent } from './menu-article-most-view/menu-article-most-view.component';
import { MenuArchiveComponent } from './menu-archive/menu-archive.component'

@NgModule({
  declarations: [MenuCategoryComponent, PageTitleComponent, ArticlesComponent,UrlformatPipe, MenuArticleMostViewComponent, MenuArchiveComponent],
  imports: [CommonModule,BrowserModule, RouterModule, NgxPaginationModule],
  exports: [MenuCategoryComponent, PageTitleComponent,ArticlesComponent,MenuArticleMostViewComponent,UrlformatPipe,MenuArchiveComponent],
})
export class ComponentsModule {}
