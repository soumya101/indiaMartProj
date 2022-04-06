import { CommonpartModule } from './commonpart/commonpart.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewmsgComponent } from './category/viewmsg/viewmsg.component';
import { MyorderComponent } from './myorder/myorder.component';
import { CompanyPageComponent } from './company-page/company-page.component';

@NgModule({
  declarations: [AppComponent, MainComponent, CategoryComponent, ViewmsgComponent, MyorderComponent, CompanyPageComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, CommonpartModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
