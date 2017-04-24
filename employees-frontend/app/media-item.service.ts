import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class MediaItemService {
  constructor(private http: Http) {}

  get(medium) {
    let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    //return this.http.get('mediaitems', { search: searchParams })
    return this.http.get('http://localhost:8080/employeeAll/')
      .map(response => {
        console.log(response.json()[0].firstName);
        return response.json();
      });
  }
  
  add(mediaItem) {
    console.log(mediaItem);
    let body = JSON.stringify(mediaItem);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/saveEmployee', body, options)
      .map(response => {
        console.log(mediaItem);
      });
  }
  
  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
      .map(response => {});
  }

  getGrades() {
    return this.http.get('http://localhost:8080/grades')
      .map(response => {
        console.log(response.json());
        //return response.json();
      });
  }
}
