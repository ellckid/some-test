import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PostInfo, PostLikes } from "../../types/types";
import { getPost, getPostByTitle, getPostById } from "./posts.actions";

const initialState: {
    isLoading: boolean,
    bigPost: PostInfo,
    smallPosts: PostInfo[],
    postLikes: PostLikes[]
} = {
    isLoading: false,
    bigPost: {
        id: 0,
        userId: 0,
        title: '',
        body: ''
    },
    smallPosts: [],
    postLikes: []
}

function getRandomLikes() {
    return Math.floor(Math.random() * 50 + 1)
}

function setPosts(data: PostInfo[] | undefined) {
    if (data) {
        const bigPost = data.filter((el) => data.indexOf(el) === 0)[0]
        const smallPosts = data.filter((el) => data.indexOf(el) !== 0)
        return { bigPost, smallPosts }
    }
}
function setPostLikes(data: PostInfo[]) {
    if (data) {
        const likes: PostLikes[] = []
        data.forEach((el) => {
            likes.push({
                postId: el.id,
                likes: getRandomLikes(),
                dislikes: getRandomLikes(),
                isCliked: false
            })
        })
        return likes
    }
}

export interface falseParams {
    id: number
    type: 'like' | 'dislike'
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPostStat: (state, { payload: param }: PayloadAction<falseParams>) => {
            const post = state.postLikes.find(el => el.postId === param.id)
            if (post) {
                if (param.type != post.isCliked) {
                    if (post.isCliked === 'like') {
                        post.likes -= 1
                        post.dislikes += 1
                        post.isCliked = "dislike"
                        console.log('dislike pressed while like')
                    }
                    else if (post.isCliked === 'dislike') {
                        post.dislikes -= 1
                        post.likes += 1
                        post.isCliked = 'like'
                        console.log('like pressed while dislike')
                    }
                    else if (post.isCliked === false && param.type === 'like') {
                        post.likes += 1
                        post.isCliked = 'like'
                        console.log('like pressed ')
                    }
                    else if (post.isCliked === false && param.type === 'dislike') {
                        post.dislikes += 1
                        post.isCliked = 'dislike'
                        console.log('dislike pressed ')
                    }
                } else {
                    if (post.isCliked === 'like') {
                        post.likes -= 1
                        post.isCliked = false
                    }
                    if (post.isCliked === 'dislike') {
                        post.dislikes -= 1
                        post.isCliked = false
                    }
                }
            }
        },
        setPostLikes: ((state) => {
            const temp: PostInfo[] = []
            const temp2 = setPostLikes(temp.concat(state.smallPosts, state.bigPost))
            if (temp2)
                state.postLikes = temp2
        })


    },
    extraReducers: builder => {

        // pending
        builder.addCase(getPost.pending, state => {
            state.isLoading = true
        })
        builder.addCase(getPostByTitle.pending, state => {
            state.isLoading = true
        })
        builder.addCase(getPostById.pending, state => {
            state.isLoading = true
        })

        // fullfilled
        builder.addCase(getPost.fulfilled, (state, action) => {
            state.isLoading = false

            const temp = setPosts(action.payload)
            if (temp) {
                state.bigPost = temp.bigPost
                state.smallPosts = temp.smallPosts
            }

            const temp2 = setPostLikes(action.payload)
            if (temp2) {
                state.postLikes = temp2
            }

        })
        builder.addCase(getPostByTitle.fulfilled, (state, action) => {
            state.isLoading = false
            const temp = setPosts(action.payload)
            if (temp) {
                state.bigPost = temp.bigPost
                state.smallPosts = temp.smallPosts
            }
        })
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.isLoading = false
            if (action.payload) {
                state.bigPost = action.payload
            }
            const temp2 = setPostLikes([action.payload])
            if (temp2) {
                state.postLikes = temp2
            }
        })

        // rejected
        builder.addCase(getPost.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(getPostByTitle.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(getPostById.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export const { actions, reducer } = postsSlice
