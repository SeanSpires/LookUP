import { groupPrivacyOption } from "../enums/groupPrivacyOption";
import { PostInterface } from "./Post";


export interface GroupInterface {
    groupName: string;
    groupDescription: string;
    groupPhoto: string;
    groupPrivacy: groupPrivacyOption;
    groupSubscriptionPrice: string | number;
    selectedGroupTags: string[];
    posts: PostInterface[];
    

}