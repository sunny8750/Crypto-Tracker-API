import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./style.css"

export default function TogglePriceType({priceType , handlePriceTypeChange}) {
  return (
    <div className='toggle-prices'>
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        "& .Mui-selected":{
            color: "var(--orange) !important",
        },
        borderColor: "var(--orange) !important",
        border: "unset !important",
        "& .MuiToggeleButtonGroup-grouped":{
            borderColor: "unset !important",
            border: "1px solid !important",
            color: "var(--orange)",
        },
        "&. MuiToggleButton-standard":{
           color:"var(--orange)",
        },
    }}
    >
      <ToggleButton value="prices" className='toggle-btn'>
        Price
      </ToggleButton>
      <ToggleButton value="market_caps"  className='toggle-btn'>
        Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes"  className='toggle-btn'>
        Total volume
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}