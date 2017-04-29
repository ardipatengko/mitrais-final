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
    public dialog: MdDialog) {
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
        //this.mediaItemsCount = this.mediaItems.length;
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
    /*
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        //this.getMediaItems(this.medium);
        
      });
      */
  }

  tes(mediaItem){
    //console.log(mediaItem.empId);
    this.selectedId = mediaItem.empId;
    this.isNew = false;
    this.employee = mediaItem;
  }


  onMediaItemChanges(mediaItem){
    //console.log(mediaItem);
    if(this.isNew){
      //console.log("ADD");
      this.mediaItemService.add(mediaItem).then(() => this.mediaItemService.get('tes')
      .then(employees => this.mediaItems = employees)).then(() => this.mediaItemsCount = this.mediaItems.length); //.subscribe();
    }else{
      //console.log("UPDATE");
      this.isNew = true;
      this.mediaItemService.update(mediaItem).then(() => this.mediaItemService.get('tes')
      .then(employees => this.mediaItems = employees)).then(() => this.mediaItemsCount = this.mediaItems.length)
      .then(() => this.selectedId = null).then(() => this.selectedDelete = false);
    }
    
  }

  onUpload(photo){
    //this.mediaItemService.upload(photo).subscribe();   
  }

  getMediaItems(medium) {
    //this.medium = medium;
    this.mediaItemService.get(medium)
      .then(mediaItems => {
        this.mediaItems = mediaItems; // for filer use this : .filter(mediaItem => mediaItem.location === 'Jakarta');
        //console.log(mediaItems);
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
    /*
    if(search.length === 0){
      this.mediaItems = this.mediaItems;
    }else{
      this.mediaItems = this.mediaItems.filter(mediaItem => mediaItem.location === search);
    }
    */
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
    console.log("sorting");
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog, {
       height: '250px',
       width: '300px',
       
    });
    dialogRef.afterClosed().subscribe(result => {
     this.filterFunction(result);
   this.mediaItemsCount = this.mediaItems.length;
      //console.log(result);
      //this.selectedOption = result;
    });
  }

  filterFunction(filter: any){
     if(filter){
       this.mediaItems = Object.assign([], this.mediaItems).filter(
          mediaItem => mediaItem.gender.toLowerCase().indexOf(filter.gender.toLowerCase()) > -1 &&
          mediaItem.location.locationName.toLowerCase().indexOf(filter.location.toLowerCase()) > -1
      );
      console.log(filter.gender.trim().length);console.log(filter.location.trim().length);
    }else if(filter.gender.trim().length === 0 && filter.location.trim().length === 0){
       console.log(filter.gender.trim().length);console.log(filter.location.trim().length);
       this.getMediaItems('');
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
        console.log(this.locations);
      });
      
  }
}