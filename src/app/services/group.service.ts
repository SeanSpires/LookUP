import { Injectable } from "@angular/core";
import { GroupInterface } from "../interfaces/Group";
import { groupPrivacyOption } from "../enums/groupPrivacyOption";

@Injectable()
export class GroupService {

  constructor() {

   }

   subscribedGroups: GroupInterface[] = [
    {
        groupName: "Grade 5 Piano",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/cartoonPiano.jpg",
        groupPrivacy: groupPrivacyOption.Public,
        groupSubscriptionPrice: 0,
        selectedGroupTags: ["Music","Other"]

    },
    
    {
        groupName: "Grade 5 Piano",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/cartoonPiano.jpg",
        groupPrivacy: groupPrivacyOption.Public,
        groupSubscriptionPrice: 0,
        selectedGroupTags: ["Music","Other"]
    },    

    {
        groupName: "Grade 5 Piano",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/cartoonPiano.jpg",
        groupPrivacy: groupPrivacyOption.Public,
        groupSubscriptionPrice: 0,
        selectedGroupTags: ["Music","Other"]
    }    
   ]

   recommendedGroups: GroupInterface[] = [
    {
        groupName: "Grade 5 Piano",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/defaultGroupIcon.png",
        groupPrivacy: groupPrivacyOption.Public,
        groupSubscriptionPrice: 0,
        selectedGroupTags: ["Music","Other"]

    },
    
    {
        groupName: "Grade 5 Piano",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/cartoonPiano.jpg",
        groupPrivacy: groupPrivacyOption.Public,
        groupSubscriptionPrice: 0,
        selectedGroupTags: ["Music","Other"]
    },    

    {
        groupName: "Grade 5 Piano",
        groupDescription: "A group meant for grade 5 pianists to learn and help each other",
        groupPhoto: "../assets/imgs/cartoonPiano.jpg",
        groupPrivacy: groupPrivacyOption.Public,
        groupSubscriptionPrice: 0,
        selectedGroupTags: ["Music","Other"]
    }    
   ]

   
   



}