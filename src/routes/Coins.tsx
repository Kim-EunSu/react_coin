import "../css/Coins.css";
import Coin from "./Coin";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ReactNode } from "react";

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
];

function Coins() {
  return (
    <main>
      <header id="Header">
        <div className="title">코인</div>
      </header>
      <ul className="coin_list">
        {coins.map((item) => (
          <Coin key={item.id}>
            <Link to={`/${item.id}`}>{item.name} &rarr;</Link>
          </Coin>
        ))}
      </ul>
    </main>
  );
}

export default Coins;
