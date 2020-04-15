import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { fetchCountry } from "../helper/apicalls";
import "./chart.css";
var confirm,
  drawChart = [];
// recover = [],
// deathAll = [];
// let hello, helloone, hellotwo;
const Chart = ({ data, name }) => {
  // console.log("data is coming on click on ", data);
  // console.log("data is coming on click on ", name);

  // const [confirmed, setConfirmed] = useState([]);
  // const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [nme, setNme] = useState("");

  useEffect(() => {
    console.log(data);
    const fetchData = async () => {
      confirm = await fetchCountry(data);
      if (confirm) {
        drawChart = confirm.data.stats.history;
        setDeaths(drawChart);
        setNme(name);
      }

      // drawChart.map(({ date }) => console.log(date));

      // drawChart.map(({ confirmed }) => console.log(confirmed));
      // drawChart.map(({ recovered }) => console.log(recovered));
      // drawChart.map(({ deaths }) => console.log(deaths));
    };
    fetchData();
  }, [data]);

  const converDate = (data) => {
    const date = new Date(data);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return day + "/" + month + "/" + year;
  };

  const lineChart = deaths.length ? (
    <div>
      <Line
        data={{
          labels: drawChart.map(({ date }) => converDate(date)),
          datasets: [
            {
              data: drawChart.map(({ confirmed }) => confirmed),
              label: "Confirmed",
              borderColor: "rgba(20, 72, 150, 0.8)",
              backgroundColor: "rgba(20, 72, 150, 0.2)",
              fill: true,
              borderWidth: "1.5",
              hoverBackgroundColor: "#BB2CD9",
              hoverBorderColor: "rgba(20, 72, 150, 1)",
              hoverBorderWidth: "1",
              pointStyle: "circle",
            },
            {
              data: drawChart.map(({ recovered }) => recovered),
              label: "Recovered",
              borderColor: "rgba(27, 202, 155, 0.8)",
              backgroundColor: "rgba(27, 202, 155, 0.2)",
              fill: true,
              borderWidth: "1.5",
              hoverBackgroundColor: "#FFF222",
              hoverBorderColor: "rgba(27, 202, 155, 0.8)",
              hoverBorderWidth: "1",
              pointStyle: "triangle",
            },
            {
              data: drawChart.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "rgba(176, 27, 28, 0.8)",
              backgroundColor: "rgba(176, 27, 28, 0.5)",
              fill: true,
              borderWidth: "1.5",
              hoverBackgroundColor: "#45CE30",
              hoverBorderColor: "rgba(176, 27, 28, 0.8)",
              hoverBorderWidth: "1",
              pointStyle: "cross",
            },
          ],
        }}
      />
      <span className="setcountryName">{name}'s data</span>
    </div>
  ) : data ? null : null; // </span> //   {nme}'s does not have any Cases of Covoid'19 please select a country // <span style={{ margin: "0 0 0 5%" }}>

  return <div className="makebox">{lineChart}</div>;
};

export default Chart;
