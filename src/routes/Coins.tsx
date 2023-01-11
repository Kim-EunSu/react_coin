import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Coins.css";
import Coin from "./Coin";
import axios from "axios";

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const getCoins = async () => {
    const res = await axios("https://api.coinpaprika.com/v1/coins");
    setCoins(res.data.slice(0, 100));
    setLoading(false);
  };
  console.log(coins);

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <main>
      <header id="Header">
        <div className="title">코인</div>
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="coin_list">
          {coins.map((item) => (
            <li key={item.id}>
              <Coin>
                <Link to={`/${item.id}`}>{item.name + " ->"}</Link>
              </Coin>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Coins;
