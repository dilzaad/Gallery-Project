
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from './Components/Header'
import Gallery from './Components/Gallery'
import Pagination from './Components/Pagination'
import Footer from './Components/Footer'

const App = () => {
  const [userData, setUserData] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getData = async () => {
    try {
      setLoading(true)
      setError(false)

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=30`
      )

      setUserData(response.data)
    } catch (err) {
      console.error('Error fetching images:', err)
      setError(true)
      setUserData([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [page])

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-[#09090b] px-4 py-8 text-white sm:px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Header
          totalPhotos={userData.length}
          page={page}
        />

        <main>
          <Gallery
            userData={userData}
            loading={loading}
            error={error}
            onRetry={getData}
          />

          {!error && (
            <Pagination
              page={page}
              onNext={handleNext}
              onPrevious={handlePrevious}
              loading={loading}
              hasPictures={userData.length > 0}
            />
          )}
        </main>

        {!loading && !error && userData.length > 0 && <Footer />}
      </div>
    </div>
  )
}

export default App
