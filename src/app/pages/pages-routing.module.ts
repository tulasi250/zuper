import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../@core/config/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { breadcrumb: 'dashboard' }
      },
      {
        path: 'jobs',
        loadChildren: ()=> import('./jobs/jobs.module').then(m => m.JobsModule),
        data: { breadcrumb: 'jobs' }
      },
      {
        path: 'settings',
        loadChildren: ()=> import('./settings/settings.module').then(m => m.SettingsModule),
        data: { breadcrumb: 'settings' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
