import React from 'react'
import "./ThirdSection.css"

function ThirdSection() {
  return (
    <div className="third-section">
      <div className="firstSection">
        <div className="firstSectionContainer">
          <div className="LeftContent">
            <h1>Jollibee is your local fast food restaurant</h1>
            <p>
            Welcome to Jollibee - one of the jolliest fast food restaurants on earth. Our menu offers many of your favorite comfort foods including <span>fried chicken</span>, French fries, pies, spaghetti, burgers, and more but with a <span>Filipino</span> twist. What’s the twist? Lots of Joy with some Filipino sweetness. We believe that joyful food makes joyful people. It also helped us to grow to be the biggest <span>fast food</span> chains in the Philippines. Try our world famous Jolly Crispy chicken or our Chickenwich sandwich and you’ll understand why they bring so many people joy. So bring your family and your friends - There is nothing like eating food with joyfulness with the ones you love.
            </p>
          </div>
          <div className="RightContent">
            <img
              src="https://ca.jollibeefoods.com/cdn/shop/files/29351737_2152446668377854_356570745477300982_o_2152446668377854.jpg?v=1634843436&width=840"
              alt="Jollibee Fried Chicken"
              width="508.9px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdSection
