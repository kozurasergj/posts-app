import { postsCollectionRef } from '@/firebase/firebase-config'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDocs } from 'firebase/firestore'

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const data = await getDocs(postsCollectionRef)
  const posts = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  return posts
})

export interface PostType {
  id: string
  title: string
  description: string
}

interface PostsState {
  posts: Array<PostType>
}

const initialState: PostType[] = []

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      return [...(action.payload as PostType[])]
    })
  },
})

export const {} = postsSlice.actions
export default postsSlice.reducer
