import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupModalPage } from './groupModal';

@NgModule({
  declarations: [
    GroupModalPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupModalPage),
  ],
})
export class ModalPageModule {}
