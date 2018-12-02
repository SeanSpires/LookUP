import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PostModalPage } from '../modals/post-modal/post-modal';
import { PostInterface } from './Post';
import { CommentStmt } from '@angular/compiler';
import { UserInterface } from './User';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public modalController: ModalController) {

  }

  posts: PostInterface[] = [
    {
      title: "asd",
      id: 45,
      date: Date(),
      mediaFiles: ["asd","asd"],
      user: "Sean Spires",
      comments: ["comment1", "2"],
      favourites: 4
    },
    {
      title: "asd",
      id: 45,
      date: Date(),
      mediaFiles: ["asd","asd"],
      user: "Sean Spires",
      comments: ["comment1", "2"],
      favourites: 4
    },
    {
      title: "asd",
      id: 45,
      date: Date(),
      mediaFiles: ["asd","asd"],
      user: "Sean Spires",
      comments: ["comment1", "2"],
      favourites: 4
    }
  ]

  ngOnInit() {
    

  }

  presentModal() {
    console.log('sean is gay');
    let myModal = this.modalController.create(PostModalPage);
    myModal.present();
  }
}

