import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './@core/auth/login/login.module';
import { AuthGuard } from './@core/config/auth.guard';
import { AuthService } from './@core/config/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { DataStoreService } from './@core/config/data-store.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GridListComponent } from './shared/grid-list/grid-list.component';
import { JobsService } from './pages/jobs/@core/jobs.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    LoginModule,
    BrowserAnimationsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService, AuthGuard, DataStoreService, JobsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
