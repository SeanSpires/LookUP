import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, ViewController, LoadingController, normalizeURL, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { PostService } from '../../../app/services/post.service';
import { PostInterface } from '../../../app/interfaces/Post';
import { File } from '@ionic-native/file';
import { Media, MediaObject } from '@ionic-native/media';
import { MediaCapture, CaptureVideoOptions, MediaFile, CaptureError } from '@ionic-native/media-capture';
import { Storage } from '@ionic/storage';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';
import { VideoEditor, CreateThumbnailOptions } from '@ionic-native/video-editor';
import { GroupService } from '../../../app/services/group.service';

const MEDIA_FILES_KEY = 'mediaFiles';

@IonicPage()
@Component({
  selector: 'page-create-post-on-selected-group-modal',
  templateUrl: 'create-post-on-selected-group-modal.html',
})
export class CreatePostOnSelectedGroupModalPage {
  mediaFiles = [];
  @ViewChild('myvideo') myVideo: any;
  videoURL: any;
  takenPhotos: any[] = [];
  videoThumbnail: string = '';
  myPhoto: any;
  path: string;
  filename: string;
  imageData: any;
  testImage: any;
  videoSource: any;
  vidSource2: any;
  videoOptions: VideoOptions
  thumbnail: string;
   
  constructor(
    public params: NavParams,
    public viewCtrl: ViewController, 
    public loadingCtrl: LoadingController, 
    private imagePicker: ImagePicker,
    public postService: PostService,
    private camera: Camera,
    private file: File,
    private mediaCapture: MediaCapture,
    private storage: Storage,
    private media: Media,
    private videoPlayer: VideoPlayer,
    private videoEditor: VideoEditor,
    public groupService : GroupService
    
  ) {    
  }

  newPostDetails: PostInterface = {
    id: '1',
    desc: '',
    date: new Date(),
    avatar: '../../assets/imgs/sean.jpg',
    postOrigin: '',
    mediaFiles: [], // URI or Base64 Encoded
    videoThumbnail: '',
    videoURL: '',
    user: 'Sean',
    comments: [],
    favourites: 0,
  }


  ionViewDidLoad() {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    })
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
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }
   
  submitPost() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000,
      dismissOnPageChange: true
    }).present();
    this.newPostDetails.mediaFiles = this.takenPhotos;
    this.newPostDetails.videoURL = this.videoURL;
    this.newPostDetails.videoThumbnail = this.videoThumbnail;
    this.newPostDetails.postOrigin = this.groupService.currentSelectedGroup.groupName;
    this.groupService.subscribedGroups.forEach(element => {
      if(element.groupName === this.newPostDetails.postOrigin){
        element.posts.unshift(this.newPostDetails);
      }
    });

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
      let filename = imageData.substring(imageData.lastIndexOf('/')+1);
      this.filename = filename;
      let path =  imageData.substring(0,imageData.lastIndexOf('/')+1);
      this.path = path;
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
      let option:CreateThumbnailOptions = {fileUri: this.videoURL, outputFileName: 'thumbnail'};
      this.videoEditor.createThumbnail(option).then(result=>{
        this.thumbnail = 'file://' + String(result);
      let filename = String(this.thumbnail.substring(this.thumbnail.lastIndexOf('/')+1));
      this.filename = filename;
      let path =  String(this.thumbnail.substring(0,this.thumbnail.lastIndexOf('/')+1));
      this.path = path;
      this.file.readAsDataURL(path, filename).then(res=> this.videoThumbnail = res);
      }).catch(e=>{
    });
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

  removeMedia() {
    this.takenPhotos.length = 0;
    this.videoURL = '';
    this.videoThumbnail = '';
  }

  exitPostModal() {
    this.viewCtrl.dismiss();
  }

  radioChecked(selectedRadioButtonValue: string) {
    this.newPostDetails.postOrigin = selectedRadioButtonValue;
}

}
