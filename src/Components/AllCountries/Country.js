import React from "react";
import World from "../../assets/worldflag.svg";
import Chart from "../Chart/Chart";
// import { fetchCountry } from "../helper/apicalls";
// import { Line } from "react-chartjs-2";
// let hello, helloone, hellotwo;
let countryName;
const country = (props) => {
  let val = World;
  let width = "40px",
    height = "30px";
  if (props.info.Country !== "World") {
    val =
      "https://www.countryflags.io/" +
      props.info.CountryCode.toLowerCase() +
      "/shiny/32.png";
  }
  //fetching country data accordin to days

  return (
    <div
      className="Country"
      onClick={() => {
        props.clicked(props.info);
      }}
      style={{ cursor: "pointer" }}
    >
      <p>
        <span style={{ margin: "0 0 0 10px" }}>
          <img alt="logo" src={val} width={width} height={height} />
        </span>
        <span
          style={{
            marginLeft: "1%",
            color: "Black",
            fontSize: "15px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          value={props.info.Slug}
        >
          {props.info.Country}
        </span>
      </p>
      <p>
        <span style={{ color: "red" }}>
          {props.info.TotalConfirmed} Affected &nbsp;
        </span>
        |&nbsp;
        <span style={{ color: "green" }}>
          &nbsp;{props.info.TotalRecovered} Recovered
        </span>
        <span
          style={{
            float: "right",
            position: "relative",
            bottom: "15px",
            left: "10px",
            marginLeft: "10px",
          }}
        >
          <img
            src={props.src}
            alt="logo"
            width="25px"
            style={{ margin: "0 20px 80px 0" }}
          />
        </span>
      </p>
    </div>
  );
};

export default country;
