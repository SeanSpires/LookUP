import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';

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
  myParam: string;
  price: number = 0;
  constructor(
    public viewCtrl: ViewController, public loadingCtrl: LoadingController, private imagePicker: ImagePicker,
    params: NavParams
  ) {
    // this.myParam = params.get('myParam');
  }

  openImageGallery() {

    this.imagePicker.getPictures({
      maximumImagesCount: 3,
      
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
