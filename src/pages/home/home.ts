import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PostModalPage } from '../modals/post-modal/post-modal';
import { PostService } from '../../app/services/post.service';
import { PostInterface } from '../../app/interfaces/Post';
import { SelectedPostModalPage } from '../modals/selected-post-modal/selected-post-modal';
import { GroupService } from '../../app/services/group.service';
import Axios from 'axios';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  lookUpApiUrl = "https://lookupapiofficial.azurewebsites.net";
  audioURI: any;
  constructor(public navCtrl: NavController,
              public modalController: ModalController, 
              public postService: PostService,
              public groupService: GroupService) {
              
  }

  presentModal() {
    let myCreatePostModal = this.modalController.create(PostModalPage);
    myCreatePostModal.present();
  }

  public setCurrentSelectedPost (selectedPost: PostInterface) {
    // this.postService.currentSelectedPost = selectedPost;
    this.groupService.currentSelectedPost = selectedPost;
    this.openSelectedPostModal();
  }

  public openSelectedPostModal() {
    let mySelectedPostModal = this.modalController.create(SelectedPostModalPage);
    mySelectedPostModal.present();
  }

  playAudio(description) {
    console.log(description);
    Axios.post(this.lookUpApiUrl + '/api/texttospeech', {
      Text: description
    }).then(uri =>{ 
      this.audioURI = uri
      const audio = new Audio(this.audioURI.data);
      console.log(this.audioURI);
      audio.play();
    });
  }
}

