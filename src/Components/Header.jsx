
import React from 'react'

const Header = ({ totalPhotos, page }) => {
  return (
    <header className="mx-auto mb-10 max-w-7xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-purple-400 sm:text-sm">
        Discover • Explore • Enjoy
      </p>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Beautiful Gallery
            <span className="text-purple-500">.</span>
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-400 sm:text-base">
            Explore amazing photography from around the world.
          </p>
        </div>

        <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
          {totalPhotos} Photos · Page {page}
        </span>
      </div>

      <div className="mt-6 h-px bg-gradient-to-r from-purple-500/70 via-white/10 to-transparent" />
    </header>
  )
}

export default Header
