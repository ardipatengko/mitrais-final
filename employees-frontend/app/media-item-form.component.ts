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
  photoStart = 'new-user-image-default.png';
  public locations;

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
      firstName: this.formBuilder.control(''),
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
      locationId: this.formBuilder.control(''),
      photo: this.formBuilder.control('')
    });

    this.mediaItemService.getLocation().subscribe(response => {
        this.locations = response;
      });
  }

  addNew(mediaItem){
    console.log("CLear");
    this.photoStart = 'new-user-image-default.png';
    this.form.reset();
    this.changes.emit(mediaItem);
  }

  addNew2(mediaItem){
    console.log("CLear");
    this.photoStart = 'new-user-image-default.png';
    this.form.reset();
  }


  firstNameValidator(control) {
    if  (control.value.trim().length >= 50) {
        return {
        'firstName': {
          message: 'First name max 50 characters'
        }
      };
    }
  }

  onSubmit(mediaItem) {
    if(this.isNew){
      mediaItem.photo = this.photoStart;
      this.changes.emit(mediaItem);
      this.isNew = true;
      this.form.reset();
      this.photoStart = 'new-user-image-default.png';
    }else{
      
      console.log(mediaItem);
      mediaItem.photo = this.photoStart;
      this.changes.emit(mediaItem);
      this.isNew = true;
      console.log("UPDATE");
      this.form.reset();
      this.photoStart = 'new-user-image-default.png';
    }

  }

  listClick(event, newValue) {
    console.log(newValue);
  }

  ngOnChanges(changes: SimpleChanges) {
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
          locationId: this.employeeForm.location.locationId,
          photo: this.employeeForm.photo
        });
        this.photoStart = this.employeeForm.photo;
        this.isNew = false;
    }else{
      this.photoStart = 'new-user-image-default.png';
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
        locationId: this.formBuilder.control(''),
        photo: this.formBuilder.control('')
      });
    }
  }

  fileChange(event){
    this.fileList = event.target.files;
    if(this.fileList.length > 0) {
        this.file = this.fileList[0];
        const formData:any = new FormData(document.getElementsByTagName('form')[0]);
        formData.append('photo', this.file, this.file.name);
        this.mediaItemService.upload(formData).then(response => this.photoStart = this.file.name);  
    }
    
  }
}
