import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Grid from '../Grid';
import List from '../List';
import "./style.css"

function TabsComponent({coins}) {
  const [value, setValue] = useState('GRID');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const style={

  color:"var(--white)",
  width:"50vw",
  fontSize:"1.2rem",
  fontWeight:600,
  fontFamily:"inter",
  textTransform:"capitalize",

}

const theme = createTheme({
  palette:{
    primary:{
      main:"rgb(224 152 17)",
    },
  },
});


  return (
    <div >
      <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="GRID" value="GRID" sx={style}/>
            <Tab label="LIST" value="LIST" sx={style} />
          </TabList>
        <TabPanel value="GRID">
          <div className='grid-flex'>
            {coins.map((coin,i)=>{
              return(
                <Grid coin={coin} key={i} />
              )
            })}
          </div>
        </TabPanel>
        <TabPanel value="LIST">
          <table className='list-table'>
            {coins.map((item,i)=>{
              return(
                <List coin={item} key={i} />
              )
            })}
          </table>
        </TabPanel>
      </TabContext>
      </ThemeProvider>
    </div>
  );
}
export default TabsComponent;