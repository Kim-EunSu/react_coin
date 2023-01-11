import { ReactNode } from "react";
import { useParams } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

function Coin(props: Props) {
  const { coinId } = useParams();
  console.log(coinId);
  return <h1>{props.children}</h1>;
}

export default Coin;
