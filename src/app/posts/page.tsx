'use client'
import { db } from '@/firebase/firebase-config'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { PostType, getPosts } from '@/redux/slices/postsSlice'
import { deleteDoc, doc } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect } from 'react'
import NewPost from '../components/NewPost'

export default function Posts() {
  const posts = useAppSelector((state) => state.posts)
  const dispatch = useAppDispatch()

  const handleRemovePost = async (postId: string) => {
    const postDoc = doc(db, 'posts', postId)
    await deleteDoc(postDoc)
    window.location.reload()
  }

  useEffect(() => {
    dispatch(getPosts())
  }, [posts])

  return (
    <div>
      <NewPost />
      <div className=' flex flex-col justify-center items-center w-full '>
        {posts && posts.length > 0 ? (
          posts.map((post: PostType) => (
            <div
              key={post.id}
              className='my-5 bg-white shadow-md rounded px-8 pt-6 pb-8 w-[90%] '
            >
              <h3 className='font-bold py-4'>{post.title}</h3>
              <p className='text-gray-700 py-4'>{post.description}</p>
              <button
                className='w-[80px] h-[40px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                onClick={() => handleRemovePost(post.id)}
              >
                Delete
              </button>
              <Link
                href={`/posts/${post.id}`}
                className='w-[80px] h-[40px]  hover:text-blue-700 text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                More
              </Link>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  )
}
