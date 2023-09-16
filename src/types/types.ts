export interface PostInfo {
    userId: number
    id: number
    title: string
    body: string

}

export interface PostLikes {
    postId: number
    likes: number,
    dislikes: number,
    isCliked: "like" | "dislike" | false
}

