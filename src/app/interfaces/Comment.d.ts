
export interface CommentInterface {
    id: string | number;
    description: string;
    avatar: string,
    videoThumbnail: String,
    videoURL: string
    mediaFiles: string[] | undefined; 
    user: string;
}