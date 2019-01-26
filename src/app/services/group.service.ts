import { Injectable } from "@angular/core";
import { GroupInterface } from "../interfaces/Group";
import { groupPrivacyOption } from "../enums/groupPrivacyOption";
import { PostService } from "./post.service";
import { PostInterface } from "../interfaces/Post";

@Injectable()
export class GroupService {

  public currentSelectedGroup: GroupInterface;
  public currentSelectedPost: PostInterface;

  constructor(
    public postService: PostService
  ){}

  ngOnChanges() {
    this.populatePosts()
  }

   subscribedGroups: GroupInterface[] = [
    {
        groupName: "5th Grade Piano",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/cartoonPiano.jpg",
        isPrivate: false,
        groupPassword: '',
        selectedGroupTags: ["Music","Other"],
        posts: [{
          desc: "Could someone help me with my finger placement for the trills in Sonata in C Major by Mozart",
          id: 1,
          date: "50min",
          avatar: "../assets/imgs/sean.jpg",
          postOrigin: "Grade 5 Piano",
          videoThumbnail: '',
          videoURL: '',
          mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
          user: "Sean Spires",
          comments: [{
            id: 1,
            description: "You're confusing the 3rd and 4th finger placements",
            avatar: "../assets/imgs/rohaan.jpg",
            mediaFiles: ["../assets/imgs/pianoHands2.png", "../assets/imgs/sonata.png", "../assets/imgs/trills.jpg"],
            user: "Rohaan Mistry"
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
        },]
    },
    
    {
        groupName: "Tennis",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/tennisC.jpg",
        isPrivate: false,
        groupPassword: '',
        selectedGroupTags: ["Music","Other"],
        posts: [{
          desc: "Hey guys could someone please confirm that my tennis serve is correct, TIA",
          id: 2,
          date: "5hr",
          avatar: "../assets/imgs/bharat.jpg",
          postOrigin: "Tennis",
          videoThumbnail: '',
          videoURL: '',
          mediaFiles: ["../assets/imgs/tennis.png"],
          user: "Samuel Spid",
          comments: [{
            id: 1,
            description: "Keep your elbow slightly more raised when beggining the serve",
            avatar: "../assets/imgs/andrew.jpg",
            mediaFiles: [],
            user: "Andrew Hu"
          },
          {
            id: 2,
            description: "Here look at my form, as you can see I've got my elbow very high in the beginning",
            avatar: "../assets/imgs/samuel.jpg",
            mediaFiles: ["../assets/imgs/tennisServe2.png"],
            user: "Jordan Pan"                
          },
          {
            id: 3,
            description: "To learn to serve, it may be profitable to take the elements of the kinetic chain in reverse. Start with the motion of the shoulder and arm, and as you progress, add additional elements until you reach the ground.",
            avatar: "../assets/imgs/cartoonSarah.png",
            mediaFiles: [],
            user: "Rachel Michelle"                
          }
        
        ],
          favourites: 7
        }]
    },    

    {
        groupName: "Cars",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/wheelC.jpg",
        isPrivate: false,
        groupPassword: '',
        selectedGroupTags: ["Music","Other"],
        posts: [{
          desc: "Should my car be making this noise? it only does this in the morning",
          id: 3,
          date: "2hr",
          avatar: "../assets/imgs/michelle.jpg",
          postOrigin: "Cars",
          videoThumbnail: '',
          videoURL: '',
          mediaFiles: ["../assets/imgs/carGarage.png", "../assets/imgs/jeepEngine.jpg"],
          user: "Michelle Lam",
          comments: [{
            id: 1,
            description: "Yeah, your car model commonly will make that noise in the morning don't worry about it!",
            avatar: "../assets/imgs/bharat.jpg",
            mediaFiles: [],
            user: "Bharat Rasali"
          },
          {
            id: 2,
            description: "Don't worry mine makes the same noise too haha, listen to mine :)",
            avatar: "../assets/imgs/anime.jpg",
            mediaFiles: ["../assets/imgs/jeep.png"],
            user: "Hansa Asrani"                
          },
          {
            id: 3,
            description: "If this clicking occurs when turning or accelerating, and appears to be coming from the front end, and your car is a front-wheel drive model, I’d suggest you may have a damaged CV (Constant Velocity) joint. Your car has likely one, possibly two each side.",
            avatar: "../assets/imgs/rohaan.jpg",
            mediaFiles: [],
            user: "Rohaan Mistry"                
          },
        ],
          favourites: 22
        },]
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

  //  populatePosts() {
  //   let postArray = [];
  //   this.postService.posts.forEach(element => {
  //     console.log(element)
  //     if (element.postOrigin === 'Grade 5 Piano') {
  //       postArray.push(element);
  //     }
  //   })
  //   console.log('-------------------------------------------------------')
  //   console.log(postArray)
  //   return postArray;
  //  }

  populatePosts() {
    this.subscribedGroups.forEach(element => {
      console.log(element);
    });
    }
  }
