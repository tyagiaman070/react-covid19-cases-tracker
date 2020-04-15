//get all countries data infected recovered with latest info
import axios from "axios";

const getAllCountries = "https://api.covid19api.com/summary";
//const url = "https://api.covid19api.com/countries";
//const getAllCountries = "https://covid19.mathdro.id/api";

export const fetchCountries = async () => {
  try {
    // const {
    //   data: { Countries },
    // } = await axios.get(url);

    const response = await axios.get(getAllCountries);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//get A Country data from day one
let getACountry = "https://api.smartable.ai/coronavirus/stats";

export const fetchCountry = async (countryCode) => {
  try {
    const response = await axios.get(`${getACountry}/${countryCode}`, {
      headers: { "Subscription-Key": "3009d4ccc29e4808af1ccc25c69b4d5d" },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNews = async (code) => {
  try {
    const response = await axios.get(
      "https://api.smartable.ai/coronavirus/news/" +
        code +
        "?Subscription-Key=3009d4ccc29e4808af1ccc25c69b4d5d"
    );
    return response.data.news;
  } catch (err) {
    console.log(err);
  }
};

//get all global cases
// let globalCases = "https://corona.lmao.ninja/all";

// export const fetchGlobalCases = async () => {
//   try {
//     const response = await axios.get(globalCases);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

//get All States
