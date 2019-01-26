import { groupPrivacyOption } from "../enums/groupPrivacyOption";
import { PostInterface } from "./Post";


export interface GroupInterface {
    groupName: string;
    groupDescription: string;
    groupPhoto: string;
    isPrivate: boolean;
    groupPassword: string;
    selectedGroupTags: string[];
    posts: any[];
    

}