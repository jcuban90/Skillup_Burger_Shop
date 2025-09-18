// Write all the code here
import Menu from "./Menu"
const Home = () => {

    return (
        <>
            <div className="home">
                <h1>Burger Shop</h1>
                <p>¡Las mejores hamburguesas de la ciudad! Prueba nuestro menú y disfruta de una experiencia única.</p>
            </div>
            <Menu />
            <a id="menu"></a>
        </>
    )
};

export default Home;