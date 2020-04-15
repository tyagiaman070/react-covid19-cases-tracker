import React from "react";
import { fetchCountries, fetchNews } from "../helper/apicalls";
import Nav from "../Navbar/Navbar";
import Countries from "../AllCountries/Countries";
import AllCases from "../AllCases/AllCases";
import Chart from "../Chart/Chart";
import "./home.css";
// import Twittes from "../Twittes/Twittes";
import News from "../Symptoms/Symptoms";
import Map from "../Map/map";
import smile from "../../assets/smile.jpg";
import Footer from "../../Footer/Footer";

class Home extends React.Component {
  state = {
    summary: null,
    data: false,
    global: null,
    codeName: "IN",
    countryName: "india",
    news: null,
    article: false,
  };
  componentDidMount() {
    const setsummary = async () => {
      const summary = await fetchCountries();
      this.setState({ summary: summary, data: true, global: summary.Global });
    };
    setsummary();
    const setNews = async (code) => {
      const news = await fetchNews(code);
      console.log(news);
      this.setState({ news: news, article: true });
    };
    setNews(this.state.codeName);
  }

  summaryHandler = (data) => {
    if (data.Country === "World") {
      this.setState({ codeName: "IN", global: data, countryName: "india" });
    } else {
      this.setState({
        codeName: data.CountryCode,
        global: data,
        countryName: data.Slug,
      });
    }
    if (data.CountryCode) {
      this.newsHandler(data.CountryCode.toUpperCase());
    } else {
      this.newsHandler("IN");
    }

    // console.log(this.state.codeName);
  };

  newsHandler = async (code) => {
    const news = await fetchNews(code);
    console.log(code);
    if (news === null || news === undefined || news.length === 0) {
      this.setState({ news: "No Feed", article: true, code: code });
    } else {
      this.setState({ news: news, article: true, code: code });
    }
  };

  render() {
    let show = (
      <div style={{ margin: "10% 0 10% 10%" }}>
        <span className="devemessage">
          <span>
            Loading Page Please Wait : <br />
          </span>
          <span>
            <img
              src={smile}
              alt="smile message"
              style={{ display: "flex", width: "50px", height: "50px" }}
            />
          </span>
        </span>
        <span>
          <div className="loader" style={{ margin: "0 0 0 0" }}></div>
        </span>
      </div>
    );

    if (this.state.data && this.state.article) {
      show = (
        <div>
          <Nav />
          <AllCases summary={this.state.global} />
          <div className="chartGraph">
            <span className="grphCountry">
              <Countries
                summary={this.state.summary}
                clicked={this.summaryHandler}
              />
            </span>
            <span className="lineGraph">
              <Chart data={this.state.codeName} name={this.state.countryName} />
            </span>
          </div>
          <span className="maketopzero">
            <Map data={this.state.summary} />
          </span>
          <div className="tweetnews">
            {/* <Twittes /> */}
            <News articles={this.state.news} />
            <br />
            <br />
          </div>
          <Footer />
        </div>
      );
    }

    return <span>{show}</span>;
  }
}

export default Home;
