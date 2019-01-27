import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { GroupService } from '../../app/services/group.service';
import { GroupInterface } from '../../app/interfaces/Group';
import Axios from 'axios';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  lookUpApiUrl = "https://lookupapiofficial.azurewebsites.net";  
  groupFromCosmos: GroupInterface;
  groupArray: any[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public groupService: GroupService) {
  }

  // ionViewDidLoad() {
  //   this.groupArray = [];
  //   Axios.get(this.lookUpApiUrl + '/api/group').then(groups => {
  //     this.groupArray = groups.data;
  //     console.log(this.groupArray);
  //     this.groupArray.forEach(group => {
  //       let groupFromCosmos = {
  //               groupName: '',
  //               groupDescription: '',
  //               groupPhoto: '',
  //               isPrivate: false,
  //               groupPassword: '',
  //               posts: []
  //       }

  //       groupFromCosmos.groupName = group.groupName;
  //       groupFromCosmos.groupDescription = group.groupDescription;
  //       groupFromCosmos.groupPhoto = group.groupPhoto;
  //       groupFromCosmos.groupPassword = group.password;
  //       groupFromCosmos.posts = group.posts;
  //       group.posts.forEach(post => {
  //         console.log(post);
  //       });

  //       this.groupService.subscribedGroups.unshift(groupFromCosmos);
  //     });
  //   })
  // }

  onGoToLogin(){
    this.navCtrl.push(TabsPage);
  }


  
}
