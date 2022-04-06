import { CompanyPageComponent } from './company-page/company-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ViewmsgComponent } from './category/viewmsg/viewmsg.component';
import { HeaderComponent } from './commonpart/header/header.component';
import { MainComponent } from './main/main.component';
import { MyorderComponent } from './myorder/myorder.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'viewmsg', component: ViewmsgComponent },
  { path: 'myorder', component: MyorderComponent },
  { path: 'company', component: CompanyPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
