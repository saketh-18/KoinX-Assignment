import React, { createContext, useState , useEffect} from 'react';
import axios from 'axios';

export const TrendingContext = createContext({});

export default function TrendingContextProvider({children}) {
    const [TrendingCoins , setTrendingCoins] = useState([]);

    useEffect(()=> {
        const trending = async () => {
            try {
            const res = await axios.get("https://api.coingecko.com/api/v3/search/trending");
            const data = res.data;
            setTrendingCoins(data.coins);   
        } 
            catch(e) {
                console.log(e);
        }
        } 
        trending();
    } , [])
  return (
    <TrendingContext.Provider value={{TrendingCoins , setTrendingCoins }}>
    {children}
    </TrendingContext.Provider>
  )
}