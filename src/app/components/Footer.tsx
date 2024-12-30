import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className="bg-teal-600 text-white py-8 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">Cat Blog</h2>
              <p className="text-lg">Your go-to resource for all things cat-related. Tips, care guides, and more!</p>
            </div>

            <div className="flex space-x-6 mb-4 md:mb-0">
              {/* Social Media Links */}
              <a href="https://facebook.com" className="text-white hover:text-teal-200 transition duration-300">
                Facebook
              </a>
              <a href="https://instagram.com" className="text-white hover:text-teal-200 transition duration-300">
                Instagram
              </a>
              <a href="https://twitter.com" className="text-white hover:text-teal-200 transition duration-300">
                Twitter
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-lg">&copy; {new Date().getFullYear()} Cat Blog. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer