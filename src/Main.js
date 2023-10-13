import restaurantfood from "./Images/restaurantfood.jpg"

function main() {
    return (
        <main>
            <section className="hero-container">
                <div className="hero-container-text">
                    <h1>Little Lemon</h1>
                    <p>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
                    </p>
                    <button>Reserve a Table</button>
                </div>
                <img src={restaurantfood} alt="restaurant food"/>
            </section>

            <section className="specials">
                <div className="specials-title">
                    <h2>Specials</h2>
                    <button>Order Online</button>
                </div>
                <div className="specials-container">
                    <div className="specials-card">
                        <h2>Food</h2>
                        <p>description</p>
                        <p>$0.00</p>
                        <img src=""/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default main