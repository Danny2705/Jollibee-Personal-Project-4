import "./Menu.css";

export const Menu = ({ openMenu }) => {
  return (
    <div
      className="menu-container"
      style={{ display: openMenu ? "block" : "none" }}
    >
      <div className="menu-trigger">
        <div class="columns">
          <div class="column">
            <img
              src="https://ca.jollibeefoods.com/cdn/shop/collections/family-bucket-treats.png?v=1625686000&width=80"
              alt="Family Bucket Meals"
            />
            <p>Family Bukets Meals</p>
          </div>
          <div class="column">
            <img
              src="https://ca.jollibeefoods.com/cdn/shop/collections/chicken-sandwich.png?v=1629764519&width=80"
              alt="Chicken Sandwiches"
            />
            <p>Chicken Sandwiches</p>
          </div>
          <div class="column">
            <img
              src="https://ca.jollibeefoods.com/cdn/shop/collections/burgersteak.png?v=1625686581&width=80"
              alt="Burger Steaks"
            />
            <p>Burger Steaks</p>
          </div>
        </div>
        <div className="columns">
          <div class="column">
            <img
              src="https://ca.jollibeefoods.com/cdn/shop/collections/fried-chicken.png?v=1635457853&width=80"
              alt="Fried Chicken"
            />
            <p>Fried Chicken</p>
          </div>
          <div class="column">
            <img
              src="https://ca.jollibeefoods.com/cdn/shop/collections/chicken-tenders.png?v=1630089670&width=80"
              alt="Chicken Tenders"
            />
            <p>Chicken Tenders</p>
          </div>
          <div class="column">
            <img
              src="https://ca.jollibeefoods.com/cdn/shop/collections/side-of-rice_9589292e-c131-4927-91c8-772c68ba41ab.png?v=1629764857&width=80"
              alt="Slides"
            />
            <p>Slides</p>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <img
              src="https://ca.jollibeefoods.com/cdn/shop/collections/jolly-spaghetti.png?v=1625686462&width=80"
              alt="Jolly Spaghetti and Palabok Fiesta"
            />
            <p>Jolly Spaghetti and Palabok Fiesta</p>
          </div>
          <div class="column">
            <img
              src="https://ca.jollibeefoods.com/cdn/shop/collections/yumburger.png?v=1629766141&width=80"
              alt="Burgers"
            />
            <p>Burgers</p>
          </div>
          <div class="column">
            <img
              src="https://ca.jollibeefoods.com/cdn/shop/collections/dessert.png?v=1629764930&width=80"
              alt="Drinks and Desserts"
            />
            <p>Drinks and Desserts</p>
          </div>
        </div>
      </div>
      <button className="Button">
        <a href="">view full menu</a>
      </button>
    </div>
  );
};
