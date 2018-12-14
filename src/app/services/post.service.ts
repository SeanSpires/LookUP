import { Injectable } from "@angular/core";
import { PostInterface } from "../interfaces/Post";
import { CommentInterface } from "../interfaces/Comment";

@Injectable()
export class PostService {

  constructor() { }

  public currentSelectedPost: PostInterface;

  
  public posts: PostInterface[] = [
    {
      desc: "Could someone help me with my finger placement for the trills in Sonata in C Major by Mozart",
      id: 1,
      date: "50min",
      avatar: "../assets/imgs/sean.jpg",
      postOrigin: "Grade 5 Piano",
      mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
      user: "Sean Spires",
      comments: [{
        id: 1,
        description: "You're confusing the 3rd and 4th finger placements",
        avatar: "../assets/imgs/andrew.jpg",
        mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
        user: "Andrew Hu"
      },
      {
        id: 2,
        description: "Here look at my fingers",
        avatar: "../assets/imgs/anime.jpg",
        mediaFiles: ["../assets/imgs/sonata.png"],
        user: "Hansa Asrani"                
      },
      {
        id: 3,
        description: "When you move your finger at 21 seconds, make sure your" +
                     "fingers are properly straight so you can press down with the correct force.",
        avatar: "../assets/imgs/cartoonSarah.png",
        mediaFiles: undefined,
        user: "Sarah Jane"                
      }
    
    ],
      favourites: 12
    },
    {
      desc: "Should my car be making this noise? it only does this in the morning",
      id: 1,
      date: "2hr",
      avatar: "../assets/imgs/michelle.jpg",
      postOrigin: "Cars",
      mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
      user: "Michelle Lam",
      comments: [{
        id: 1,
        description: "Yeah, your car model commonly will make that noise in the morning don't worry about it!",
        avatar: "../assets/imgs/andrew.jpg",
        mediaFiles: [],
        user: "Andrew Hu"
      },
      {
        id: 2,
        description: "Don't worry mine makes the same noise too haha, listen to mine :)",
        avatar: "../assets/imgs/anime.jpg",
        mediaFiles: ["../assets/imgs/sonata.png"],
        user: "Hansa Asrani"                
      },
    ],
      favourites: 22
    },
    {
      desc: "Hey guys could someone please confirm that my tennis serve is correct, TIA",
      id: 1,
      date: "5hr",
      avatar: "../assets/imgs/samuel.jpg",
      postOrigin: "Tennis",
      mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
      user: "Samuel Spid",
      comments: [{
        id: 1,
        description: "You're confusing the 3rd and 4th finger placements",
        avatar: "../assets/imgs/andrew.jpg",
        mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
        user: "Andrew Hu"
      },
      {
        id: 2,
        description: "Here look at my fingers",
        avatar: "../assets/imgs/samuel.jpg",
        mediaFiles: ["../assets/imgs/sonata.png"],
        user: "Jordan Pan"                
      },
      {
        id: 3,
        description: "When you move your finger at 21 seconds, make sure your" +
                     "fingers are properly straight so you can press down with the correct force.",
        avatar: "../assets/imgs/cartoonSarah.png",
        mediaFiles: ["../assets/imgs/sonata.png"],
        user: "Rachel Michelle"                
      }
    
    ],
      favourites: 7
    }
  ]

  

}