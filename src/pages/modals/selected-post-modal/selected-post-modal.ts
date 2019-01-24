import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PostService } from '../../../app/services/post.service';
import { VideoOptions, VideoPlayer } from '@ionic-native/video-player';

@IonicPage()
@Component({
  selector: 'page-selected-post-modal',
  templateUrl: 'selected-post-modal.html',
})
export class SelectedPostModalPage {
  videoOptions: VideoOptions

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public postService: PostService,
              private videoPlayer: VideoPlayer,
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
  }

