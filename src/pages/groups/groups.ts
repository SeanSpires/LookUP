import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController, ModalController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { GroupModalPage } from '../modals/groupModal/groupModal';
import { GroupService } from '../../app/services/group.service';
import { SelectedGroupModalPage } from '../modals/selected-group-modal/selected-group-modal';
import { GroupInterface } from '../../app/interfaces/Group';

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {

  showNewGroup: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public popoverCtrl: PopoverController, 
              public alertCtrl: AlertController, 
              public modalController: ModalController, 
              public groupService: GroupService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });
  }
  
  presentNewGroupModal() {
    let myModal = this.modalController.create(GroupModalPage);
    myModal.present();
    this.showNewGroup = true;    
  }
  

  public setCurrentSelectedGroup(selectedGroup: GroupInterface) {
    this.groupService.currentSelectedGroup = selectedGroup;
    console.log(selectedGroup);
    this.openSelectedGroupModal();
  }

  public openSelectedGroupModal() {
    let mySelectedPostModal = this.modalController.create(SelectedGroupModalPage);
    mySelectedPostModal.present();
  }

  public subscribeToSuggestedGroup(groupToSubscribe: GroupInterface){
    this.groupService.subscribedGroups.push(groupToSubscribe);
    let suggestedGroupIndex = this.groupService.recommendedGroups.indexOf(groupToSubscribe);
    let splicedValue = this.groupService.recommendedGroups.splice(suggestedGroupIndex,1);
  }

}


