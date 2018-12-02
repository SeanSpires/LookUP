import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PostModalPage } from '../modals/post-modal/post-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalController: ModalController) {

  }

  presentModal() {
    console.log('sean is gay');
    let myModal = this.modalController.create(PostModalPage);
    myModal.present();
  }
}

