import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { groupPrivacyOption } from '../../../app/enums/groupPrivacyOption';
import { GroupInterface } from '../../../app/interfaces/Group';
import { GroupService } from '../../../app/services/group.service';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'GroupModal.html',
})
export class GroupModalPage {
  price: number = 0;
  constructor(
    public viewCtrl: ViewController, 
    public loadingCtrl: LoadingController,
    public groupService: GroupService,
    params: NavParams
  ) {}

  newGroupDetails: GroupInterface = {
    groupName: '',
    groupDescription: '',
    groupPhoto: "../../assets/imgs/defaultGroupIcon.png",
    groupPrivacy: groupPrivacyOption.Public,
    groupSubscriptionPrice: 0,
    selectedGroupTags: ["Other"]
  }

  submitGroup() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000,
      dismissOnPageChange: true
    }).present();
    this.viewCtrl.dismiss();
    this.groupService.subscribedGroups.push(this.newGroupDetails);
  }

  exitGroupModal() {
    this.viewCtrl.dismiss();
  }

  
  
}