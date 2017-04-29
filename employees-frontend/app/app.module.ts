import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { DialogResultExampleDialog } from './media-item-list.component';
import { DialogResultExampleDialog2 } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { SortingViewPipe } from './sorting-view.pipe';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemService } from './media-item.service';
import { lookupListToken, lookupLists } from './providers';
import { lookupListToken2, lookupLists2 } from './providers';
import { lookupListToken3, lookupLists3 } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule} from '@angular/material';
import {MaterialModule} from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MdInputModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    SortingViewPipe,
    MediaItemFormComponent,
    DialogResultExampleDialog,
    DialogResultExampleDialog2
  ],
  providers: [
    MediaItemService,
    { provide: lookupListToken, useValue: lookupLists },
    { provide: lookupListToken2, useValue: lookupLists2 },
    { provide: lookupListToken3, useValue: lookupLists3 }
  ],
  entryComponents: [
    DialogResultExampleDialog,
    DialogResultExampleDialog2
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}