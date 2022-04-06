import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [FooterComponent, CopyrightComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, CopyrightComponent, HeaderComponent],
})
export class CommonpartModule {}
