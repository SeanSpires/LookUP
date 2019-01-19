import { Component } from '@angular/core';
import { IonicPage, ViewController, LoadingController, normalizeURL } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { PostService } from '../../../app/services/post.service';
import { PostInterface } from '../../../app/interfaces/Post';
import { ImagenBdPipe } from './imagen-bd-pipe';
import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-post-modal',
  templateUrl: 'post-modal.html',
})


export class PostModalPage {
  takenPhotos: any[] = [];
  myPhoto: any;
  path: any;
  filename: any;
  imageData: any;
  
  constructor(
    public viewCtrl: ViewController, 
    public loadingCtrl: LoadingController, 
    private imagePicker: ImagePicker,
    public postService: PostService,
    private camera: Camera,
    public imagePipe: ImagenBdPipe,
    private file: File
  ) {    
  }

  newPostDetails: PostInterface = {
    id: 1,
    desc: 'Could someone help?',
    date: '1min',
    avatar: "../../assets/imgs/sean.jpg",
    postOrigin: '',
    mediaFiles: ["../../assets/imgs/pianoHands2.png", "../../assets/imgs/sonata.png", "../../assets/imgs/trills.jpg"],
    user: "Sean Spires",
    comments: [],
    favourites: 0
  }

  openImageGallery() {

    this.imagePicker.getPictures({
      maximumImagesCount: 5,
      
    }).then(function printImages(results) {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => {console.log('Could not handle images')});
  }
   
  ionViewDidLoad() {
  }

  submitGroup() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000,
      dismissOnPageChange: true
    }).present();
    this.postService.posts.unshift(this.newPostDetails);
    this.viewCtrl.dismiss();
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.imageData = imageData;
      //needs to import file plugin
      //split the file and the path from FILE_URI result
      let filename = imageData.substring(imageData.lastIndexOf('/')+1);
      this.filename = filename;
      let path =  imageData.substring(0,imageData.lastIndexOf('/')+1);
      this.path = path;
           //then use the method reasDataURL  btw. var_picture is ur image variable
           this.file.readAsDataURL(path, filename).then(res=> this.takenPhotos.push(res)  );
      
  })
  }

  exitPostModal() {
    this.viewCtrl.dismiss();
  }

  radioChecked(selectedRadioButtonValue: string) {
    this.newPostDetails.postOrigin = selectedRadioButtonValue;
}

}
