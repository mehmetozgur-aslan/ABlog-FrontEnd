import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../modules/material/material.module';
import { ComponentsModule } from '../components/components.module';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular'

import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { AdminNavComponent } from '../nav/admin-nav/admin-nav.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ArticleComponent } from './article/article/article.component';
import { AdminArticleComponent } from './article/admin-article/admin-article.component';
import { ArticleAddComponent } from './article/article-add/article-add.component';
import { ArticleUpdateComponent } from './article/article-update/article-update.component';
import { ArticleListComponent } from './article/article-list/article-list.component';

@NgModule({
  declarations: [AdminLayoutComponent,AdminNavComponent, AdminHomeComponent, ArticleComponent, AdminArticleComponent, ArticleAddComponent, ArticleUpdateComponent, ArticleListComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule, ComponentsModule,CKEditorModule],
})
export class AdminModule {}
