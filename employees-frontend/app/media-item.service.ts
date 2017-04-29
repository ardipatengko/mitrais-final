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
    return this.http.get('http://localhost:8080/employeeAll/').toPromise()
    .then(response => response.json());
  }

  getLocation() {
    return this.http.get('http://localhost:8080/locationAll/').map(response => {
      return response.json(); 
    });
  }
  
  add(mediaItem) {
    let body = JSON.stringify(mediaItem);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/saveEmployee/' + mediaItem.locationId, body, options).toPromise()
    .then(() => null)
  }

  upload(photo) {
    return this.http.post('http://localhost:8080/uploadImage', photo).toPromise().then();
  }

  update(employeeItem) {
    let body = JSON.stringify(employeeItem);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('http://localhost:8080/updateEmployee/' + employeeItem.locationId, body, options).toPromise()
    .then(() => null);
  }
  
  delete(mediaItem) {
    console.log("DELETE");
    return this.http.delete('http://localhost:8080/deleteEmployee/'+ mediaItem.empId).toPromise().then(() => null)
  }

  getGrades() {
    return this.http.get('http://localhost:8080/grades')
      .map(response => {
        console.log(response.json());
      });
  }

  getGrade(gradeId) {
    return this.http.get('http://localhost:8080/grades/search/findByGradeId?grade_id=' + gradeId)
      .map(response => {
        console.log(response.json());
      });
  }
}
