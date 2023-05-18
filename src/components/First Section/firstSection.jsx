import React from "react";
import "../First Section/firstSection.css";

function firstSection() {
  return (
    <div className="firstSection">
      <div className="firstSectionContainer">
        <div className="LeftContent">
          <h1>Spicy Jolly Crispy Chicken</h1>
          <h2>Next-level spicy to the bone!</h2>
          <p>
            Next-level crispy and juicy, now with just the right amount of heat.
            Try it today!
          </p>
          <div className="Button">
            <a href="/">
              Order Now
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
        <div className="RightContent">
          <img
            src="https://ca.jollibeefoods.com/cdn/shop/files/SpicyCJ_Bucket-UnCropped_500x500_e92f6cf8-7e31-4fef-80b2-f75fd7c0673d.png?v=1677053700&width=480"
            alt="Jollibee Chicken"
            width="538px"
          />
        </div>
      </div>
    </div>
  );
}

export default firstSection;
