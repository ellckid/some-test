import { createAsyncThunk } from "@reduxjs/toolkit";
import PostService from "../../services/postService";
import { PostInfo } from "../../types/types";

export const getPost = createAsyncThunk<PostInfo[]>('posts/getAll', async () => {
    return await PostService.getPostList()
})
export const getPostByTitle = createAsyncThunk<PostInfo[] | undefined, string>('posts/getByTitle', async (title: string) => {
    if (title.trim()) {
        return await PostService.getPostByTitle(title)
    } else if (title.length == 0) {
        return await PostService.getPostList()
    }
})
export const getPostById = createAsyncThunk<PostInfo, number>('posts/getById', async (id: number) => {
    return await PostService.getPostById(id)
})
