import { UserInterface } from "./User";


export interface PostInterface {
    id: number;
    desc: string;
    date: string;
    avatar: String,
    userQuote: String,
    mediaFiles: string[]; // URI or Base64 Encoded
    user: string;
    comments: number;
    favourites: number;

}