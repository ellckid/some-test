import { createAsyncThunk } from "@reduxjs/toolkit";
import PostService from "../../services/postService";

export const getPost = createAsyncThunk('posts/getAll', async () => {
    return await PostService.getPostList()
})
export const getPostByTitle = createAsyncThunk('posts/getByTitle', async (title: string) => {
    if (title.trim()) {
        return await PostService.getPostByTitle(title)
    } else if (title.length == 0) {
        return await PostService.getPostList()
    }
})
export const getPostById = createAsyncThunk('posts/getById', async (id: number) => {
    return await PostService.getPostById(id)
})
