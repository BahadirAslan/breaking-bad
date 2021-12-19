import React, { useEffect, useState } from "react";
import Card from "./card";
import "./mainpage.css";

const Mainpage = () => {
  const [characters, setCharacters] = useState([]);
  const [inputValue, setInput] = useState("");

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, []);

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${inputValue}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, [inputValue]);

  return (
    <>
      <header className="header">
        <div>
          <img
            height={50}
            width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1024px-Breaking_Bad_logo.svg.png"
          ></img>
          <a href="http://localhost:3000">
          <img
            height={30}
            width={30}
            src="data:image/png;base64,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"
          />
          </a>
        </div>
      </header>
      <body>
        <div className="container">
          <div className="search">
            <div className="searchWrapper">
              <input onChange={e => setInput(e.target.value)} className="inputArea"></input>
              <button>
                <img
                  height={20}
                  src="data:image/png;base64,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"
                ></img>
              </button>
              <button className="filterButton">
                <img
                  height={20}
                  src="data:image/png;base64,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"
                ></img>
              </button>
            </div>
          </div>
          <div className="card-wrapper">
            {characters.map((character) => (
              <Card character={character} />
            ))}
          </div>
        </div>
      </body>
    </>
  );
};

export default Mainpage;
