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
  isPrivate: boolean = false;
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
    isPrivate: false,
    groupPassword: '',
    selectedGroupTags: ["Other"],
    posts: []
  }

  private publicClicked() {
    this.isPrivate = false;
    this.newGroupDetails.isPrivate = false;
  }
  togglePrivacy() {
    if(this.newGroupDetails.isPrivate === true){
      return;
    }
    this.newGroupDetails.isPrivate = !this.newGroupDetails.isPrivate;
    this.isPrivate = !this.isPrivate;
  }

  submitGroup() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000,
      dismissOnPageChange: true
    }).present();
    this.viewCtrl.dismiss();
    if(this.newGroupDetails.isPrivate === false) {
      this.newGroupDetails.groupPassword = '';
    }
    this.groupService.subscribedGroups.push(this.newGroupDetails);
    console.log(this.newGroupDetails);
  }

  exitGroupModal() {
    this.viewCtrl.dismiss();
  }

  logForm(form) {
    console.log(form)
  }

  
  
}