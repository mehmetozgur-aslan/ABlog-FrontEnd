import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ArticleComponent } from './pages/article/article.component';
import { CategoryArticlesComponent } from './pages/category-articles/category-articles.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    //wwww.bıdıbıdı.com/
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'sayfa/:page',
        component: HomeComponent,
      },
      {
        path: 'makale/:title/:id',
        component: ArticleComponent,
      },

      {
        path: 'kategori/:name/:id',
        component: CategoryArticlesComponent,
      },

      {
        path: 'kategori/:name/:id/sayfa/:page',
        component: CategoryArticlesComponent,
      },

      {
        path: 'arama/sayfa/:page',
        component: SearchComponent,
      },

      {
        //wwww.bıdıbıdı.com/hakkimizda
        path: 'hakkimda',
        component: AboutMeComponent,
      },
      {
        //wwww.bıdıbıdı.com/iletisim
        path: 'iletisim',
        component: ContactComponent,
      },
    ],
  },
  {
    //wwww.bıdıbıdı.com/admin
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      //wwww.bıdıbıdı.com/admin/makale/ekle
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
