import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectedPostModalPage } from './selected-post-modal';

@NgModule({
  declarations: [
    SelectedPostModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectedPostModalPage),
  ],
})
export class SelectedPostModalPageModule {}
