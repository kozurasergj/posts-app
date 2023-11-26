import { postsCollectionRef } from '@/firebase/firebase-config'
import { useAppDispatch } from '@/hooks/useRedux'
import { addDoc } from 'firebase/firestore'
import { FormEvent, useState } from 'react'

const NewPost = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useAppDispatch()

  const handleAddPost = async (e: FormEvent) => {
    e.preventDefault()

    if (!title && !description) return

    const newPost = {
      title,
      description,
    }

    await addDoc(postsCollectionRef, newPost)

    setTitle('')
    setDescription('')
  }
  return (
    <div className='w-full max-w-xs mx-auto'>
      <form
        className='bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={handleAddPost}
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='Title'
          >
            Title
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            placeholder='Hello World!'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='Description'
          >
            Description
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            placeholder='I am Serhii)'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
            onClick={handleAddPost}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewPost
