import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PostModalPage } from '../modals/post-modal/post-modal';
import { PostService } from '../../app/services/post.service';
import { PostInterface } from '../../app/interfaces/Post';
import { SelectedPostModalPage } from '../modals/selected-post-modal/selected-post-modal';
import { GroupService } from '../../app/services/group.service';
import Axios from 'axios';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { AnswerInterface } from '../../app/interfaces/Answer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  lookUpApiUrl = "https://lookupapiofficial.azurewebsites.net";
  audioURI: any;
  speechArray: string[] = [];
  answer: any;
  searchInput: string = "";
  audioSelected: boolean = false;
  assistantReply: string = 'Press the Green Button to Talk to Me!'
  constructor(public navCtrl: NavController,
              public modalController: ModalController, 
              public postService: PostService,
              public groupService: GroupService,
              private speech: SpeechRecognition) {
              
  }

  presentModal() {
    let myCreatePostModal = this.modalController.create(PostModalPage);
    myCreatePostModal.present();
  }

  public setCurrentSelectedPost (selectedPost: PostInterface) {
    // this.postService.currentSelectedPost = selectedPost;
    this.groupService.currentSelectedPost = selectedPost;
    this.openSelectedPostModal();
  }

  public openSelectedPostModal() {
    let mySelectedPostModal = this.modalController.create(SelectedPostModalPage);
    mySelectedPostModal.present();
  }

  async getPermission():Promise<void> {
    try {
      const permission = await this.speech.requestPermission();
      console.log(permission);
      return permission;
    }
    catch(e) {
      console.log(e)
    }
  }

  listenForSpeech() {
    this.speech.hasPermission()
    .then((hasPermission: boolean) => {
      if (!hasPermission) {
        this.speech.requestPermission()
      }
        this.speech.startListening().subscribe(data =>this.generateAudio(data), error => console.log(error));
    });
  }

  generateAudio(data) {
    this.speechArray = data
    Axios.post(this.lookUpApiUrl + '/api/qna', {
      Text: data[0]
    }).then(answer => {
      this.assistantReply = answer.data.text;
      this.answer = answer;
      console.log(this.answer);
      const audio = new Audio(this.answer.data.audio)
      audio.play();
    })
  }

  playAudio(description) {
    console.log(description);
    this.toggleAudioButton();
    Axios.post(this.lookUpApiUrl + '/api/texttospeech', {
      Text: description
    }).then(uri =>{ 
      console.log(uri.data);
      this.audioURI = uri
      const audio = new Audio(this.audioURI.data);
      audio.play();
      this.toggleAudioButton();
    });
  }

  private toggleAudioButton = () => {
    console.log(this.audioSelected);
    this.audioSelected = !this.audioSelected;

  }
}

