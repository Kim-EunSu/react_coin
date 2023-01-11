import { ReactNode, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../css/Coins.css";
import "../css/Coin.css";

interface RouterParams {
  coinId: string;
}

interface Props {
  children?: ReactNode;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: object;
  links_extended: object;
  whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin(props: Props) {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<"coinId">();

  const [info, setInfo] = useState<InfoData>();
  const [price, setPriceInfo] = useState<PriceData>();

  const { state } = useLocation();

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, [coinId]);

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //     ).json();
  //     const priceData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId} `)
  //     ).json();

  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, [coinId]);

  return (
    <>
      <h1> {props.children}</h1>
      <header id="Header">
        <div className="title">
          <p>{state?.name || "Loading..."}</p>
        </div>
      </header>
      <div className="Wrapper">
        {loading ? (
          <p>Loading!!...</p>
        ) : (
          <>
            <div className="boxWrapper">
              <div className="boxItem">
                <span>Rank </span>
                <span>{info?.rank}</span>
              </div>
              <div className="boxItem">
                <span>Rank </span>
                <span>{info?.symbol}</span>
              </div>
              <div className="boxItem">
                <span>Open Source </span>
                <span>{info?.open_source ? "Yes" : "No"}</span>
              </div>
            </div>
            <div className="boxdesc">
              <span>{info?.description}</span>
            </div>
            <div className="boxWrapper">
              <div className="boxItem">
                <span>Total</span>
                <span>{price?.total_supply}</span>
              </div>

              <div className="boxItem">
                <span>Max </span>
                <span>{price?.max_supply}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Coin;
