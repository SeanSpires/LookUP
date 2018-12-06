import { groupPrivacyOption } from "../enums/groupPrivacyOption";


export interface GroupInterface {
    groupName: string;
    groupDescription: string;
    groupPhoto: string;
    groupPrivacy: groupPrivacyOption;
    groupSubscriptionPrice: string | number;
    selectedGroupTags: string[];
    

}