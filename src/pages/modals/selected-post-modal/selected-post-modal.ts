import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { PostService } from '../../../app/services/post.service';
import { VideoOptions, VideoPlayer } from '@ionic-native/video-player';
import { CommentModalPage } from '../comment-modal/comment-modal';
import { GroupService } from '../../../app/services/group.service';
import Axios from 'axios';

@IonicPage()
@Component({
  selector: 'page-selected-post-modal',
  templateUrl: 'selected-post-modal.html',
})
export class SelectedPostModalPage {
  videoOptions: VideoOptions
  lookUpApiUrl = "https://lookupapiofficial.azurewebsites.net";
  audioURI: any;
  audioSelected: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public postService: PostService,
              public groupService: GroupService,
              private videoPlayer: VideoPlayer,
              public modalController: ModalController,
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectedPostModalPage');
  }

  exitSelectedPostModal(){
    this.viewCtrl.dismiss();
  }

  
    async playVideo(videoURL) {
      try {
        this.videoOptions = {
          volume: 1,
        }
        this.videoPlayer.play(videoURL, this.videoOptions);
      } catch(e) {
        console.log(e);
      }
    }
    
  openCommentModal() {
    let leaveCommentModal = this.modalController.create(CommentModalPage);
    leaveCommentModal.present();
  }

  playAudio(description) {
    console.log(description);
    this.toggleAudioButton();
    Axios.post(this.lookUpApiUrl + '/api/texttospeech', {
      Text: description
    }).then(uri =>{ 
      this.audioURI = uri
      const audio = new Audio(this.audioURI.data);
      console.log(this.audioURI);
      audio.play();
      this.toggleAudioButton();
    });
  }

  private toggleAudioButton = () => {
    console.log(this.audioSelected);
    this.audioSelected = !this.audioSelected;

  }
}

