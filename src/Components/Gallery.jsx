
import React from 'react'
import ImageCard from './ImageCard'

const Gallery = ({ userData, loading, error, onRetry }) => {
  if (loading) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <p className="animate-pulse text-lg text-purple-400">
          Loading beautiful pictures...
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-16 text-center">
        <p className="mb-4 text-gray-400">
          Pictures load nahi ho sakin. Internet check karo.
        </p>

        <button
          onClick={onRetry}
          className="rounded-lg bg-purple-600 px-5 py-2 font-medium text-white transition hover:bg-purple-500"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (userData.length === 0) {
    return (
      <div className="py-16 text-center text-gray-400">
        No pictures found.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {userData.map((elem) => (
        <ImageCard key={elem.id} elem={elem} />
      ))}
    </div>
  )
}

export default Gallery
