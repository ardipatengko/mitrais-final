import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Input() select;
  @Output() wantToDelete = new EventEmitter();
  isSelected = false;

  onSelect() {
    this.wantToDelete.emit(true);
  }
}
