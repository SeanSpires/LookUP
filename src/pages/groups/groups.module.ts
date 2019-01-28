import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupsPage } from './groups';
import { GroupModalPage} from '../modals/groupModal/groupModal'
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GroupsPage, GroupModalPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GroupsPage),
  ],
  entryComponents: [GroupModalPage]
})
export class GroupsPageModule {}
