import React from "react";
import "./PlayerBought.css";

const PlayerBought = (props) => {
    const boughtPlayers = props.filteredPlayers;

    const totalCost = boughtPlayers.reduce(
        (sum, player) => sum + player.salary,
        0
    );

    return (
        <div className="playerBoughtContainer">
            <h2>Player Bought : {boughtPlayers.length}</h2>
            <hr />
            <div className="playersList">
                {boughtPlayers.map((player) => (
                    <p key={player.id}>✔ {player.name}</p>
                ))}
            </div>
            <hr />
            <h2 className="totalCost">Total Cost: {totalCost}$</h2>
        </div>
    );
};

export default PlayerBought;
