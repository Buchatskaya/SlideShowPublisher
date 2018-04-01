import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {NgModule} from '@angular/core';
import {DxSelectBoxModule, DxTileViewModule, DxTreeViewModule} from 'devextreme-angular';

import {AppComponent} from './app.component';
import {DirTreeComponent} from './dir-tree/dir-tree.component';
import {DirTreeService} from './dir-tree.service';
import {PhotoViewComponent} from './photo-view/photo-view.component';
import {PhotoViewService} from './photo-view.service';
import { PhotoComponent } from './photo/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    DirTreeComponent,
    PhotoViewComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DxTreeViewModule,
    DxTileViewModule,
    DxSelectBoxModule
  ],
  providers: [DirTreeService, PhotoViewService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
