import $api from "../http";
import { PostInfo } from "../types/types";

export default class PostService {
    static async getPostList() {
        return $api.get<PostInfo[]>('/posts').then(res => res.data)
    }
    static async getPostByTitle(title: string) {
        const params = {
            "title": title
        }

        return $api.get<PostInfo[]>(`/posts/`, { params }).then(res => res.data)
    }
    static async getPost(id: string) {
        return $api.get<PostInfo>(`/posts/${id}`,).then(res => res.data)
    }
}



