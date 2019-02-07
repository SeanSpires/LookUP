
export interface CommentInterface {
    id: string | number;
    description: string;
    avatar: string,
    videoThumbnail: String,
    videoUrl: string
    mediaFiles: string[] | undefined; 
    user: string;
}