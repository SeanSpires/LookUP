import { Injectable } from "@angular/core";
import { PostInterface } from "../interfaces/Post";

@Injectable()
export class PostService {

  constructor() { }

  public posts: PostInterface[] = [
    {
      desc: "Could someone help me with my finger placement for the trills in Sonata in C Major by Mozart",
      id: 1,
      date: "16hr",
      avatar: "../assets/imgs/sean.jpg",
      postOrigin: "grade-5-piano",
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
      postOrigin: "grade-5-piano!",
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
      postOrigin: "grade-5-piano!",
      mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
      user: "Sean Spires",
      comments: 4,
      favourites: 12
    }
  ]

}