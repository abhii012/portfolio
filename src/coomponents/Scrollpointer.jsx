import { useState, useEffect } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/solid' // Optional: or use ↑ emoji

const ScrollToTop = () => {
  const [show, setShow] = useState(false)

  // ✅ Show only after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ Scroll to top on click
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    show && (
      <div
        onClick={scrollToTop}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 p-2 bg-white/20 backdrop-blur-md text-white rounded-full shadow-md cursor-pointer animate-bounce hover:scale-110 transition"
      >
        <ChevronUpIcon className="w-6 h-6 text-white" />
        {/* Or just use: <div className="text-2xl">↑</div> */}
      </div>
    )
  )
}

export default ScrollToTop
