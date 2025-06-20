import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const pizzaData = [
    {
        name: 'Focaccia',
        ingredients: 'Bread with italian olive oil and rosemary',
        price: 6,
        photoName: 'pizzas/focaccia.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Margherita',
        ingredients: 'Tomato and mozarella',
        price: 10,
        photoName: 'pizzas/margherita.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Spinaci',
        ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
        price: 12,
        photoName: 'pizzas/spinaci.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Funghi',
        ingredients: 'Tomato, mozarella, mushrooms, and onion',
        price: 12,
        photoName: 'pizzas/funghi.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Salamino',
        ingredients: 'Tomato, mozarella, and pepperoni',
        price: 15,
        photoName: 'pizzas/salamino.jpg',
        soldOut: true,
    },
    {
        name: 'Pizza Prosciutto',
        ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
        price: 18,
        photoName: 'pizzas/prosciutto.jpg',
        soldOut: false,
    },
]

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

function Menu() {
    const pizzas = pizzaData

    return (
        <main className="menu">
            <h2>Our menu</h2>

            {pizzas.length > 0 ? (
                <>
                    <p>Authentic Italian cuisune</p>
                    <ul className="pizzas">
                        {pizzas.map(pizza => (
                            <Pizza pizzaObject={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We're still working pn our menu. Please come back later</p>
            )}
        </main>
    )
}

function Pizza({ pizzaObject }) {
    // if (pizzaObject.soldOut) return null

    return (
        <li className={`pizza ${pizzaObject.soldOut && 'sold-out'}`}>
            <img src={pizzaObject.photoName} alt={pizzaObject.name} />
            <div>
                <h3>{pizzaObject.name}</h3>
                <p>{pizzaObject.ingredients}</p>
                <span>{pizzaObject.soldOut ? 'SOLD OUT' : pizzaObject.price}</span>
            </div>
        </li>
    )
}

function Footer() {
    const hour = new Date().getHours()
    const openHour = 12
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour

    // if (hour >= openHour && hour <= closeHour) alert("We're currently open")
    // else alert("Sorry we're closed")

    if (!isOpen)
        return (
            <p>
                We're happy to welcome you between {openHour}:00 and {closeHour}:00.
            </p>
        )

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                </p>
            )}
        </footer>
    )
    // return React.createElement('footer', null, "We're currently open!")
}

const Order = function ({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>
                We're open from {openHour}:00 until {closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
