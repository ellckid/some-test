import $api from "../http";
import { PostInfo } from "../types/types";

export default class PostService {
    static async getPostList() {
        return $api.get<Array<PostInfo>>('/posts').then(res => res.data)
    }
    static async getPost(id: string | undefined) {
        const params = { id }
        return $api.get<PostInfo>(`/posts/${id}`,).then(res => res.data)
    }
}



