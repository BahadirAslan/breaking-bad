/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./card.css";

const Card = ({character}) => {
    
    return (
        <div className="card">
            <div className="card-header">
                <a href={`https://boring-borg-b9fca6.netlify.app/${character.char_id}`} className="header-text">{character.name}</a>
                <a href={`https://boring-borg-b9fca6.netlify.app/${character.char_id}`}>
                    <img height={20} src="data:image/png;base64,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"></img>
                </a>
            </div>
            <div className="card-body">
                <p className="body-text">Status: {character.status}</p>
                <p className="body-text">Occupaiton: {character.occupation.join(",")}</p>
                <p className="body-text">Date of Birth: {character.birthday}</p>
            </div>
        </div>
    );
};

export default Card;