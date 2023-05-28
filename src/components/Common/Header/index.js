import React from "react";
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {  IconButton, Switch, createTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Header () {
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

            <div className="navbar">
                <h1  className="logo">CryptoTracker<span style = {{color:"var(--red)"}}>.</span></h1>
                
                <div className="links">
                {/* <IconButton color="inherit" onClick={handleThemeChange}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton> */}
          {/* <Switch checked={darkMode} onChange={handleThemeChange} color="default" /> */}
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
                    <Button
                     text={"Dashboard"} 
                     outlined={false}/> 
                    </Link>
                </div>

                <div className="mobile-drawer">
                    <TemporaryDrawer/>
                </div>
            </div>

    )
}

export default Header;