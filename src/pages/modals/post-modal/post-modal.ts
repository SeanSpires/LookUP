import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { PostService } from '../../../app/services/post.service';

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
  
  appendNewPost() {
    this.postService.posts.push({desc: "Could someone help me with my finger placement for the trills in Sonata in C Major by Mozart",
    id: 1,
    date: "16hr",
    avatar: "../assets/imgs/sean.jpg",
    userQuote: "Beans!",
    mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
    user: "Sean Spires",
    comments: 4,
    favourites: 12});

    this.viewCtrl.dismiss();
    
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
    console.log('ionViewDidLoad PostModalPage');
  }

}
