
import React from 'react'

const ImageCard = ({ elem }) => {
  return (
    <a
      href={elem.download_url}
      target="_blank"
      rel="noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-950/40"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={elem.download_url}
          alt={`Photograph by ${elem.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

        <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-md">
          #{elem.id}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-300">
            Photography
          </p>

          <h2 className="mt-1 break-words text-lg font-semibold text-white">
            {elem.author}
          </h2>

          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs text-gray-300">
              View full image
            </p>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 group-hover:bg-purple-600">
              ↗
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ImageCard
