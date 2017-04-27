import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() select = new EventEmitter();
  @Output() wantToDelete = new EventEmitter();
  isSelected = false;

  onSelect() {
    if(this.isSelected === false){
      this.isSelected = true;
    }else{
      this.isSelected = false;
    }
    this.select.emit(this.mediaItem);
    this.wantToDelete.emit(true);
  }
}
