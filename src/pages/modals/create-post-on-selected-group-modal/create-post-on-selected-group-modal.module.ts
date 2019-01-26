import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePostOnSelectedGroupModalPage } from './create-post-on-selected-group-modal';

@NgModule({
  declarations: [
    CreatePostOnSelectedGroupModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePostOnSelectedGroupModalPage),
  ],
})
export class CreatePostOnSelectedGroupModalPageModule {}
