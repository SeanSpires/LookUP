
export interface CommentInterface {
    id: string | number;
    description: string;
    avatar: String,
    mediaFiles: string[] | undefined; 
    user: string;
}