import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
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
  isPrivate: boolean = false;
  lookUpApiUrl = "http://localhost:5000";

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
    axios.post(this.lookUpApiUrl + '/api/group', {
      "groupName": this.newGroupDetails.groupName,
      "isPrivate": this.newGroupDetails.isPrivate,
      "password": this.newGroupDetails.groupPassword,
      "groupPhoto": this.newGroupDetails.groupPhoto,
      "ownerId": "1"
    }).then(res => console.log(res));

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

  getGroup() {
    let data:any = [];
    axios.get(this.lookUpApiUrl + '/api/group/Piano').then(res => 
      data = res);
  }

  exitGroupModal() {
    this.viewCtrl.dismiss();
  }

  logForm(form) {
    console.log(form)
  }

  
  
}