import React, { useContext } from 'react';
import { TrendingContext } from './TrendingContext';

export default function Trending() {
    const { TrendingCoins } = useContext(TrendingContext);

  return (
    <div className='flex flex-col bg-white rounded mr-12 ml-6 mt-10'>
        <p className='text-lg font-bold ml-6 mt-6'>Trending Coins (24H) </p>
        {TrendingCoins && TrendingCoins.slice(0,3).map((top) => {
            return (
                <div className='flex m-5 items-center justify-between'> 
                <div className='flex w-1/2'> 
                    <div className='w-1/4 rounded-full'> 
                        <img src={top.item.large} className='w-full h-15 rounded-full'/>
                    </div>
                    <p className='ml-6'>{top.item.symbol}</p>
                </div>
                    <p className='change-pt px-2 text-green-500 ml-3 rounded-md'>{top.item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                </div>
            );
        })}
    </div>
  )
}
