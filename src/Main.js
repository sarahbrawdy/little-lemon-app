import restaurantfood from "./Images/restaurantfood.jpg";
import greeksalad from "./Images/greeksalad.jpg";
import lemondessert from "./Images/lemondessert.jpg";
import bruchetta from "./Images/bruchetta.svg"

function main() {
    return (
        <main>
            <section className="hero-container">
                <div className="hero-container-text">
                    <h1>Little Lemon</h1>
                    <p>
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button>Reserve a Table</button>
                </div>
                <img src={restaurantfood} alt="restaurant food"/>
            </section>

            <section className="specials">
                <div className="specials-title">
                    <h2>This week's specials!</h2>
                    <button>Order Online</button>
                </div>
                <div className="specials-container">
                    <div className="specials-card">
                        <img src={greeksalad} alt="greek salad"/>
                        <h2>Greek Salad</h2>
                        <p>$12.99</p>
                        <p>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <a href="#">Order a Delivery</a>
                    </div>
                    <div className="specials-card">
                        <img src={bruchetta} alt="bruschetta"/>
                        <h2>Bruschetta</h2>
                        <p>$5.99</p>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.
                        </p>  
                        <a href="#">Order a Delivery</a>
                    </div>
                    <div className="specials-card">
                        <img src={lemondessert} alt="lemon dessert"/>
                        <h2>Lemon Dessert</h2>
                        <p>$5.00</p>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        <a href="#">Order a Delivery</a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default main