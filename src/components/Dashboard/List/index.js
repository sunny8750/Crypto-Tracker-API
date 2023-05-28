import React from "react";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import Tooltip from '@mui/material/Tooltip';
import { convertNumber } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import "./style.css";

function List({coin, delay, isWatchlistPage}){
    const [added, setAdded] = useState(hasBeenAdded(coin.id));
     console.log(coin);
    return(
        <Link to={`/coin/${coin.id}`}>
        <tr className="list-row">
           <td className="td-image">
            <img src={coin.image} alt="logo" className="coin-logo"/>
            </td>
            <td>
        <div className="name-symbol">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
        </div>
    </td>

   {coin.price_change_percentage_24h > 0 ? 
   ( <td className="chip-flex">
            <div className="price-chip">{Number(coin.price_change_percentage_24h).toFixed(2)}%
            </div>
            <div className="icon-chip td-icon">
                 <TrendingUpRoundedIcon/> 
                 </div>
        </td>
        ):(
            <td className="chip-flex">
            <div className="price-chip chip-red">{Number(coin.price_change_percentage_24h).toFixed(2)}%
            </div>
            <div className="icon-chip chip-red td-icon">
                 <TrendingDownRoundedIcon/> 
                 </div>
        </td>
        )}

        <td> <h3 className="coin-price td-center-align" style={{color:coin.price_change_percentage_24h<0?"var(--red)":"greenyellow"}}>${coin.current_price.toLocaleString()}</h3>
        </td>
        <Tooltip title="total-volume">
        <td>
        <p className="total-volume td-right-align td-total-volume">${coin.total_volume}</p>
        </td>
        </Tooltip>
        <Tooltip title="market-cap">
        <td className="desktop-td-mkt">
        <p className="total-volume td-right-align">${coin.market_cap}</p>
        </td> 
        </Tooltip>
        <Tooltip title="market-cap">
        <td className="mobile-td-mkt">
        <p className="total-volume td-right-align">${convertNumber(coin.market_cap)}</p>
        </td> 
        </Tooltip>
       
        <td style={{ width: "fit-content" }}>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                addToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
              />
            )}
          </IconButton>
        </td>
        </tr>
         </Link>
    )
}
export default List;