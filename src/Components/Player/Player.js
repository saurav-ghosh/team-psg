import React from "react";
import "./Player.css";

const Player = (props) => {
    const { img, name, salary, title, country } = props.data;

    return (
        <div className="playerCard">
            <div className="image">
                <img src={img} alt="player img" />
            </div>
            <div className="info">
                <h2>{name}</h2>
                <p>Title: {title}</p>
                <p>Country: {country}</p>
                <p>Salary: {salary}$</p>
                <div className="buttonContainer">
                    <button
                        className="buyBtn"
                        onClick={() => props.handleAddToCart(props.data)}
                        type="submit"
                    >
                        Buy
                    </button>
                    <button
                        className="cancelBtn"
                        onClick={() => props.handleCancel(props.data)}
                        type="submit"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;
