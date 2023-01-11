import { ReactNode, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../css/Coins.css";

interface RouterParams {
  coinId: string;
}

interface Props {
  children?: ReactNode;
}

function Coin(props: Props) {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<"coinId">();

  const { state } = useLocation();

  return (
    <>
      <h1> {props.children}</h1>
      <header id="Header">
        <div className="title">
          <p>{state?.name || "Loading..."}</p>
        </div>
      </header>
      <div className="coin_list">{loading ? <p>Loading!!...</p> : null}</div>
    </>
  );
}

export default Coin;
