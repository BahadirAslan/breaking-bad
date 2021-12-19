import React, { useEffect, useState } from "react";
import "./character.css";

const CharacterPage = ({ characterId }) => {
  const [character, setCharacter] = useState({});
  const [quotes, setQuotes] = useState([]);

  console.log(characterId);
  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters${characterId}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data[0]));
  }, []);

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/quote?author=${character.name}`)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  }, [character]);

  console.log("quotes", quotes);
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
      <div className="container">
        <div className="character-wrapper">
          <img height={500} src={character.img} />
          <div className="body-wrapper">
            <div className="character-title">{character.name}</div>
            <div className="character-body">
              <p className="body-text">Date of Birth: {character.birthday}</p>
              <p className="body-text">
                Occupation: {character?.occupation?.join(",")}
              </p>
              <p className="body-text">Status: {character.status}</p>
              <p className="body-text">Nickname: {character.nickname}</p>
              <p className="body-text">Portrayed By: {character.portrayed}</p>
              <p className="body-text">
                Appearance(Season): {character?.appearance?.join(",")}
              </p>
            </div>
          </div>
        </div>
        <div className="character-detail">
          <p className="quote-title">Quotes By {character.name}</p>
          {quotes && quotes.map((quote) => <p>{quote.quote}</p>)}
        </div>
      </div>
    </>
  );
};

export default CharacterPage;
