import { Component, ViewChild } from '@angular/core';
import { IonicPage, ViewController, LoadingController, normalizeURL } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { PostService } from '../../../app/services/post.service';
import { PostInterface } from '../../../app/interfaces/Post';
import { ImagenBdPipe } from './imagen-bd-pipe';
import { File } from '@ionic-native/file';
import { Media, MediaObject } from '@ionic-native/media';
import { MediaCapture, CaptureVideoOptions, MediaFile, CaptureError } from '@ionic-native/media-capture';
import { Storage } from '@ionic/storage';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';

const MEDIA_FILES_KEY = 'mediaFiles';

@IonicPage()
@Component({
  selector: 'page-post-modal',
  templateUrl: 'post-modal.html',
})

export class PostModalPage {
  mediaFiles = [];
  @ViewChild('myvideo') myVideo: any;
  videoURL: any;
  takenPhotos: any[] = [];
  myPhoto: any;
  path: any;
  filename: any;
  imageData: any;
  testImage: any;
  videoSource: any;
  vidSource2: any;
  videoOptions: VideoOptions
   
  constructor(
    public viewCtrl: ViewController, 
    public loadingCtrl: LoadingController, 
    private imagePicker: ImagePicker,
    public postService: PostService,
    private camera: Camera,
    public imagePipe: ImagenBdPipe,
    private file: File,
    private mediaCapture: MediaCapture,
    private storage: Storage,
    private media: Media,
    private videoPlayer: VideoPlayer
    
  ) {    
  }

  ionViewDidLoad() {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    })
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
    const options: ImagePickerOptions = {
      maximumImagesCount: 5
    }
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
      let filename = results[i].substring(results[i].lastIndexOf('/')+1);
      let path =  results[i].substring(0,results[i].lastIndexOf('/')+1);   
      this.file.readAsDataURL(path, filename).then(res=> this.takenPhotos.push(res));
        // this.takenPhotos.push(results[i]);
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
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
      saveToPhotoAlbum: true,
      correctOrientation: true
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
           this.file.readAsDataURL(path, filename).then(res=> this.takenPhotos.push(res));   
  })
  }

  captureVideo() {
    this.videoCapture(this.camera.MediaType.VIDEO);
  }

  videoCapture(mediaType) {
    let options = {
      limit: 1,
      mediaType: mediaType,
      duration: 10
    };
    
    this.mediaCapture.captureVideo(options).then((data: MediaFile[])=>{

      let videoData = JSON.stringify(data);
      let res1 = JSON.parse(videoData);
  
      this.videoURL = res1[0]['fullPath'];
      let filename = this.videoURL.substring(this.videoURL.lastIndexOf('/')+1);
      this.filename = filename;
      let path =  this.videoURL.substring(0,this.videoURL.lastIndexOf('/')+1);
      this.path = path;
      this.file.readAsDataURL(path, filename).then(res=> this.takenPhotos.push(res));
  
      let video = this.myVideo.nativeElement;
  
      video.src =  this.videoURL;
      this.videoSource = this.videoURL;
      // video.play();
  }, (err) => { console.log(err) });
  }

  async play(){
    try {
      this.videoOptions = {
        volume: 1,
      }
      this.videoPlayer.play(this.videoURL, this.videoOptions);
    } catch(e) {
      console.log(e);
    }
  }
  
  // play(myFile) {
  //   if (myFile.name.indexOf('.wav') > -1) {
  //     const audioFile: MediaObject = this.media.create(myFile.localURL);
  //     audioFile.play();
  //   } else {
  //     let path = this.file.dataDirectory + myFile.name;
  //     let url = path.replace(/^file:\/\//, '');
  //     let video = this.myVideo.nativeElement;
  //     video.src = url;
  //     video.play();
  //   }
  // }
 
  // storeMediaFiles(files) {
  //   this.storage.get(MEDIA_FILES_KEY).then(res => {
  //     if (res) {
  //       let arr = JSON.parse(res);
  //       arr = arr.concat(files);
  //       this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
  //     } else {
  //       this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
  //     }
  //     this.mediaFiles = this.mediaFiles.concat(files);
  //   })
  // }

  exitPostModal() {
    this.viewCtrl.dismiss();
  }

  radioChecked(selectedRadioButtonValue: string) {
    this.newPostDetails.postOrigin = selectedRadioButtonValue;
}

}
