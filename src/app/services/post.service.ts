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
      date: "16hr",
      avatar: "../assets/imgs/sean.jpg",
      postOrigin: "Grade 5 Piano",
      mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
      user: "Sean Spires",
      comments: [{
        id: 1,
        description: "You're confusing the 3rd and 4th finger placements",
        avatar: "../assets/imgs/sean.jpg",
        mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
        user: "Andrew Hu"
      },
      {
        id: 2,
        description: "Here look at my fingers",
        avatar: "../assets/imgs/sean.jpg",
        mediaFiles: ["../assets/imgs/sonata.png"],
        user: "Hansa Asrani"                
      },
      {
        id: 3,
        description: "When you move your finger at 21 seconds, make sure your" +
                     "fingers are properly straight so you can press down with the correct force.",
        avatar: "../assets/imgs/sean.jpg",
        mediaFiles: undefined,
        user: "Hansa Asrani"                
      }
    
    ],
      favourites: 12
    },
    {
      desc: "Could someone help me with my finger placement for the trills in Sonata in C Major by Mozart",
      id: 1,
      date: "16hr",
      avatar: "../assets/imgs/sean.jpg",
      postOrigin: "Grade 5 Piano",
      mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
      user: "Sean Spires",
      comments: [{
        id: 1,
        description: "You're confusing the 3rd and 4th finger placements",
        avatar: "../assets/imgs/sean.jpg",
        mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
        user: "Andrew Hu"
      },
      {
        id: 2,
        description: "Here look at my fingers",
        avatar: "../assets/imgs/sean.jpg",
        mediaFiles: ["../assets/imgs/sonata.png"],
        user: "Hansa Asrani"                
      },
      {
        id: 3,
        description: "When you move your finger at 21 seconds, make sure your" +
                     "fingers are properly straight so you can press down with the correct force.",
        avatar: "../assets/imgs/sean.jpg",
        mediaFiles: ["../assets/imgs/sonata.png"],
        user: "Hansa Asrani"                
      }
    
    ],
      favourites: 12
    },
    {
      desc: "Could someone help me with my finger placement for the trills in Sonata in C Major by Mozart",
      id: 1,
      date: "16hr",
      avatar: "../assets/imgs/sean.jpg",
      postOrigin: "Grade 5 Piano",
      mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
      user: "Sean Spires",
      comments: [{
        id: 1,
        description: "You're confusing the 3rd and 4th finger placements",
        avatar: "../assets/imgs/sean.jpg",
        mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
        user: "Andrew Hu"
      },
      {
        id: 2,
        description: "Here look at my fingers",
        avatar: "../assets/imgs/sean.jpg",
        mediaFiles: ["../assets/imgs/sonata.png"],
        user: "Hansa Asrani"                
      },
      {
        id: 3,
        description: "When you move your finger at 21 seconds, make sure your" +
                     "fingers are properly straight so you can press down with the correct force.",
        avatar: "../assets/imgs/sean.jpg",
        mediaFiles: ["../assets/imgs/sonata.png"],
        user: "Hansa Asrani"                
      }
    
    ],
      favourites: 12
    }
  ]

  

}