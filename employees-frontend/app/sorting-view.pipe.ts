import { Pipe } from '@angular/core';

@Pipe({
  name: 'sortingView'
})
export class SortingViewPipe {
  transform(mediaItems) {
    return mediaItems.sort(function(emp1, emp2) {
          if ( emp1.empId < emp2.empId ){
            return 1;
          }else if( emp1.empId > emp2.empId ){
              return -1;
          }else{
            return 0;	
          }
    });
  }
}