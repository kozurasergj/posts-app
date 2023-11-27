import { postsCollectionRef } from '@/firebase/firebase-config'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDocs } from 'firebase/firestore'

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  try {
    const data = await getDocs(postsCollectionRef)
    const posts = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    return posts
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error adding post:', error.message)
      throw error
    } else {
      console.error('Non-Error object thrown:', error)
      throw error
    }
  }
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
