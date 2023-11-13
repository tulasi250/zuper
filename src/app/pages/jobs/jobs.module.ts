import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GridListModule } from 'src/app/shared';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';


@NgModule({
  declarations: [JobsComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    GridListModule
  ]
})
export class JobsModule { }
