import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Common/Header";
import SelectCoin from "../components/Compare/SelectCoin";
import SelectDays from "../components/Coin/SelectDays";
import { getCoinPrices } from "../functions/getCoinPrices";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/coinObjects";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import LineChart from "../components/Coin/LineChart";
import { settingChartData } from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/PriceType";
import { get100Coins } from "../functions/get100Coins";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [allCoins, setAllCoins] = useState([]);

  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});

  const [isLOading, setIsLOading] = useState(true);
  const [priceType, setPriceType] = useState("prices");

  const [chartdata, setChartdata] = useState({});
  const [days, setDays] = useState(30);

  async function handledaysChange(event) {
    setIsLOading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
    settingChartData(setChartdata, prices1, prices2);
    setIsLOading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLOading(true);
      const coins = await get100Coins();
      if (coins) {
        setAllCoins(coins);
        const data1 = await getCoinData(crypto1);
        const data2 = await getCoinData(crypto2);
        coinObject(setCrypto1Data,data1);
        coinObject(setCrypto2Data,data2);
        if (data1 && data2) {
          const prices1 = await getCoinPrices(crypto1, days, priceType);
          const prices2 = await getCoinPrices(crypto2, days, priceType);
          settingChartData(setChartdata, prices1, prices2);
          setIsLOading(false);
        }
      }
  }

  const handlePriceTypeChange = async (event, newType) => {
    setIsLOading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, newType);
    const prices2 = await getCoinPrices(crypto2, days, newType);
    settingChartData(setChartdata, prices1, prices2);
    setIsLOading(false);
  };

  const handleCoinChange = async (event, IsCoin2) => {
    setIsLOading(true);
    if (IsCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      settingChartData(setChartdata, prices1, prices2);
    } else {
      setCrypto1(event.target.value);
      const data2 = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data2);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      settingChartData(setChartdata, prices1, prices2);
    }
    setIsLOading(false);
  };

  return (
    <div>
      <Header />
      {isLOading ? (
        <Loader />
      ) : (
        <>
          <div className="coins-days-flex">
            <SelectCoin
            allCoins={allCoins}
              crypto1={crypto1}
              handleCoinChange={handleCoinChange}
              crypto2={crypto2}
            />
            <SelectDays
              days={days}
              handledaysChange={handledaysChange}
              noptag={true}
            />
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto1Data} />
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto2Data} />
          </div>
          <div className="grey-wrapper">
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart
              chartdata={chartdata}
              priceType={priceType}
              multiAxis={true}
            />
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
}
export default ComparePage;

//avi

// function ComparePage() {
//     const [allCoins, setAllCoins] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const [crypto1, setCrypto1] = useState("bitcoin");
//     const [crypto2, setCrypto2] = useState("ethereum");

//     const [coin1Data, setCoin1Data] = useState({});
//     const [coin2Data, setCoin2Data] = useState({});

//     const [days, setDays] = useState(30);
//     const [priceType, setPriceType] = useState("prices");
//     const [chartData, setChartData] = useState({
//       labels: [],
//       datasets: [],
//     });

//     useEffect(() => {
//       getData();
//     },[] );

//     const getData = async () => {
//       setLoading(true);
//       const coins = await get100Coins();
//       if (coins) {
//         setAllCoins(coins);
//         const data1 = await getCoinData(crypto1);
//         const data2 = await getCoinData(crypto2);
//         coinObject(data1, setCoin1Data);
//         coinObject(data2, setCoin2Data);
//         if (data1 && data2) {

//           const prices1 = await getCoinPrices(crypto1, days, priceType);
//           const prices2 = await getCoinPrices(crypto2, days, priceType);
//           settingChartData(setChartData, prices1, prices2);
//           setLoading(false);
//         }
//       }
//     };

//     const onCoinChange = async (e, isCoin2) => {
//       setLoading(true);
//       if (isCoin2) {
//         const newCrypto2 = e.target.value;
//         // crypto2 is being changed
//         setCrypto2(newCrypto2);
//         // fetch coin2 data
//         const data2 = await getCoinData(newCrypto2);
//         coinObject(setCoin2Data,data2);
//         // fetch prices again
//         const prices1 = await getCoinPrices(crypto1, days, priceType);
//         const prices2 = await getCoinPrices(newCrypto2, days, priceType);
//         settingChartData(setChartData, prices1, prices2);
//       } else {
//         const newCrypto1 = e.target.value;
//         // crypto1 is being changed
//         setCrypto1(newCrypto1);
//         // fetch coin1 data
//         const data1 = await getCoinData(newCrypto1);
//         coinObject(setCoin1Data,data1);
//         // fetch coin prices
//         const prices1 = await getCoinPrices(newCrypto1, days, priceType);
//         const prices2 = await getCoinPrices(crypto2, days, priceType);
//         settingChartData(setChartData, prices1, prices2);
//         console.log(data1);
//       }
//       setLoading(false);
//     };

//     const handleDaysChange = async (e) => {
//       const newDays = e.target.value;
//       setLoading(true);
//       setDays(newDays);
//       const prices1 = await getCoinPrices(crypto1, newDays, priceType);
//       const prices2 = await getCoinPrices(crypto2, newDays, priceType);
//       settingChartData(setChartData, prices1, prices2);
//       setLoading(false);
//     };

//     const handlePriceTypeChange = async (e) => {
//       const newPriceType = e.target.value;
//       setLoading(true);
//       setPriceType(newPriceType);
//       const prices1 = await getCoinPrices(crypto1, days, newPriceType);
//       const prices2 = await getCoinPrices(crypto2, days, newPriceType);
//       settingChartData(setChartData, prices1, prices2);
//       setLoading(false);
//     };

//     return (
//       <div>
//         <Header />
//         {loading || !coin1Data?.id || !coin2Data?.id ? (
//           <Loader />
//         ) : (
//           <>
//             <SelectCoin
//               allCoins={allCoins}
//               crypto1={crypto1}
//               crypto2={crypto2}
//               onCoinChange={onCoinChange}
//               days={days}
//               handleDaysChange={handleDaysChange}
//             />
//             <div className="grey-wrapper">
//               <List coin={coin1Data} />
//             </div>
//             <div className="grey-wrapper">
//               <List coin={coin2Data} />
//             </div>
//             <div className="grey-wrapper">
//               <TogglePriceType
//                 priceType={priceType}
//                 handlePriceTypeChange={handlePriceTypeChange}
//               />
//               <LineChart chartData={chartData} multiAxis={true} />
//             </div>
//             <CoinInfo title={coin1Data.name} desc={coin1Data.desc} />
//             <CoinInfo title={coin2Data.name} desc={coin2Data.desc} />
//           </>
//         )}
//       </div>
//     );
//   }

//   export default ComparePage;
