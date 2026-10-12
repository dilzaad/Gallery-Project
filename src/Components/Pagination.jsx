
import React from 'react'

const Pagination = ({
  page,
  onNext,
  onPrevious,
  loading,
  hasPictures
}) => {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <button
        onClick={onPrevious}
        disabled={page === 1 || loading}
        className="rounded-xl border border-white/10 bg-zinc-800 px-6 py-3 font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Previous
      </button>

      <span className="rounded-lg border border-purple-500/30 bg-purple-500/10 px-5 py-3 text-sm font-medium text-purple-300">
        Page {page}
      </span>

      <button
        onClick={onNext}
        disabled={loading || !hasPictures}
        className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next →
      </button>
    </div>
  )
}

export default Pagination
