import { Injectable } from "@angular/core";
import { GroupInterface } from "../interfaces/Group";
import { groupPrivacyOption } from "../enums/groupPrivacyOption";

@Injectable()
export class GroupService {

  public currentSelectedGroup: GroupInterface;


   subscribedGroups: GroupInterface[] = [
    {
        groupName: "Grade 5 Piano",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/cartoonPiano.jpg",
        isPrivate: false,
        groupPassword: '',
        selectedGroupTags: ["Music","Other"],
        posts: [
            {
              desc: "I need help understanding line two, could anyone explain?",
              id: 1,
              date: "16hr",
              avatar: "../assets/imgs/anime.jpg",
              postOrigin: "Grade 5 Piano",
              mediaFiles: ["../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
              user: "Rachel Glass",
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
              desc: "Hey Everyone I circled an issue I came across today, could someone demonstrate with a vid please?",
              id: 1,
              date: "16hr",
              avatar: "../assets/imgs/bharat.jpg",
              postOrigin: "Grade 5 Piano",
              mediaFiles: ["../assets/imgs/trills.jpg"],
              user: "Bharat Rasali",
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
    },
    
    {
        groupName: "Tennis",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/tennisC.jpg",
        isPrivate: false,
        groupPassword: '',
        selectedGroupTags: ["Music","Other"],
        posts: []
    },    

    {
        groupName: "Cars",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/wheelC.jpg",
        isPrivate: false,
        groupPassword: '',
        selectedGroupTags: ["Music","Other"],
        posts: []
    }    
   ]

   recommendedGroups: GroupInterface[] = [
    {
        groupName: "Expert Guitar",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/guitar.jpg",
        isPrivate: false,
        groupPassword: '',
        selectedGroupTags: ["Music","Other"],
        posts: []
    },
    
    {
        groupName: "Culinary",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/steak.jpg",
        isPrivate: false,
        groupPassword: '',
        selectedGroupTags: ["Music","Other"],
        posts: []

    },    

    {
        groupName: "Computer Hardware",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/PC.png",
        isPrivate: false,
        groupPassword: '',
        selectedGroupTags: ["Music","Other"],
        posts: []
    },
    {
      groupName: "Makeup",
      groupDescription: "A group meant for grade 5 pianists to learn and help each other",
      groupPhoto: "../assets/imgs/makeup.png",
      isPrivate: false,
      groupPassword: '',
      selectedGroupTags: ["Music","Other"],
      posts: []
    },
    {
      groupName: "Electronics",
      groupDescription: "A group meant for grade 5 pianists to learn and help each other",
      groupPhoto: "../assets/imgs/plug.jpg",
      isPrivate: false,
      groupPassword: '',
      selectedGroupTags: ["Music","Other"],
      posts: []
  }        
   ]

   
   



}