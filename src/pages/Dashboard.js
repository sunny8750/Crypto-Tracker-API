import React, { useEffect } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import { useState } from "react";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";
import { get100Coins } from "../functions/get100Coins";

function DashboardPage(){

    const [coins,setCoins] = useState([])
    const [paginatedcoins,setPaginatedcoins] = useState([])
    const[search, setSearch]= useState("");
    const [page, setPage] = useState(1);
    const [isLOading, setIsLOading] = useState(true);


    const handlePageChange = (event, value) => {
      setPage(value);
      var previousIndex = (value-1)*10
      setPaginatedcoins(coins.slice(previousIndex,previousIndex+10))
   
    };
  

    const onSearchChange = (e)=>{
        setSearch(e.target.value)
    };

    var filteredsearch=coins.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())|| item.symbol.toLowerCase().includes(search.toLowerCase()));
    

        useEffect(()=>{
            getData();
        },[])

        const getData = async ()=>{
            const myCoins = await get100Coins();
            console.log("my coins",myCoins);
            if(myCoins){
                setCoins(myCoins);
                setPaginatedcoins(myCoins.slice(0,10));
                setIsLOading(false);
            }
        };

    return(
       <> <Header />
       <BackToTop/>{isLOading?(
       <Loader/>
       )
       :( <div>
          
           <Search search={search} onSearchChange={onSearchChange}/>
           <TabsComponent coins={search?filteredsearch :paginatedcoins}/>
           { !search && <PaginationComponent page={page} handleChange={handlePageChange}/>}
          
        </div>
        )}
    </>
    )
}
export default DashboardPage;