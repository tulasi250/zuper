import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataStoreService } from 'src/app/@core/config/data-store.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private titleName: Title, private _dataStoreService: DataStoreService) {
    this.titleName.setTitle("Settings");
  }


  ngOnInit(): void {
    this._dataStoreService.setData('totalcount', 0);
  }

}
