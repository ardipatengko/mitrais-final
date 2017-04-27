import { OpaqueToken } from '@angular/core';

/*import { ActivatedRoute } from '@angular/router';
import { MediaItemService } from './media-item.service';
*/
export const lookupListToken = new OpaqueToken('lookupListToken');
export const lookupListToken2 = new OpaqueToken('lookupListToken2');
export const lookupListToken3 = new OpaqueToken('lookupListToken3');

/*
const grades = [];

class providers {
  constructor(private mediaItemService: MediaItemService) {}
  
  ngOnInit() {
    this.getGrades();
  }

  getGrades() {
    this.mediaItemService.getGrades()
      .subscribe(mediaItems => {
        this.g = mediaItems;
        //console.log(mediaItems[2]);
      });
  }

}
*/

export const lookupLists = {
  grades: [
    {
        gradeId: 1,
        grade: "Junior Programmer",
        gradeCode: "JP"
    },
    {
        gradeId: 2,
        grade: "Programmer",
        gradeCode: "PG"
      },
      {
        gradeId: 3,
        grade: "Senior Manager",
        gradeCode: "SM"
      },
      {
        gradeId: 4,
        grade: "Finance & Accounting",
        gradeCode: "FA"
      }
  ]
};

export const lookupLists2 = {
  divisions: [
    {
        divId: 1,
        division: "Software Development Red",
        divisionCode: "SWD Red"
    },
    {
        divId: 2,
        division: "Software Development Blue",
        divisionCode: "SWD Blue"
      },
      {
        divId: 3,
        division: "Training & Development",
        divisionCode: "TnD"
      },
      {
        divId: 4,
        division: "Finance & Accounting",
        divisionCode: "FA"
      }
  ]
};

export const lookupLists3 = {
  genders: [
    'Male',
    'Female'
  ]
};