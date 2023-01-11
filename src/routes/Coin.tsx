import { ReactNode, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

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
      <div className="coin_title">
        <p>{state?.name || "Loading..."}</p>
      </div>
      {loading ? <p>Loading!!...</p> : null}
    </>
  );
}

export default Coin;
