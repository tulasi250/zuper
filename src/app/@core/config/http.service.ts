import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, retry } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
  constructor(private http: HttpClient){}
  private get_formatted_url(url: string): string {
    return environment.apiurl + url;
  }

  public get(url: string, params = {}): Observable<any> {
    return this.request('GET', this.get_formatted_url(url), {}, params);
  }

  public post(url: string, body: any = {}, params = {}): Observable<any> {
    return this.request('POST', this.get_formatted_url(url), body, params);
  }
  public put(url: string, body: any = {}, params = {}): Observable<any> {
    return this.request('PUT', this.get_formatted_url(url), body, params);
  }

  public patch(url: string, body: any = {}, params = {}): Observable<any> {
    return this.request('PATCH', this.get_formatted_url(url), body, params);
  }

  public delete(url: string, body: any = {}, params = {}): Observable<any> {
    return this.request('DELETE', this.get_formatted_url(url), body, params);
  }
  public request(method: string, url: string, body: any = {}, params = {}) {
    return this.http.request(method, url, {
      body: body,
      headers: this.headers,
      params: this.buildParams(params),
    });
  }
  public buildParams(paramsObj: any): HttpParams {
    let params = new HttpParams();
    Object.keys(paramsObj).forEach((key) => {
      params = params.set(key, paramsObj[key]);
    });
    return params;
  }

}
