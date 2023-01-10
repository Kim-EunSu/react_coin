import { useNavigate } from "react-router-dom";
import "../css/Coins.css";

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
  const navigate = useNavigate();
  return (
    <main>
      <header id="Header">
        <div className="title">코인</div>
      </header>
      <ul className="coin_list">
        {coins.map((item) => (
          <li
            onClick={() => {
              navigate(`/${item.id}`);
            }}
          >
            {item.name} &rarr;
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Coins;
