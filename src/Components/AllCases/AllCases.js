import React from "react";
import Card from "./CasesCard/Card";
import down from "../../assets/Down.svg";
import up from "../../assets/Up.svg";
// import { fetchGlobalCases } from "../helper/apicalls";
// import { useState } from "react";
// import { useEffect } from "react";
// let dataA;

const AllCases = (props) => {
  const {
    TotalConfirmed,
    TotalRecovered,
    TotalDeaths,
    NewConfirmed,
    NewRecovered,
    NewDeaths,
  } = props.summary;
  const Active = TotalConfirmed - (TotalRecovered + TotalDeaths);
  // const [hello, setHello] = useState();

  // const fetchAll = async () => {
  //   dataA = await fetchGlobalCases();
  //   //console.log(dataA.cases);
  //   setHello(dataA.cases);
  //   //console.log(hello);

  //   // setData();
  //   // console.log("hello", data);
  // };
  // useEffect(() => {
  //   fetchAll();
  // }, []);

  return (
    <div>
      {props ? (
        <div style={{ margin: "1% 1% 2% 5%", Color: "#67E6DC" }}>
          <Card
            title="Total Cases"
            value={TotalConfirmed}
            src={NewConfirmed >= NewRecovered ? up : down}
            color="#FF0019"
          />
          <Card
            title="Recoverd &nbsp;&nbsp;"
            value={TotalRecovered}
            src={down}
            color="#67E6DC"
          />
          <Card
            title="Active Case"
            value={Active}
            src={NewConfirmed >= NewRecovered + NewDeaths ? up : down}
            color="#FF0019"
          />
          <Card
            title="Total Death"
            value={TotalDeaths}
            src={up}
            color="#FF0019"
          />
          <Card
            title="New Cases"
            value={NewConfirmed}
            src={up}
            color="#FF0019"
          />
        </div>
      ) : null}
    </div>
  );
};

export default AllCases;
