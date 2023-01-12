import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Price.css";

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

interface RouterParams {
  coinId?: string;
}

function Price() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PriceData>();

  const { coinId } = useParams<"coinId">();
  console.log(coinId);

  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      .then((res) => res.json())
      .then((json) => setData(json));
    setLoading(false);
  }, []);

  console.log(data);

  return (
    <div className="Wrapper">
      {loading ? (
        "Loading Price"
      ) : (
        <div className="PriceWrapper">
          <div className="priceItem">
            <p>1시간 전보다</p>
            <p>{data?.quotes.USD.percent_change_1h}</p>
          </div>
          <div className="priceItem">
            <p>6시간 전보다</p>
            <p>{data?.quotes.USD.percent_change_6h}</p>
          </div>
          <div className="priceItem">
            <p>12시간 전보다</p>
            <p>{data?.quotes.USD.percent_change_12h}</p>
          </div>{" "}
          <div className="priceItem">
            <p>6시간 전보다</p>
            <p>{data?.quotes.USD.percent_change_6h}</p>
          </div>{" "}
          <div className="priceItem">
            <p>12시간 전보다</p>
            <p>{data?.quotes.USD.percent_change_12h}</p>
          </div>
          <div className="priceItem">
            <p>1일 전보다</p>
            <p>{data?.quotes.USD.percent_change_24h}</p>
          </div>
          <div className="priceItem">
            <p>7일 전보다</p>
            <p>{data?.quotes.USD.percent_change_7d}</p>
          </div>
          <div className="priceItem">
            <p>30일 전보다</p>
            <p>{data?.quotes.USD.percent_change_30d}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Price;
