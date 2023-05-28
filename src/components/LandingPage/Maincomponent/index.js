import React from "react";
import Button from "../../Common/Button";
import "./style.css";
import cryptoimage from "../../../assets/cryptoimage.png";
import { RWebShare } from "react-web-share";
import { motion } from "framer-motion";


function MainComponent(){
    return <div className="flex-info">
        <div className="left-component">
            <motion.h1 className="track-crypto-heading"
            initial={{opacity:0,scale:0.5 }}
            animate={{opacity:1,scale:1 }}
            transition={{duration: 1}}
            >Track Crypto</motion.h1>
            <motion.h1 className="real-time-heading"
            initial={{opacity:0,scale:0.5 }}
            animate={{opacity:1,scale:1 }}
            transition={{duration: 1}}
            >Real Time.</motion.h1>
            <motion.p className="info-text"
             initial={{opacity:0,scale:0.5 }}
             animate={{opacity:1,scale:1 }}
             transition={{duration: 1}}
            >Track Crypto through the public API in real time. Visit the dashboard to do so.! </motion.p>
            <motion.div className="btn-flex"
             initial={{opacity:0,scale:0.5 }}
             animate={{opacity:1,scale:1 }}
             transition={{duration: 1}}>
           <a href="/dashboard">
            <Button text="Dashboard" />
          </a>
          <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS.",
              url: "https://crypto-dashboard-dec.netlify.app/",
              title: "CryptoDashboard.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share App" outlined={true} />
          </RWebShare>

        </motion.div>
        </div>
        
        <div className="pic-container">
            <motion.img src = {cryptoimage} className="img"  initial={{opacity:1,y:-10}}
            animate={{opacity:2,y:10 }}
            transition={{duration: 2, type:"smooth",repeatType:"mirror",repeat:Infinity}}/>
        </div>
    </div>
}

export default MainComponent;