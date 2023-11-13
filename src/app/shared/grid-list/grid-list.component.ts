import DataSource from 'devextreme/data/data_source';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import CustomStore from 'devextreme/data/custom_store';
import * as jsPDF from 'jspdf';
import moment from 'moment';
@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;
  @Input() dataList!: any[];
  @Input() dataSource!: DataSource;
  @Input() columns: any;
  @Input() updateGrid: any;
  @Input() totalCount!: number;
  @Input() page!: number;
  @Input() isShow: any;
  @Input() exportPageName!: string;
  @Output() currentPage = new EventEmitter<number>();
  @Output() editTableRow = new EventEmitter<any>();
  @Output() deleteTableRow = new EventEmitter<any>();
  @Output() sortOrder = new EventEmitter<any>();
  @Output() filterSearchValue = new EventEmitter<any>();
  @Output() filterBuilderPopup = new EventEmitter<any>();
  @Output() filterPanel = new EventEmitter<any>();

  orgList: any;
  dataField!: string[];
  columnHeader!: any[];
  popupPosition: any;
  filterValue!: (string | string[])[];
  customOperations!: Array<any>;
  fields: any;
  customStore: any;
  Organization: any;
  dUrl!: string;
  rdUrl!: string;
  rUrl: any;
  user: any;
  userId!: number;
  tempList!: any[];
  showVersions!: boolean;
  displayMode: any;
  constructor() {
    this.displayMode = 'compact';
  }

  ngOnInit(): void {
    if (this.columns) {
      this.columnHeader = this.columns.map((column: any) => column.header);
    }
    this.popupPosition = { of: window, at: 'top', my: 'top', offset: { y: 10 } };
    this.filterValue = [];
    this.customOperations = [];
  }
  ngOnChanges() {
    this.tempList = this.dataList;
    if (this.tempList && this.tempList.length) {
      this.customStore = new CustomStore({
        load: _opts => {
          return Promise.resolve(this.dataList);
        },
        totalCount: _opts => {
          return Promise.resolve(this.totalCount);
        }
      });
    } else {
      this.customStore = this.dataSource;
    }
  }
  ngAfterViewInit() {
    this.dataGrid.onOptionChanged.subscribe(e => {
       // Search
      if (e.name === 'columns' && e.fullName.endsWith('filterValue')) {
        console.log(e);
        this.filterSearchValue.emit(e);
      }

      // filter Builder Popup

      if (e.name === 'filterBuilderPopup') {
        console.log('filterBuilderPopup');
        console.log(e);
        this.filterBuilderPopup.emit(e);
      }

      // filter Panel - enable or disable
      if (e.name === 'filterPanel') {
        console.log(e.value);
        this.filterPanel.emit(e);
      }

      // Sorting
      if (e.name === 'columns' && e.fullName.endsWith('sortOrder')) {
        this.sortOrder.emit(e);
      }

      // Paging
      if (e.name === 'paging') {
        this.currentPage.emit(e.value);
      }
    });
  }

  onCellPrepared(e: any) {
  }
  onExporting(e: any) {
    const currentDate = moment().format('YYYY-MM-DD');
    let fileName = 'Zuper_' + currentDate;
    if (e.format === 'pdf') {
      const doc = new jsPDF.jsPDF();
      exportDataGridToPdf({
        jsPDFDocument: doc,
        component: e.component
      }).then(() => {
        doc.save(`${fileName}.pdf`);
      });
    }
  }
  editData(evt: any) {
    this.editTableRow.emit(evt);
  }
  deleteData(evt: any) {
    this.deleteTableRow.emit(evt);
  }

}
