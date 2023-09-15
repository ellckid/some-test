export type PostInfo = {
    userId: number
    id: number
    title: string
    body: string
    likes: number,
    dislikes: number,
    isCliked: "like" | "dislike" | false
}


