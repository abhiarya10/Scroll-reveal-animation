import React from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "We must accept finite disappointment, but never lose infinite hope.",
      author: "Martin Luther",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
  ];
  const colors = ["#FECED4", "#EAE5E3", "#CAECEE", "#C1ECB8"];

  return (
    <div className="app-main-body">
      {quotes.map((quote, i) => (
        <Card
          key={i}
          text={quote.text}
          author={quote.author}
          index={i}
          color={colors[i % colors.length]}
        />
      ))}
    </div>
  );
}

export default App;
