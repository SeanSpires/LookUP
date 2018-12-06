import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PostModalPage } from '../modals/post-modal/post-modal';
import { PostService } from '../../app/services/post.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public modalController: ModalController, public postService: PostService) {

  }
  
  ngOnInit() {
          
  }

  presentModal() {
    let myModal = this.modalController.create(PostModalPage);
    myModal.present();
  }
}

