import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { coinObject } from "../functions/coinObjects";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/PriceType";


function CoinPage(){
    const {id} = useParams();
    const [isLOading,setIsLOading]=useState(true)
    const [coinData,setCoinData]=useState([]);
    const [days,setDays]=useState(30)
    const [chartdata , setChartdata]=useState({});
    const [priceType , setPriceType] = useState("prices");

    useEffect(()=>{
       if(id){
        getData();
       }
    },[id])

    async function getData(){
        const data = await getCoinData(id);
        if(data){
            coinObject(setCoinData, data)
            const prices = await getCoinPrices(id, days, priceType)
            if(prices){
                console.log("noooooo");
                settingChartData(setChartdata,prices);
                setIsLOading(false);
            }
        }
    }

    const handledaysChange= async (event)=>{
        setIsLOading(true);
        setDays(event.target.value);
        const prices = await getCoinPrices(id , event.target.value, priceType)
            if(prices){
                settingChartData(setChartdata , prices);
                setIsLOading(false);
            }
    }


   
    const handlePriceTypeChange = async (event,newType)=>{
        setIsLOading(true);
        setPriceType(newType);
    console.log(newType)
        const prices = await getCoinPrices(id, days , newType)
        if(prices){
            settingChartData(setChartdata,prices);
            setIsLOading(false);
        }
    };

    return(
        <div>
          <Header/>
          {isLOading?(<Loader/>):(<>
          <div className="grey-wrapper" style={{padding:"0rem 1rem"}}>
            <List coin={coinData}/>
            </div>
            <div className="grey-wrapper">
            <SelectDays days={days} handledaysChange={handledaysChange}/>
            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <LineChart chartdata={chartdata}  priceType={priceType}/>
            </div>
            <CoinInfo heading={coinData.name} desc={coinData.desc}/>
            </>)}
        </div>
    )
}

export default CoinPage;