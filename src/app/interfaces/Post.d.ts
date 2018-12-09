import { UserInterface } from "../../pages/home/User";
import { CommentInterface } from "./Comment";


export interface PostInterface {
    id: string | number;
    desc: string;
    date: string;
    avatar: String,
    postOrigin: String,
    mediaFiles: string[]; // URI or Base64 Encoded
    user: string;
    comments: CommentInterface[];
    favourites: number;

}