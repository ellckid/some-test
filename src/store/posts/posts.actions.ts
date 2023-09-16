import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostInfo } from "../../types/types";
import $api from "../../http";

export const getPost = createAsyncThunk<PostInfo[]>('posts/getAll',
    async (): Promise<PostInfo[]> => {
        try {
            return await $api.get<PostInfo[]>(`/posts`).then(res => res.data)
        } catch (error) {
            return [{ id: 0, userId: 0, title: '', body: '' }]
        }
    })
export const getPostByTitle = createAsyncThunk<PostInfo[], string>('posts/getByTitle', async (title: string): Promise<PostInfo[]> => {
    try {
        if (title.trim()) {
            return await $api.get<PostInfo[]>(`/posts/?title=${title}`).then(res => res.data)
        } else if (title.length == 0) {
            return await $api.get<PostInfo[]>(`/posts`).then(res => res.data)
        } else {
            return [{ id: 0, userId: 0, title: '', body: '' }]
        }
    } catch (error) {
        return [{ id: 0, userId: 0, title: '', body: '' }]
    }


})
export const getPostById = createAsyncThunk<PostInfo, number>('posts/getById', async (id: number): Promise<PostInfo> => {
    try {
        return await $api.get<PostInfo>(`/posts/${id}`).then(res => res.data)
    } catch (error) {
        return { id: 0, userId: 0, title: '', body: '' }
    }
})
