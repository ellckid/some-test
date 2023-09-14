// libraries
import { makeAutoObservable } from "mobx";
// service
import { PostInfo } from "../types/types";
import PostService from "../services/PostService";



export default class Store {
    posts: PostInfo[] = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }
    setPosts(posts: PostInfo[]) {
        this.posts = posts;
    }
    setLoading(bool: boolean) {
        this.isLoading = bool;
    }


    async getPostList() {
        this.setLoading(true);
        try {
            const response = (await PostService.getPostList())
            console.log(response)
            this.setPosts(response)
            return response
        } catch (e) {
            console.log(e)
        }
        finally {
            this.setLoading(false)
        }
    }

    async getPostByTitle(title: string) {
        this.setLoading(true);
        try {
            const response = (await PostService.getPostByTitle(title))
            console.log(response)
            this.setPosts(response)
            return response
        } catch (e) {
            console.log(e)
        }
        finally {
            this.setLoading(false)
        }
    }
}

