import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "40px", textTransform: "uppercase" };
  // const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza
              pizzas={pizza}
              key={pizza.name}
              // name={pizza.name}
              // ingredients={pizza.ingredients}
              // photoName={pizza.photoName}
              // price={pizza.price}
            />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu, Please check back later</p>
      )}
      {/* <Pizza
        name="Pizza Spincaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Ginghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
      <Pizza /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img alt={props.pizzas.name} src={props.pizzas.photoName} />
      <div>
        <h3>{props.pizzas.name}</h3>
        <p>{props.pizzas.ingredients}</p>
        <span>{props.pizzas.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openingHour = 9;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour <= closingHour;

  // if (hour >= openingHour && hour <= closingHour)
  //   alert("We're currently open for walk-ins");
  // else alert("We're closed");

  return (
    <div>
      <footer className="footer">
        {isOpen ? (
          <div className="order">
            <p>
              We're open until {closingHour}:00. Come visit us or order online
            </p>
            <button className="btn">Order</button>
          </div>
        ) : (
          <p>
            We're happy to welcome you between {openingHour}:00 and{" "}
            {closingHour}:00
          </p>
        )}
        {/* {hour},{" "}
        {hour >= openingHour && hour <= closingHour
          ? "We're currently open for walk-ins"
          : "We're closed"} */}
      </footer>
    </div>
  );
  // return React.createElement(
  //   "footer",
  //   null,
  //   "We're currently open for walk-ins"
  // );
}

//Rendering root in React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before v18
//ReactDOM.render(<App/>, document.getElementById("root"))
