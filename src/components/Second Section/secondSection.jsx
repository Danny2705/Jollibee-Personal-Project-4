import React from 'react'
import './secondSection.css'

function secondSection() {
  return (
    <div className='secondSection'>
      <div className="secondSectionContainer">
          <div className="leftColumn">
            <img src="https://ca.jollibeefoods.com/cdn/shop/files/JB-Coconut-Pineapple-Pie-4x5.jpg?v=1674426455&width=840" alt="Coconut Pineapple" />
          </div>
          
          <div className="rightColumn">
            <h3>AVAILABLE FOR A LIMITED TIME</h3>
            <h2>Coconut Pineapple Pie</h2>
            <p>This delicious combination of two tropical flavors provides a sweet and refreshing taste – perfect to cap off a meal or to be enjoyed on its own!</p>
            <div className="Button">
                <a href="/">
                    START ORDER
                    <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    fill="none"
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="currentColor"
                      d="M41.47 4.986A1.5 1.5 0 0041.31 5H27.5a1.5 1.5 0 100 3h10.379l-15.44 15.44a1.5 1.5 0 102.122 2.12L40 10.122V20.5a1.5 1.5 0 103 0V6.69a1.5 1.5 0 00-1.53-1.704zM12.5 8C8.375 8 5 11.375 5 15.5v20c0 4.125 3.375 7.5 7.5 7.5h20c4.125 0 7.5-3.375 7.5-7.5v-10a1.5 1.5 0 10-3 0v10c0 2.503-1.997 4.5-4.5 4.5h-20A4.477 4.477 0 018 35.5v-20c0-2.503 1.997-4.5 4.5-4.5h10a1.5 1.5 0 100-3h-10z"
                    ></path>
                  </svg>
                </a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default secondSection
