// import React from 'react'
// import sareeImage from '../images/header.png';

// function Banner() {
//   return (
//   <>
//    <div className="relative bg-blue-50 h-96 flex items-center mt-48">
//         {/* Left Side Content */}
//         <div className="ml-32 z-10">
//           <div className="bg-blue-600 text-white text-sm px-3 py-1 inline-block rounded-sm mb-4">
//             EXTRA 55% OFF IN SPRING SALE
//           </div>
//           <h1 className="text-5xl font-bold text-blue-700 leading-tight">
//             Discover & Shop
//           </h1>
//           <h2 className="text-3xl text-gray-800 mt-2">The New Trend</h2>
//           <button className="mt-6 bg-black text-white px-6 py-3 font-semibold rounded-sm">
//             SHOP NOW
//           </button>
//         </div>

//         {/* Right Side Image */}
//         <div className="relative md:absolute md:bottom-0 md:right-28 w-full md:w-auto">
//           <img
//             src={sareeImage}
//             alt="Saree"
//             style={{ height: '600px', width: 'auto' }}  
//             className="object-contain"
//           />
//         </div>
//       </div>
//   </>
//   )
// }

// export default Banner



import React from 'react'
import sareeImage from '../images/header.png';

function Banner() {
  return (
    <div className="relative bg-blue-50 flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 xl:px-24">
      {/* Left Side Content */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0 px-4 md:px-0 md:relative md:top-[-10%] py-1">
        <div className="bg-blue-600 text-white text-xs md:text-sm lg:text-base px-3 py-1 inline-block rounded-sm mb-4">
          EXTRA 55% OFF IN SPRING SALE
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-700 leading-tight">
          Discover & Shop
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-gray-800 mt-2">
          The New Trend
        </h2>
        <button className="mt-4 md:mt-6 lg:mt-8 xl:mt-10 bg-black text-white px-4 md:px-6 lg:px-8 xl:px-10 py-2 md:py-3 lg:py-4 xl:py-5 font-semibold rounded-sm">
          SHOP NOW
        </button>
      </div>

      {/* Right Side Image */}
      <div className="relative w-full md:w-auto flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          src={sareeImage}
          alt="Saree"
          className="object-contain w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
          style={{ maxHeight: '600px' }}
        />
      </div>
    </div>
  )
}

export default Banner






