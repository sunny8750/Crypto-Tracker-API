import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import ComparePage from "./pages/ComparePage";
import CoinPage from "./pages/Coin";
import './App.css';
import WatchlistPage from "./pages/Watchlist";


function App() {
  return (
    <div className='App'>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Dashboard" element={<DashboardPage />}/>
          <Route path="/coin/:id" element={<CoinPage />}/>
          <Route path="/compare" element={<ComparePage />}/>
          <Route path="/watchlist" element={<WatchlistPage/>}/>
        </Routes>
       </BrowserRouter>
    </div>
    )
  }
export default App;  
