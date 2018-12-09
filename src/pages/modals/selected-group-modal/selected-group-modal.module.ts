import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectedGroupModalPage } from './selected-group-modal';

@NgModule({
  declarations: [
    SelectedGroupModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectedGroupModalPage),
  ],
})
export class SelectedGroupModalPageModule {}
