import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from './grid-list.component';
import { DxDataGridModule } from 'devextreme-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxfUploaderModule } from 'ngxf-uploader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/@core/config/material.module';


@NgModule({
  declarations: [GridListComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    NgxPaginationModule,
    DxDataGridModule,
    FormsModule,
    ReactiveFormsModule,
    NgxfUploaderModule
  ],
  exports: [GridListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GridListModule { }
