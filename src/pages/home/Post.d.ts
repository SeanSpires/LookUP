import { UserInterface } from "./User";


export interface PostInterface {
    id: number;
    title: string;
    date: string;
    mediaFiles: string[]; // URI or Base64 Encoded
    user: string;
    comments: string[];
    favourites: number;

}