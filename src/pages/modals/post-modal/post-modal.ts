import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { PostService } from '../../../app/services/post.service';
import { PostInterface } from '../../../app/interfaces/Post';
import { selectedRadioButton } from '../../../utils/selected-radio-button';

/**
 * Generated class for the PostModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-modal',
  templateUrl: 'post-modal.html',
})


export class PostModalPage {
  constructor(
    public viewCtrl: ViewController, public loadingCtrl: LoadingController, private imagePicker: ImagePicker,
    public postService: PostService 
  ) {    
  }

  newPostDetails: PostInterface = {
    id: 1,
    desc: '',
    date: '1min',
    avatar: "../../assets/imgs/sean.jpg",
    postOrigin: '',
    mediaFiles: ["../../assets/imgs/pianoHands2.png", "../../assets/imgs/sonata.png", "../../assets/imgs/trills.jpg"],
    user: "Sean Spires",
    comments: 0,
    favourites: 0
  }

  openImageGallery() {

    this.imagePicker.getPictures({
      maximumImagesCount: 5,
      
    }).then(function printImages(results) {
      for (var i = 0; i < results.length; i++) {
        console.log(results[i]);
      }
    }).catch(console.log);
  }
   
  ionViewDidLoad() {
  }

  submitGroup() {
    this.postService.posts.unshift(this.newPostDetails);
    this.viewCtrl.dismiss();
  }

  exitPostModal() {
    this.viewCtrl.dismiss();
  }

  radioChecked(selectedRadioButtonValue: string) {
    this.newPostDetails.postOrigin = selectedRadioButtonValue;
}

}
