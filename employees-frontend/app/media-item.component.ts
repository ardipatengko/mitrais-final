import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Input() select;
  //@Output() select2;
  @Output() wantToDelete = new EventEmitter();
  isSelected = false;

  onSelect() {
    //this.isSelected = this.mediaItem.empId;
    //this.select2.emit(this.mediaItem);
    this.wantToDelete.emit(true);
  }
}
