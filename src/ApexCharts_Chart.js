import { Component } from "react";
import { useState, useEffect } from "react";
import ApexChart from "react-apexcharts";

function ApexCharts({ coinId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  console.log(data);

  return (
    <div id="chart" style={{ width: "450px", marginTop: "30px" }}>
      <ApexChart
        type="line"
        series={[
          {
            name: "high",
            data: data.map((price) => price.high),
          },
        ]}
        options={{
          theme: {
            mode: "dark",
          },
          chart: {
            height: 400,
            width: 500,
            toolbar: {
              show: false,
            },
            background: "#4b4543",
          },
          grid: { show: true },
          stroke: {
            curve: "smooth",
            width: 4,
          },
          yaxis: {
            show: true,
            tickAmount: 5,
          },
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { show: false },
            type: "datetime",
            categories: data.map((price) => price.time_close),
          },
          fill: {
            type: "gradient",
            gradient: {
              gradientToColors: ["yellow"],
              stops: [0, 100],
            },
          },
          tooltip: {
            y: {
              formatter: (value) => `$${value.toFixed(3)}`,
            },
          },
        }}
      />
    </div>
  );
}

export default ApexCharts;
