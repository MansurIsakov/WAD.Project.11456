import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { MainComponent } from './features/main/main.component';
import { HeaderComponent } from './core/components/header/header.component';

// Icons
import { FastSvgModule } from '@push-based/ngx-fast-svg';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MainCardComponent } from './features/main/components/main-card/main-card.component';
import { DiscoverComponent } from './features/discover/discover.component';
import { BlogComponent } from './features/blog/blog.component';
import { DiscoverSearchComponent } from './features/discover/components/discover-search/discover-search.component';
import { PolicyComponent } from './features/policy/policy.component';
import { FaqComponent } from './features/faq/faq.component';
import { AccourdionListComponent } from './core/components/accoudion/accourdion-list/accourdion-list.component';
import { AccourdionItemComponent } from './core/components/accoudion/accourdion-item/accourdion-item.component';
import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { DiscoverListComponent } from './features/discover/components/discover-list/discover-list.component';
import { DiscoverItemComponent } from './features/discover/components/discover-item/discover-item.component';
import { UniversityComponent } from './features/university/university.component';
import { UniversityCardComponent } from './features/university/components/university-card/university-card.component';
import { UniversityInfoComponent } from './features/university/components/university-info/university-info.component';
import { BlogListComponent } from './features/blog/components/blog-list/blog-list.component';
import { BlogItemComponent } from './features/blog/components/blog-item/blog-item.component';
import { BlogFilteringComponent } from './features/blog/components/blog-filtering/blog-filtering.component';
import { PostComponent } from './features/post/post.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { FilterPipe } from './pipes/filter.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './features/admin/admin.component';
import { AdminBlogsComponent } from './features/admin-blogs/admin-blogs.component';
import { AdminUniversitiesComponent } from './features/admin-universities/admin-universities.component';
import { UniversityListComponent } from './features/admin-universities/components/university-list/university-list.component';
import { AdminUniversityItemComponent } from './features/admin-universities/components/admin-university-item/admin-university-item.component';
import { CreateUniModalComponent } from './shared/modals/create-uni-modal/create-uni-modal.component';
import { EditUniModalComponent } from './shared/modals/edit-uni-modal/edit-uni-modal.component';
import { AdminBlogsListComponent } from './features/admin-blogs/components/admin-blogs-list/admin-blogs-list.component';
import { AdminBlogsItemComponent } from './features/admin-blogs/components/admin-blogs-item/admin-blogs-item.component';
import { CreateBlogModalComponent } from './shared/modals/create-blog-modal/create-blog-modal.component';
import { EditBlogModalComponent } from './shared/modals/edit-blog-modal/edit-blog-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    MainComponent,
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent,
    MainCardComponent,
    DiscoverComponent,
    BlogComponent,
    DiscoverSearchComponent,
    PolicyComponent,
    FaqComponent,
    AccourdionListComponent,
    AccourdionItemComponent,
    LoginComponent,
    SignupComponent,
    DiscoverListComponent,
    DiscoverItemComponent,
    UniversityComponent,
    UniversityCardComponent,
    UniversityInfoComponent,
    BlogListComponent,
    BlogItemComponent,
    BlogFilteringComponent,
    PostComponent,
    FilterPipe,
    SafePipe,
    AdminComponent,
    AdminBlogsComponent,
    AdminUniversitiesComponent,
    UniversityListComponent,
    AdminUniversityItemComponent,
    CreateUniModalComponent,
    EditUniModalComponent,
    AdminBlogsListComponent,
    AdminBlogsItemComponent,
    CreateBlogModalComponent,
    EditBlogModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FastSvgModule.forRoot({
      url: (name: string) => `/assets/icons/${name}.svg`,
      defaultSize: '32',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
