import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { MediaItemService } from './media-item.service';
import { lookupListToken } from './providers';
import { lookupListToken2 } from './providers';



@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists,
    @Inject(lookupListToken2) public lookupLists2,
    private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastName: this.formBuilder.control(''),
      subDivision: this.formBuilder.control(''),
      status: this.formBuilder.control(''),
      gender: this.formBuilder.control(''),
      suspendDate:this.formBuilder.control(''),
      dob:this.formBuilder.control(''),
      hiredDate:this.formBuilder.control(''),
      nationality:this.formBuilder.control(''),
      grade:this.formBuilder.control(''),
      maritalStatus: this.formBuilder.control(''),
      division: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
    });
  }

  yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1800;
    let maxYear = 2500;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        'year': {
          min: minYear,
          max: maxYear
        }
      };
    }
  }

  onSubmit(mediaItem) {
    //console.log(mediaItem);
    this.mediaItemService.add(mediaItem)
      .subscribe(() => {
        this.router.navigate(['/', mediaItem.medium]);
      });
  }
}
