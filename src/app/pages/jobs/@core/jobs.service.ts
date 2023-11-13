import { Injectable } from "@angular/core";
import { HttpService } from "src/app/@core/config/http.service";

@Injectable()
export class JobsService {
  constructor(private _http: HttpService){

  }
  getJobTableData(){
    return this._http.get('/jobs')
  }
  getJobTableColumns(){
    return this._http.get('/jobs/meta')
  }
}
