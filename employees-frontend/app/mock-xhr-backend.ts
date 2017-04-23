import { Request, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class MockXHRBackend {
  constructor() {
  }

  createConnection(request: Request) {
    var response = new Observable((responseObserver: Observer<Response>) => {
      var responseData;
      var responseOptions;
      switch (request.method) {
        case RequestMethod.Get:
          if (request.url.indexOf('mediaitems?medium=') >= 0 || request.url === 'mediaitems') {
            var medium;
            if (request.url.indexOf('?') >= 0) {
              medium = request.url.split('=')[1];
              if (medium === 'undefined') medium = '';
            }
            var mediaItems;
            if (medium) {
              mediaItems = this._mediaItems.filter(mediaItem => mediaItem.location === medium);
            } else {
              mediaItems = this._mediaItems;
            }
            responseOptions = new ResponseOptions({
              body: { mediaItems: JSON.parse(JSON.stringify(mediaItems)) },
              status: 200
            });
          } else {
            var id = parseInt(request.url.split('/')[1]);
            mediaItems = this._mediaItems.filter(mediaItem => mediaItem.empId === id);
            responseOptions = new ResponseOptions({
              body: JSON.parse(JSON.stringify(mediaItems[0])),
              status: 200
            });
          }
          break;
        case RequestMethod.Post:
          var mediaItem = JSON.parse(request.text().toString());
          mediaItem.id = this._getNewId();
          this._mediaItems.push(mediaItem);
          responseOptions = new ResponseOptions({ status: 201 });
          break;
        case RequestMethod.Delete:
          var id = parseInt(request.url.split('/')[1]);
          this._deleteMediaItem(id);
          responseOptions = new ResponseOptions({ status: 200 });
      }

      var responseObject = new Response(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => { };
    });
    return { response };
  }

  _deleteMediaItem(id) {
    var mediaItem = this._mediaItems.find(mediaItem => mediaItem.empId === id);
    var index = this._mediaItems.indexOf(mediaItem);
    if (index >= 0) {
      this._mediaItems.splice(index, 1);
    }
  }

  _getNewId() {
    if (this._mediaItems.length > 0) {
      return Math.max.apply(Math, this._mediaItems.map(mediaItem => mediaItem.empId)) + 1;
    }
  }

  _mediaItems = [
    {
      empId: 1,
      firstName: "Person 1",
      lastName: "People ",
      gender: "Female",
      dob: "1969-12-30",
      nationality: "American",
      marStatus: "Married",
      phone: "+6285242312512",
      subDiv: "Mitrais PHP Bootcamp",
      status: "Employee",
      suspendDate: "1969-12-30",
      hiredDate: "1969-12-30",
      email: "person1@mitrais.com",
      location: "Bandung",
      grade : {
        grade: "Junior Programmer",
        gradeCode: "JP"
      },
      division : {
        grade: "Software Development Red",
        gradeCode: "SWD Red"
      }
    },
    {
      empId: 2,
      firstName: "Person 2",
      lastName: "People",
      gender: "Male",
      dob: "1969-12-30",
      nationality: "Indonesian",
      marStatus: "Single",
      phone: "+6285242312512",
      subDiv: "Mitrais Java Bootcamp",
      status: "Employee",
      suspendDate: "1969-12-30",
      hiredDate: "1969-12-30",
      email: "person2@mitrais.com",
      location: "Jakarta",
      grade : {
        grade: "Programmer",
        gradeCode: "PG"
      },
      division : {
        grade: "Software Development Blue",
        gradeCode: "SWD Blue"
      }
    }, {
      empId: 3,
      firstName: "Person 3",
      lastName: "People",
      gender: "Male",
      dob: "1969-12-30",
      nationality: "Australian",
      marStatus: "Single",
      phone: "+6285242312512",
      subDiv: "Mitrais AngularJS Bootcamp",
      status: "Employee",
      suspendDate: "1969-12-30",
      hiredDate: "1969-12-30",
      email: "person3@mitrais.com",
      location: "Bandung",
      grade : {
        grade: "Junior Programmer",
        gradeCode: "JP"
      },
      division : {
        grade: "Software Development Red",
        gradeCode: "SWD Red"
      }
    }
    /*, {
      id: 4,
      name: "Hoopers",
      medium: "Series",
      category: "Drama",
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
    */
  ];
}