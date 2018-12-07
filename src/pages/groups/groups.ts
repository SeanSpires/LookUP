import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController, ModalController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { GroupModalPage } from '../modals/groupModal/groupModal';
import { GroupService } from '../../app/services/group.service';

/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  
  presentModal() {
    let myModal = this.modalController.create(GroupModalPage);
    myModal.present();
    this.showNewGroup = true;    
  }

}


