import React from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./style.css";

export default function SelectDays({days, handledaysChange, noptag}) {
 
  return (
    <div className='select-days'>
      { !noptag && <p>Price Change In</p>}
        <Select
        sx={{
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
        }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handledaysChange}
        >
            <MenuItem value={7}>7 days</MenuItem>
            <MenuItem value={30}>30 days</MenuItem>
            <MenuItem value={60}>60 days</MenuItem>
            <MenuItem value={120}>120 days</MenuItem>
        </Select>
    </div>
  );
}