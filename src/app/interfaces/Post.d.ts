import { CommentInterface } from "./Comment";

export interface PostInterface {
    id: string | number;
    desc: string;
    date: Date | String;
    avatar: String,
    postOrigin: String,
    mediaFiles: string[]; // URI or Base64 Encoded
    videoThumbnail: String | null;
    videoURL: String | null;
    user: string;
    comments: CommentInterface[];
    favourites: number;

}