import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { MediaItemService } from './media-item.service';
import {MdDialog, MdDialogRef} from '@angular/material';

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
      .then(employees => this.mediaItems = employees)).then(() => this.mediaItemsCount = this.mediaItems.length);   
    this.selectedDelete = false;
  }

  onMediaItemSelect(mediaItem) {
    this.isNew = false;
    this.employee = mediaItem;
    //console.log(mediaItem);
    /*
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        //this.getMediaItems(this.medium);
        
      });
      */
  }

  onMediaItemChanges(mediaItem){
    //console.log(mediaItem);
    if(this.isNew){
      console.log("ADD");
      this.mediaItemService.add(mediaItem).then(() => this.mediaItemService.get('tes')
      .then(employees => this.mediaItems = employees)); //.subscribe();
    }else{
      console.log("UPDATE");
      this.isNew = true;
      this.mediaItemService.update(mediaItem).then(() => this.mediaItemService.get('tes')
      .then(employees => this.mediaItems = employees));
    }
    
  }

  getMediaItems(medium) {
    //this.medium = medium;
    this.mediaItemService.get(medium)
      .then(mediaItems => {
        this.mediaItems = mediaItems; // for filer use this : .filter(mediaItem => mediaItem.location === 'Jakarta');
        //console.log(mediaItems[2]);
        this.mediaItemsCount = this.mediaItems.length;
      });
  }

  assignCopy(){
   return this.mediaItems;
}
filterItem(value){
   if(!value) this.assignCopy(); //when nothing has typed
   this.mediaItems = Object.assign([], this.mediaItems).filter(
      mediaItem => mediaItem.location.toLowerCase().indexOf(value.toLowerCase()) > -1
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
          mediaItem.location.toLowerCase().indexOf(filter.location.toLowerCase()) > -1
      );
     }else{
       this.getMediaItems('Tes');
     }
  }
}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: 'app/dialog-result-example-dialog.html'
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>,
   private formBuilder: FormBuilder) {}
  form;

  ngOnInit() {
    this.form = this.formBuilder.group({
      gender: this.formBuilder.control(''),
      location: this.formBuilder.control('')
    });
  }
}