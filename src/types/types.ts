export type PostInfo = {
    userId: number
    id: number
    title: string
    body: string
    likes: number | undefined,
    dislikes: number | undefined
    isCliked: "like" | "dislike"
}


