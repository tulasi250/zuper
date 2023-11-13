import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-header',
  templateUrl: './view-header.component.html',
  styleUrls: ['./view-header.component.scss']
})
export class ViewHeaderComponent implements OnInit {
  menuList: any[]= [];
  selectedItem = 0;
  showMenu = false;
  constructor() { }

  ngOnInit(): void {
    this.menuList = [
      {
        url: '/dashboard',
        name: 'Dashboard',
        logo: ''
      },
      {
        url: '/jobs',
        name: 'Jobs',
        logo: ''
      },
      {
        url: '/settings',
        name: 'Settings',
        logo: ''
      }
    ]
  }
  activateClass(index: any){
    this.menuList = this.menuList.map((item, itemIndex) => {
      index === itemIndex ? item.active = 'active' : item.active = '';
      return item;
    })
  }
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
