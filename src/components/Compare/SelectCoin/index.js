import React, { useEffect, useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { get100Coins } from "../../../functions/get100Coins";
import "./style.css";


function SelectCoin({crypto1, crypto2, handleCoinChange}){
   
    const [allcoins, setAllcoins]=useState([]);

    const style = {
        height:"2.5rem",
        color:"var(--white)",
        "& .MuiOutlinedInput-notchedOutline":{
            borderColor:"var(--white)",
        },
        "& .MuiSvgIcon-root":{
            color:"var(--white)",
        },
        "&:hover":{
            "&& fieldset":{
                borderColor:"#DA930E",
            },
        },
    }

    useEffect(()=>{
        getData()
    },[]);

    async function getData(){
        const myCoins = await get100Coins();
        setAllcoins(myCoins);
    }

    return(
        <div className="coins-flex">
            <p>Crypto 1</p>
        <Select
        sx={style}
          value={crypto1}
          label="Crypto 1"
          onChange={(event)=>handleCoinChange(event, false)}
        >
            {allcoins && allcoins.filter((item)=>item.id!=crypto2).map((coin,i)=>(
                <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
            ))}
        </Select>
        <p>Crypto 2</p>
        <Select
        sx={style}
          value={crypto2}
          label="Crypto 2"
          onChange={(event)=>handleCoinChange(event, true)}
        >
            {allcoins && allcoins.filter((item)=>item.id!=crypto1).map((coin , i)=>(
                <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
            ))}
        </Select>
        </div>
    )
}
export default SelectCoin;