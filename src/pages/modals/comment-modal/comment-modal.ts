import { Component, ViewChild } from '@angular/core';
import { IonicPage, ViewController, LoadingController, normalizeURL, NavController, NavParams } from 'ionic-angular';
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
import { CommentInterface } from '../../../app/interfaces/Comment';

const MEDIA_FILES_KEY = 'mediaFiles';

@IonicPage()
@Component({
  selector: 'page-comment-modal',
  templateUrl: 'comment-modal.html',
})
export class CommentModalPage {
  mediaFiles = [];
  @ViewChild('myvideo') myVideo: any;
  videoURL: any;
  takenPhotos: any[] = [];
  videoThumbnail: String;
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
  
  newCommentDetails: CommentInterface = {
    id: '1',
    description: '',
    avatar: '../../assets/imgs/sean.jpg',
    mediaFiles: [], // URI or Base64 Encoded
    videoThumbnail: '',
    videoURL: '',
    user: 'Sean',
  }

  ionViewDidLoad() {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    })
  }

  exitCommentModal() {
    this.viewCtrl.dismiss()
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
   
  submitComment() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000,
      dismissOnPageChange: true
    }).present();
    this.newCommentDetails.mediaFiles = this.takenPhotos;
    this.newCommentDetails.videoURL = this.videoURL;
    this.newCommentDetails.videoThumbnail = this.videoThumbnail;
    this.groupService.currentSelectedPost.comments.unshift(this.newCommentDetails);
    this.groupService.subscribedGroups.forEach(element => {
      // if(element.groupName === this.newCommentDetails.postOrigin){
      //   element.posts.unshift(this.newCommentDetails);
      // }
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
      let option:CreateThumbnailOptions = {fileUri: this.videoURL, outputFileName: 'thumbnail'};
      this.videoEditor.createThumbnail(option).then(result=>{
        //result-path of thumbnail
        this.thumbnail = 'file://' + String(result);
        // this.thumbnail = 'file://' + this.thumbnail;
      let filename = String(this.thumbnail.substring(this.thumbnail.lastIndexOf('/')+1));
      this.filename = filename;
      let path =  String(this.thumbnail.substring(0,this.thumbnail.lastIndexOf('/')+1));
      this.path = path;
      this.file.readAsDataURL(path, filename).then(res=> this.videoThumbnail = res);
      }).catch(e=>{
     // alert('fail video editor');
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

  exitPostModal() {
    this.viewCtrl.dismiss();
  }


}
