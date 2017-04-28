import { Component, Inject, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { MediaItemService } from './media-item.service';
import { lookupListToken } from './providers';
import { lookupListToken2 } from './providers';
import { lookupListToken3 } from './providers';



@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;
  @Input() employeeForm;
  isNew = true;
  @Output() changes = new EventEmitter();
  @Output() upload = new EventEmitter();
  fileList: FileList;
  file: File;
  photoStart = 'shiba1.jpg';

  onChanges() {
    if(this.isNew){
      
    }else{
      this.changes.emit(this.employeeForm);
    }
    
  }

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists,
    @Inject(lookupListToken2) public lookupLists2,
    @Inject(lookupListToken3) public lookupLists3,
    private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      empId: this.formBuilder.control(''),
      firstName: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastName: this.formBuilder.control(''),
      subDiv: this.formBuilder.control(''),
      status: this.formBuilder.control(''),
      gender: this.formBuilder.control(''),
      suspendDate:this.formBuilder.control(''),
      dob:this.formBuilder.control(''),
      hiredDate:this.formBuilder.control(''),
      nationality:this.formBuilder.control(''),
      grade:this.formBuilder.control(''),
      marStatus: this.formBuilder.control(''),
      division: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      location: this.formBuilder.control(''),
      photo: this.formBuilder.control('')
    });
  }

  addNew(){
    console.log("CLear");
    this.photoStart = 'shiba1.jpg';
    this.form.reset();
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
    //console.log(this.employeeForm);
    if(this.isNew){
      /*
      this.mediaItemService.add(mediaItem)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
      */
      mediaItem.photo = this.photoStart;
      this.changes.emit(mediaItem);
      this.isNew = true;
      this.form.reset();
      this.photoStart = 'shiba1.jpg';
    }else{
      /*
      console.log(mediaItem);
      this.mediaItemService.update(mediaItem)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
      */
      mediaItem.photo = this.photoStart;
      this.changes.emit(mediaItem);
      this.isNew = true;
      console.log("UPDATE");
      this.form.reset();
      this.photoStart = 'shiba1.jpg';
    }

  }

  listClick(event, newValue) {
    console.log(newValue);
    //this.selectedItem = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    //this.form.setValue({firstName: this.employeeForm.firstName});
    //this.formBuilder.control['firstName'].setValue(this.employeeForm.firstname);
    //this.form.patchValue({firstName: this.employeeForm.firstName})
    if(this.employeeForm != undefined){
       
       this.form.setValue({
         empId: this.employeeForm.empId,
         firstName: this.employeeForm.firstName,
          lastName: this.employeeForm.lastName,
          subDiv: this.employeeForm.subDiv,
          status: this.employeeForm.status,
          gender: this.employeeForm.gender,
          suspendDate:this.employeeForm.suspendDate,
          dob:this.employeeForm.dob,
          hiredDate:this.employeeForm.hiredDate,
          nationality:this.employeeForm.nationality,
          grade:this.employeeForm.grade,
          marStatus: this.employeeForm.marStatus,
          division: this.employeeForm.division,
          phone: this.employeeForm.phone,
          email: this.employeeForm.email,
          location: this.employeeForm.location,
          photo: this.employeeForm.photo
        });
        this.photoStart = this.employeeForm.photo;
        this.isNew = false;
    }
  }

  fileChange(event){
    this.fileList = event.target.files;
    if(this.fileList.length > 0) {
        this.file = this.fileList[0];
        const formData:any = new FormData(document.getElementsByTagName('form')[0]);
        formData.append('photo', this.file, this.file.name);
        this.upload.emit(formData);
    }
    this.photoStart = this.file.name;
  }
}
