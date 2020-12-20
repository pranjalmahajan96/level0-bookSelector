import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Biographies: [
    {
      name: "Benjamin Franklin"
    },
    {
      name: "Steve Jobs"
    },
    {
      name: "I am Malala"
    },
    {
      name: "Long walk to Freedom"
    },
    {
      name:
        "Unbroken: A world war II story of survival, resilience and redemption"
    }
  ],

  Fiction: [
    {
      name: "A town like ALICE"
    },
    {
      name: "The Alchemist"
    },
    {
      name: "All the light we cannot see"
    },
    {
      name: "The Fault in our Stars"
    },
    {
      name: "Gone with the Wind"
    }
  ],
  Communication: [
    {
      name: "How to win friends and influence people"
    },
    {
      name: "Why some ideas survive and others die"
    },
    {
      name: "What we should know about the people we don't know"
    },
    {
      name: "Tools for taking when stakes are high"
    },
    {
      name: "Talk like TED"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Communication");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Books to make you Smart! 📖 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Start your book reading journey with some of the selceted books picked
        for you!{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
