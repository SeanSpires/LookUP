import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PostModalPage } from '../modals/post-modal/post-modal';
import { PostInterface } from '../../app/interfaces/Post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public modalController: ModalController) {

  }

  posts: PostInterface[] = [
    {
      desc: "Could someone help me with my finger placement for the trills in Sonata in C Major by Mozart",
      id: 1,
      date: "16hr",
      avatar: "../assets/imgs/sean.jpg",
      userQuote: "Beans!",
      mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
      user: "Sean Spires",
      comments: 4,
      favourites: 12
    },
    {
      desc: "Could someone help me with my finger placement for the trills in Sonata in C Major by Mozart",
      id: 1,
      date: "16hr",
      avatar: "../assets/imgs/sean.jpg",
      userQuote: "Beans!",
      mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
      user: "Sean Spires",
      comments: 4,
      favourites: 12
    },
    {
      desc: "Could someone help me with my finger placement for the trills in Sonata in C Major by Mozart",
      id: 1,
      date: "16hr",
      avatar: "../assets/imgs/sean.jpg",
      userQuote: "Beans!",
      mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
      user: "Sean Spires",
      comments: 4,
      favourites: 12
    }
  ]

  ngOnInit() {
          


  }

  presentModal() {
    let myModal = this.modalController.create(PostModalPage);
    myModal.present();
  }
}

