'use client'
import { useAppSelector } from '@/hooks/useRedux'

export default function Post({ params }: { params: { id: string } }) {
  const posts = useAppSelector((state) => state.posts)
  const post = posts.find((p) => p.id === params.id)

  if (!post) {
    return <p>No data(</p>
  }

  console.log(posts)
  return (
    <section>
      {post && (
        <div className='p-5 mx-auto'>
          <div className='text-gray-900 font-bold text-xl mb-2 text-center'>
            {post.title}
          </div>
          <p className='text-gray-700 text-base text-center'>
            {post.description}
          </p>
        </div>
      )}
    </section>
  )
}
