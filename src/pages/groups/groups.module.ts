import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupsPage } from './groups';
import { GroupModalPage} from '../modals/groupModal/groupModal'

@NgModule({
  declarations: [
    GroupsPage, GroupModalPage
  ],
  imports: [
    IonicPageModule.forChild(GroupsPage),
  ],
  entryComponents: [GroupModalPage]
})
export class GroupsPageModule {}
