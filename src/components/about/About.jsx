// Write all the code here
import founder from '../../assets/skj.jpg'
const About = () => {
    return (<div className="about">
        <main>
            <h1>Burger</h1>
            <article>
                <h4>Who Are We?</h4>
                <p>We are Burger Shop, a passionate burger restaurant dedicated to delivering the best flavors and a unique experience to every customer. Our commitment is quality and freshness in every bite.</p>
            </article>
            <div>
                <h2>Our Story</h2>
                <article>
                    <div>
                        <img src={founder} alt="Founder" />
                        <h3>Test</h3>
                    </div>
                    <p>Since 2020, we have worked hard to become the favorite spot for burger lovers. Every recipe is the result of years of refinement and a true love for cooking.</p>
                </article>
            </div>
        </main>
    </div>)
};

export default About;
