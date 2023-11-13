import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHeaderComponent } from './view-header.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [ViewHeaderComponent],
  imports: [CommonModule,RouterModule, BreadcrumbModule],
  exports: [ViewHeaderComponent]
})
export class ViewHeaderModule { }
