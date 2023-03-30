import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AdminBlogsComponent } from './features/admin-blogs/admin-blogs.component';
import { AdminUniversitiesComponent } from './features/admin-universities/admin-universities.component';
import { AdminComponent } from './features/admin/admin.component';
import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { BlogComponent } from './features/blog/blog.component';
import { DiscoverComponent } from './features/discover/discover.component';
import { FaqComponent } from './features/faq/faq.component';
import { MainComponent } from './features/main/main.component';
import { PolicyComponent } from './features/policy/policy.component';
import { PostComponent } from './features/post/post.component';
import { UniversityComponent } from './features/university/university.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'discover',
    component: DiscoverComponent,
  },
  {
    path: 'blogs',
    component: BlogComponent,
  },
  {
    path: 'blogs/:id',
    component: PostComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'policy',
    component: PolicyComponent,
  },
  {
    path: 'universities/:id',
    component: UniversityComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'admin/blogs',
    component: AdminBlogsComponent,
  },
  {
    path: 'admin/universities',
    component: AdminUniversitiesComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
