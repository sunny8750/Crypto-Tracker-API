import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import ListIcon from '@mui/icons-material/List';
import Button from "../Button";
import { Link } from "react-router-dom";
import {  IconButton, Switch, createTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



 function TemporaryDrawer() {

  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
      setDarkMode(!darkMode);
    };
  
    const theme = createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    });


  return (
    <div>
          <IconButton onClick={()=>setOpen(true)}><ListIcon className="link"  /></IconButton>
          <Drawer
            anchor={"left"}
            open={open}
            onClose={()=>setOpen(false)}
          >
            <div className="drawer-link">
            {/* <IconButton color="inherit" onClick={handleThemeChange}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Switch checked={darkMode} onChange={handleThemeChange} color="default" /> */}
                    <Link to="/">
                        <p className="link">Home</p>
                    </Link>
                     <Link to="/compare">
                        <p className="link">Compare</p>
                      </Link>
                     <Link to="/watchlist">
                        <p className="link">Watchlist</p>
                       </Link>
                     <Link to="/dashboard">
                      <Button text={"Dashboard"} /> 
                      </Link>
                    
                    </div>
          </Drawer>
      
    </div>
  );
}

export default TemporaryDrawer;
