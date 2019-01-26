import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { groupPrivacyOption } from '../../../app/enums/groupPrivacyOption';
import { GroupInterface } from '../../../app/interfaces/Group';
import { GroupService } from '../../../app/services/group.service';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { ImagePickerOptions, ImagePicker } from '@ionic-native/image-picker';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'GroupModal.html',
})


export class GroupModalPage {
  takenPhotos: any[] = [];
  myPhoto: any;
  path: any;
  filename: any;
  imageData: any;
  isPrivate: boolean = false;
  lookUpApiUrl = "https://lookupapiofficial.azurewebsites.net";

  constructor(
    public viewCtrl: ViewController, 
    public loadingCtrl: LoadingController,
    public groupService: GroupService,
    private imagePicker: ImagePicker,
    private camera: Camera,
    private file: File,
    params: NavParams
  ) {}

  newGroupDetails: GroupInterface = {
    groupName: '',
    groupDescription: '',
    groupPhoto: '',
    isPrivate: false,
    groupPassword: '',
    selectedGroupTags: ["Other"],
    posts: []
  }

  private publicClicked() {
    this.isPrivate = false;
    this.newGroupDetails.isPrivate = false;
  }
  
  togglePrivacy() {
    if(this.newGroupDetails.isPrivate === true){
      return;
    }
    this.newGroupDetails.isPrivate = !this.newGroupDetails.isPrivate;
    this.isPrivate = !this.isPrivate;
  }

  submitGroup() {
    // const myFormData = new FormData();
    // myFormData.append('file', this.imageData);
    // axios.post(this.lookUpApiUrl + '/api/group/mediaUpload', myFormData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // }).then(
    //   uri => axios.post(this.lookUpApiUrl + '/api/group/create', {
    //     "groupName": this.newGroupDetails.groupName,
    //     "isPrivate": this.newGroupDetails.isPrivate,
    //     "password": this.newGroupDetails.groupPassword,
    //     "groupPhoto": uri,
    //     "ownerId": "1"
    //   }).then(res => console.log(res))
    // );

    

    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000,
      dismissOnPageChange: true
    }).present();
    this.viewCtrl.dismiss();
    if(this.newGroupDetails.isPrivate === false) {
      this.newGroupDetails.groupPassword = '';
    }
    this.newGroupDetails.groupPhoto = this.myPhoto;
    this.groupService.subscribedGroups.push(this.newGroupDetails);
    console.log(this.newGroupDetails);
  }

  getGroup() {
    let data:any = [];
    axios.get(this.lookUpApiUrl + '/api/group/Piano').then(res => 
      data = res);
  }

  exitGroupModal() {
    this.viewCtrl.dismiss();
  }

  logForm(form) {
    console.log(form)
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
           this.file.readAsDataURL(path, filename).then(res=> this.myPhoto = (res));

      this.file = imageData;
      
  })
  }

  openImageGallery() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 1
    }
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
      this.imageData = results[i];
      let filename = results[i].substring(results[i].lastIndexOf('/')+1);
      let path =  results[i].substring(0,results[i].lastIndexOf('/')+1);   
      this.file.readAsDataURL(path, filename).then(res=> this.myPhoto = (res));
        // this.takenPhotos.push(results[i]);
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  
  
}