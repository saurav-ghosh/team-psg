import React, { useState } from "react";
import playerData from "../../playerData/playerData.json";
import Player from "../Player/Player";
import PlayerBought from "../PlayerBought/PlayerBought";
import "./Players.css";

const Players = () => {
    const [cart, setCart] = useState([]);

    const filteredPlayers = cart.filter(
        (player, index) => cart.indexOf(player) === index
    );

    const handleAddToCart = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    };

    const handleCancel = (player) => {
        const newCart = cart.filter((crt) => crt.id !== player.id);
        setCart(newCart);
    };

    return (
        <div className="main">
            <div className="playerContainer">
                {playerData.map((data) => (
                    <Player
                        handleAddToCart={handleAddToCart}
                        handleCancel={handleCancel}
                        key={data.id}
                        data={data}
                    ></Player>
                ))}
            </div>
            <div>
                <PlayerBought filteredPlayers={filteredPlayers}></PlayerBought>
            </div>
        </div>
    );
};

export default Players;
