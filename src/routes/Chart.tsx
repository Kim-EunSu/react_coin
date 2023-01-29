import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApexCharts from "../ApexCharts_Chart";

interface RouterParams {
  coinId: string;
}

function Chart() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<"coinId">();

  const { coinId } = useParams<"coinId">();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
      );
      const json = await response.json();
      setData(json);
      setLoading(false);
    })();
  }, []);

  return (
    <div>{loading ? "Loading chart..." : <ApexCharts coinId={coinId} />}</div>
  );
}

export default Chart;
