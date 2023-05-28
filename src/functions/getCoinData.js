import axios from "axios"

export const getCoinData =(id)=>{
    const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        console.log("err", err);
    });
    return myData;
}