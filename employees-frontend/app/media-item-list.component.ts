import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { MediaItemService } from './media-item.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import { lookupListToken3 } from './providers';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  medium = '';
  public mediaItems = [];
  paramsSubscription;
  mediaItemsCount = 0;
  sortingVar = true;
  selectedOption: string;
  genderSelected = '';
  selectedId;
  employee;
  isNew = true;
  selectedDelete = false;

  constructor(
    private mediaItemService: MediaItemService,
    private activatedRoute: ActivatedRoute,
    public dialog: MdDialog,
    public dialog2: MdDialog) {
      this.assignCopy();
    }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe(params => {
        let medium = params['medium'];
        if(medium.toLowerCase() === 'all') {
          medium = '';
        }
        this.getMediaItems(medium);
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onWantToDelete(value){
    this.selectedDelete = value;
    this.mediaItemsCount = this.mediaItems.length;
  }

  deleteItem(){
    console.log("DELETE");
    this.mediaItemService.delete(this.employee).then(() => this.mediaItemService.get('tes')
      .then(employees => this.mediaItems = employees)).then(() => this.mediaItemsCount = this.mediaItems.length)
      .then(this.employee = null);   
    this.selectedDelete = false;
  }

  onMediaItemSelect(mediaItem) {
    this.isNew = false;
    this.employee = mediaItem;
  }

  selectedEmployee(mediaItem){
    this.selectedId = mediaItem.empId;
    this.isNew = false;
    this.employee = mediaItem;
  }

  onMediaItemChanges(mediaItem){
    if(this.isNew){
      this.mediaItemService.add(mediaItem).then(() => this.mediaItemService.get('tes')
      .then(employees => this.mediaItems = employees)).then(() => this.mediaItemsCount = this.mediaItems.length); //.subscribe();
    }else{
      this.isNew = true;
      this.mediaItemService.update(mediaItem).then(() => this.mediaItemService.get('tes')
      .then(employees => this.mediaItems = employees)).then(() => this.mediaItemsCount = this.mediaItems.length)
      .then(() => this.selectedId = null).then(() => this.selectedDelete = false);
    }
    
  }

  onUpload(photo){
      
  }

  getMediaItems(medium) {
    this.mediaItemService.get(medium)
      .then(mediaItems => {
        this.mediaItems = mediaItems;
        this.mediaItemsCount = this.mediaItems.length;
      });
  }

  assignCopy(){
   return this.mediaItems;
  }

  filterItem(value){
    if(!value) this.assignCopy(); //when nothing has typed
    this.mediaItems = Object.assign([], this.mediaItems).filter(
        mediaItem => mediaItem.location.locationName.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }

  onKey(event:any, value) { // without type info
    if(!value){
        this.getMediaItems('tes');
      }//when nothing has typed
   this.mediaItems = Object.assign([], this.mediaItems).filter(
      mediaItem => mediaItem.lastName.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
       mediaItem.firstName.toLowerCase().indexOf(value.toLowerCase()) > -1 || 
       (mediaItem.firstName + ' ' + mediaItem.lastName).toLowerCase().indexOf(value.toLowerCase()) > -1
   );
   this.mediaItemsCount = this.mediaItems.length;
   this.assignCopy();
  }

  public sorting(){
        if(this.sortingVar === true){
          this.mediaItems.sort(function(emp1, emp2) {
          if ( emp1.lastName < emp2.lastName ){
            return -1;
          }else if( emp1.lastName > emp2.lastName ){
              return 1;
          }else{
            return 0;	
          }
      });
      this.sortingVar = false;
    }else{
          this.mediaItems.sort(function(emp1, emp2) {
          if ( emp1.lastName < emp2.lastName ){
            return 1;
          }else if( emp1.lastName > emp2.lastName ){
              return -1;
          }else{
            return 0;	
          }
      });
      this.sortingVar = true;
    }
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog, {
       height: '250px',
       width: '300px',
       
    });
    dialogRef.afterClosed().subscribe(result => {
     this.filterFunction(result);
   this.mediaItemsCount = this.mediaItems.length;
    });
  }

  openDialogDelete(){
    let dialogRef = this.dialog.open(DialogResultExampleDialog2, {
       height: '250px',
       width: '300px',
       
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'Yes'){
        this.deleteItem();
      }else{
        this.selectedId='';
        this.getMediaItems('');
        this.selectedDelete = false;
        this.employee = null;
      }
    });
  }


  filterFunction(filter: any){
     if(filter){
       if(filter.gender.trim().length === 0 && filter.location.trim().length === 0){
        this.getMediaItems('');
      }else{
          console.log(filter.gender);console.log(filter.location);
          this.mediaItems = Object.assign([], this.mediaItems).filter(
          mediaItem => mediaItem.gender.toLowerCase() === filter.gender.toLowerCase() &&
          mediaItem.location.locationName.toLowerCase() == filter.location.toLowerCase()
           );
        }
    }else{
       this.getMediaItems('Tes');
     }
  }
}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: 'app/dialog-result-example-dialog.html',
  styleUrls: ['app/dialog-result-example-dialog.css']
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>,
  private formBuilder: FormBuilder,
  private mediaItemService: MediaItemService,
  @Inject(lookupListToken3) public lookupLists3) {}
  form;
  public locations;
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      gender: this.formBuilder.control(''),
      location: this.formBuilder.control('')
    });

    this.mediaItemService.getLocation().subscribe(response => {
        this.locations = response;
      });
      
  }
}

@Component({
  selector: 'dialog-result-example-dialog2',
  templateUrl: 'app/delete-confirmation-dialog.html',
  styleUrls: ['app/delete-confirmation-dialog.css']
})
export class DialogResultExampleDialog2 {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog2>) {}
}