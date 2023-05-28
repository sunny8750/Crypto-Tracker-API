import React from 'react';
import Pagination from '@mui/material/Pagination';
import "./style.css";


export default function PaginationComponent({page,handleChange}) {

  return (
    <div className='pagination-compponent'>
      <Pagination count={10} page={page} onChange={(event,value)=>handleChange(event,value)} sx={{color:"var(--white)","& .Mui-selected":{
        backgroundColor:"var(--skyblue) !important",color:"#fff !important",borderColor:"var(--skyblue)",
      },"& .MuiPaginationItem-ellipsis":{
        border:"0px solid var(--grey) !important",
      },"& .MuiPaginationItem-text":{
        color:"var(--white)",
        border:"1px solid var(--grey)"
      },
      }} />
    </div>
  );
}