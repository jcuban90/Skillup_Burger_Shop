import MenuCard from "./MenuCard"

import img1 from '../../assets/burger1.png'
import img2 from '../../assets/burger2.png'
import img3 from '../../assets/burger3.png'

const burgers = [
    {
        src: img1,
        price: 250,
        title: "Cheese Burger"
    },
    {
        src: img2,
        price: 300,
        title: "Veggie Burger"
    },
    {
        src: img3,
        price: 350,
        title: "Double Burger"
    }
];

// Write all the code here
const Menu = () => {

    const addToCartHandler = (id) => {
        console.log(id);
    }
    return (
        <div id="menu">
            <h1>Menu</h1>
            <div>
                {
                    burgers.map((burger, index) => (
                        <MenuCard key={index} itemNum={index} burgerSrc={burger.src} price={burger.price} title={burger.title} handler={addToCartHandler} delay={index * 0.1} />
                    ))
                }
            </div>
        </div>
    );
};

export default Menu;