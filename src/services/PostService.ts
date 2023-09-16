import $api from "../http";
import { PostInfo } from "../types/types";

export default class PostService {
    static async getPostList() {
        return $api.get<PostInfo[]>(`/posts`).then(res => res.data)
    }
    static async getPostByTitle(title: string) {
        return $api.get<PostInfo[]>(`/posts/?title=${title}`).then(res => res.data)
    }
    static async getPostById(id: number) {
        return $api.get<PostInfo>(`/posts/${id}`).then(res => res.data)
    }
}
