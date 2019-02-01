import { Component, group } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController, ModalController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { GroupModalPage } from '../modals/groupModal/groupModal';
import { GroupService } from '../../app/services/group.service';
import { SelectedGroupModalPage } from '../modals/selected-group-modal/selected-group-modal';
import { GroupInterface } from '../../app/interfaces/Group';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import Axios from 'axios';


@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
  speechArray: string[] = [];
  showNewGroup: boolean = false;
  lookUpApiUrl = "https://lookupapiofficial.azurewebsites.net";
  answer: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public popoverCtrl: PopoverController, 
              public alertCtrl: AlertController, 
              public modalController: ModalController, 
              public groupService: GroupService,
              private speech: SpeechRecognition) {
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

  

  public listenForSpeech():void {
    this.speech.hasPermission()
    .then((hasPermission: boolean) => {
      if (!hasPermission) {
        this.speech.requestPermission()
      }
        this.speech.startListening().subscribe(data =>this.generateAudio(data), error => console.log(error));
    });
  }

  generateAudio(data) {
    Axios.post(this.lookUpApiUrl + '/api/qna', {
      Text: data[0]
    }).then(answer => {
      this.answer = answer;
      console.log(this.answer);
      const audio = new Audio(this.answer.data.audio)
      audio.play();
    })
  }

  public unsubToGroup(group: GroupInterface) {
    this.groupService.recommendedGroups.unshift(group);
    let suggestedGroupIndex = this.groupService.subscribedGroups.indexOf(group);
    let splicedValue = this.groupService.subscribedGroups.splice(suggestedGroupIndex,1);
    
    };

  public subscribeToSuggestedGroup(groupToSubscribe: GroupInterface){
    this.groupService.subscribedGroups.push(groupToSubscribe);
    let suggestedGroupIndex = this.groupService.recommendedGroups.indexOf(groupToSubscribe);
    let splicedValue = this.groupService.recommendedGroups.splice(suggestedGroupIndex,1);
  }
}


