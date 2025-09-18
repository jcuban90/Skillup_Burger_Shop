import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
// import burger3 here

const burguers = [
  {
    id: 1,
    src: burger1,
    price: 250,
    title: "Cheese Burger",
    value: 0
  },
  {
    id: 2,
    src: burger2,
    price: 300,
    title: "Veggie Burger",
    value: 0
  },
  {
    id: 3,
    src: burger3,
    price: 350,
    title: "Double Burger",
    value: 0
  }
];

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [cartBurgues, setCartBurgers] = useState(burguers);
  const [subTotal, setSubTotal] = useState(0);
  
  const increment = (item) => {

    setCartBurgers(prev =>
      prev.map(burger =>
        burger.id === item.id
          ? { ...burger, value: burger.value + 1 }
          : burger
      )
    );
  };

  const decrement = (item) => {
    setCartBurgers(prev =>
      prev.map(burger =>
        burger.id === item.id
          ? { ...burger, value: burger.value + 1 }
          : burger
      )
    );
   };

  return (
    <section className="cart">
      <main>
        {
          setCartBurgers.map((burger, index) => (
            <CartItem
              title={"Cheese Burger"}
              img={burger.src}
              value={burger.value}
              increment={(burger) => increment(burger)}
              decrement={(burger) => decrement(burger)}
              key={burger}
            />
          ))
        }


        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
