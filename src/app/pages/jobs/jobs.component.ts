import { CdkDragDrop, CdkDragStart, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { DataStoreService } from 'src/app/@core/config/data-store.service';
import { JobsService } from './@core/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  tableColumns!: any[];
  updateGrid: any;
  totalcount = 0;
  gridColumns!: any[];
  dataList!: any[];
  jobsList = [];
  jobsColumnsList = [];
  constructor(private titleName: Title, private _dataStoreService: DataStoreService, private _jobService: JobsService) {
    this.titleName.setTitle("Jobs");
  }

  ngOnInit(): void {
    this.setGridColumns();
    this.getDataFromApi();
    // this.getJobTableColumns();
    // this.getJobTableData();
  }
  setGridColumns() {
    this.dataList  = ELEMENT_DATA;
    const columns = Object.keys(this.dataList[0])
    this.tableColumns = columns.map((x: any) => {
      return  {
        columnDef: x,
        header: x ? x.toUpperCase(): '',
        cell: (element: any) => `${element[x]}`,
        dateFormat: false,
        icon: false,
        filter: true,
        link: false,
        sort: true,
        hide: false,
        fixed: false,
        Choosable: false,
        visible: false,
        selected: ['filter', 'sort']
      }
    });
    this.updateGrid = {
      edit: false,
      view: false,
      delete:false
    };
    this.gridColumns = this.tableColumns;
  }
 getDataFromApi(){
    this.dataList  = ELEMENT_DATA;
    this.totalcount = this.dataList.length > 0 ? this.dataList.length : 0
    this._dataStoreService.setData('totalcount', this.totalcount);
 }
 getJobTableData(){
  this._jobService.getJobTableData().subscribe(res => {
    this.dataList = res;
    this.totalcount = this.dataList.length > 0 ? this.dataList.length : 0
    this._dataStoreService.setData('totalcount', this.totalcount);
  });
 }
 getJobTableColumns(){
  this._jobService.getJobTableColumns().subscribe(res => {
    if(res){
      this.jobsColumnsList = res;
      const columns = Object.keys(this.jobsColumnsList[0])
      this.tableColumns = columns.map((x: any) => {
        return  {
          columnDef: x,
          header: x ? x.toUpperCase(): '',
          cell: (element: any) => `${element[x]}`,
          dateFormat: false,
          icon: false,
          filter: true,
          link: false,
          sort: true,
          hide: false,
          fixed: false,
          Choosable: false,
          visible: false,
          selected: ['filter', 'sort']
        }
      });
      this.updateGrid = {
        edit: false,
        view: false,
        delete:false
      };
      this.gridColumns = this.tableColumns;
    }
  });
 }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
