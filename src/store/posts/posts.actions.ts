import { createAsyncThunk } from "@reduxjs/toolkit";
import PostService from "../../services/postService";
import { PostInfo } from "../../types/types";

export const getPost = createAsyncThunk<PostInfo[]>('posts/getAll', async (): Promise<PostInfo[]> => {
    try {
        return await PostService.getPostList()
    } catch (error) {
        return [{ id: 0, userId: 0, title: '', body: '' }]
    }
})
export const getPostByTitle = createAsyncThunk<PostInfo[] | undefined, string>('posts/getByTitle', async (title: string): Promise<PostInfo[]> => {
    try {
        if (title.trim()) {
            return await PostService.getPostByTitle(title)
        } else if (title.length == 0) {
            return await PostService.getPostList()
        } else {
            return [{ id: 0, userId: 0, title: '', body: '' }]
        }
    } catch (error) {
        return [{ id: 0, userId: 0, title: '', body: '' }]
    }


})
export const getPostById = createAsyncThunk<PostInfo, number>('posts/getById', async (id: number): Promise<PostInfo> => {
    try {
        return await PostService.getPostById(id)
    } catch (error) {
        return { id: 0, userId: 0, title: '', body: '' }
    }
})
