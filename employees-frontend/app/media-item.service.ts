import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class MediaItemService {
  constructor(private http: Http) {}

  get(medium) {
    let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    //return this.http.get('mediaitems', { search: searchParams })
    return this.http.get('http://localhost:8080/employeeAll/').toPromise()
    .then(response => response.json());
      /*.map(response => {
        //console.log(response.json()[0].firstName);
        return response.json();
      });*/
  }
  
  add(mediaItem) {
    console.log(mediaItem);
    let body = JSON.stringify(mediaItem);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/saveEmployee', body, options).toPromise()
    .then(() => null)
      /*.map(response => {
        console.log("SUCCESS ADD")
        console.log(mediaItem);
      }); */
  }

  update(employeeItem) {
    //console.log(employeeItem);
    let body = JSON.stringify(employeeItem);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('http://localhost:8080/updateEmployee', body, options).toPromise()
    .then(() => null);
      /*.map(response => {
        console.log("SUCCESS UPDATE")
        console.log(employeeItem);
      });*/
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

  getGrade(gradeId) {
    return this.http.get('http://localhost:8080/grades/search/findByGradeId?grade_id=' + gradeId)
      .map(response => {
        console.log(response.json());
        //return response.json();
      });
  }
}
