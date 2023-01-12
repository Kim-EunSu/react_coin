import { BrowserRouter, Routes, Route } from "react-router-dom";
import Price from "./routes/Price";
import Chart from "./routes/Chart";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId" element={<Coin />}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart />} />
        </Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
