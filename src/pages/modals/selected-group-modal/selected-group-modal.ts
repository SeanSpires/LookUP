import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { GroupService } from '../../../app/services/group.service';
import { PostModalPage } from '../post-modal/post-modal';
import { PostInterface } from '../../../app/interfaces/Post';
import { PostService } from '../../../app/services/post.service';
import { SelectedPostModalPage } from '../selected-post-modal/selected-post-modal';
import { CreatePostOnSelectedGroupModalPage } from '../create-post-on-selected-group-modal/create-post-on-selected-group-modal';

@IonicPage()
@Component({
  selector: 'page-selected-group-modal',
  templateUrl: 'selected-group-modal.html',
})
export class SelectedGroupModalPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public groupService: GroupService,
              public viewCtrl: ViewController,
              public modalController: ModalController,
              public postService: PostService
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectedGroupModalPage');
  }

  exitSelectedGroupModal(){
      this.viewCtrl.dismiss();
  }

  presentModal() {
    let myCreatePostModal = this.modalController.create(CreatePostOnSelectedGroupModalPage);
    myCreatePostModal.present();
  }

  public setCurrentSelectedPost (selectedPost) {
    this.groupService.currentSelectedPost = selectedPost;
    this.openSelectedPostModal();
  }

  public openSelectedPostModal() {
    let mySelectedPostModal = this.modalController.create(SelectedPostModalPage);
    mySelectedPostModal.present();
  }

}
