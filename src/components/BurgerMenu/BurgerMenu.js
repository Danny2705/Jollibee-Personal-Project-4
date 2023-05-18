import "./BurgerMenu.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="NavBurger">
      <div class="burgerMenuContainer">
        <button className="burgerButton" onClick={toggleMenu}>
          <FaBars className="burgerIcons" />
        </button>

        <div className="burgerContainer" open = {open} onClick={() => setOpen}>
          <ul>
            <FaTimes className="burgerIcons" />
            <li className="Navbar">
              <span className="LeftSide">
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
                    d="M23.977 3.979a1.5 1.5 0 0 0-.258.029C12.82 4.16 4 13.066 4 24c0 10.938 8.827 19.849 19.73 19.994a1.5 1.5 0 0 0 .55-.002C35.177 43.842 44 34.934 44 24c0-10.936-8.824-19.846-19.725-19.994a1.5 1.5 0 0 0-.298-.027zM22.5 7.354V16h-5.398c.426-1.6.886-3.171 1.515-4.396 1.153-2.245 2.517-3.647 3.883-4.25zm3 0c1.366.603 2.73 2.005 3.883 4.25.629 1.225 1.09 2.796 1.515 4.396H25.5V7.354zM16.965 8.53a16.582 16.582 0 0 0-1.018 1.701c-.858 1.672-1.505 3.654-2.004 5.768H8.996a17 17 0 0 1 7.969-7.469zm14.068 0A16.999 16.999 0 0 1 39.003 16h-4.946c-.499-2.114-1.146-4.096-2.004-5.768a16.57 16.57 0 0 0-1.02-1.7zM7.748 19h5.768c-.23 1.633-.516 3.232-.516 5 0 1.768.287 3.367.516 5H7.748a17.056 17.056 0 0 1 0-10zm8.773 0H22.5v10h-5.979c-.25-1.612-.521-3.22-.521-5 0-1.78.271-3.388.521-5zm8.979 0h5.979c.25 1.612.521 3.22.521 5 0 1.78-.271 3.388-.521 5H25.5V19zm8.984 0h5.768a17.056 17.056 0 0 1 0 10h-5.768c.23-1.633.516-3.232.516-5 0-1.768-.287-3.367-.516-5zM8.996 32h4.947c.499 2.114 1.146 4.096 2.004 5.768.311.605.658 1.164 1.02 1.7A16.999 16.999 0 0 1 8.997 32zm8.106 0H22.5v8.646c-1.366-.603-2.73-2.005-3.883-4.25-.629-1.225-1.09-2.796-1.515-4.396zm8.398 0h5.398c-.426 1.6-.886 3.171-1.515 4.396-1.153 2.245-2.517 3.647-3.883 4.25V32zm8.557 0h4.947a17 17 0 0 1-7.969 7.469c.362-.536.707-1.097 1.018-1.701.858-1.672 1.505-3.654 2.004-5.768z"
                  ></path>
                </svg>
                <div className="LeftSideContent">Jollibee Canada</div>
              </span>
            </li>
            <li>
              <span>
                Menu
                <svg
                  class="w-3 h-3"
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
                    fill="#E31837"
                    d="M43.486 11.979a1.5 1.5 0 00-1.047.46L24 30.88 5.56 12.439a1.5 1.5 0 00-1.076-.455 1.5 1.5 0 00-1.045 2.577l19.5 19.5a1.5 1.5 0 002.122 0l19.5-19.5a1.5 1.5 0 00-1.075-2.582z"
                  ></path>
                </svg>
              </span>
            </li>
            <li>
              <span>Locations</span>
            </li>
            <li>
              <span>Coupons & Deals</span>
            </li>
            <li>
              <span>Abour Us</span>
            </li>
            <li>
              <span>Buzz Room</span>
            </li>
            <li>
              <span>Careers</span>
            </li>
            <li>
              <span>FAQ</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
