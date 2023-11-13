import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { Breadcrumb, BreadcrumbService } from 'src/app/@core/config/breadcrumb.service';
import { DataStoreService } from 'src/app/@core/config/data-store.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  isDashboard = false;
  pageName = '';
  pageUrl = '';
  totalCount = 0;
  constructor(private router: Router, private _dataStoreService: DataStoreService) {
    this.router.events.pipe(
      // Filter the NavigationEnd events as the breadcrumb is updated only when the route reaches its end
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(event => {
      // Construct the breadcrumb hierarchy
      const root = this.router.routerState.snapshot.url;
      this.pageUrl = root;
      if(root){
        this.pageName = root ? root[1].toUpperCase() + root.slice(2): '';
        this.isDashboard = true;
      }else {
        this.isDashboard = false;
      }
    });
     this._dataStoreService.currentStore.subscribe(res => {
         this.totalCount = 0;
        if(res['totalcount']){
          this.totalCount = res['totalcount'];
        }
    });
  }
  naviation(url: string){
    if(url){
      this.router.navigate([url]);
    }else {
      this.router.navigate(['/login']);
    }
  }
}
