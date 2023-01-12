import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Coins.css";
import Coin from "./Coin";

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

  // const getCoins = async () => {
  //   const res = await axios("https://api.coinpaprika.com/v1/coins");
  //   setCoins(res.data.slice(0, 100));
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getCoins();
  // }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <main>
      <header id="Header">
        <div className="title">Coins</div>
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="coin_list">
          {coins.map((item) => (
            <li key={item.id}>
              <Link to={`/${item.id}`} state={{ name: item.name }}>
                <div className="coin_wrapper">
                  <img
                    src={`https://coinicons-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`}
                  ></img>
                  {item.name + " ->"}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Coins;
