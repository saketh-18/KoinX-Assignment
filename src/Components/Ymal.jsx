import React , {useContext} from 'react';
import { TrendingContext } from './TrendingContext';

export default function Ymal() {
    const { TrendingCoins } = useContext(TrendingContext);
    console.log(TrendingCoins)
  return (
    <div className='bg-white mt-6'>
        <p className='text-xl font-semibold ml-6 mt-2'>You may also like</p>
        <div className='flex you-may-also-like-scroll-container mt-6'>
        
        {TrendingCoins && TrendingCoins.map((top) => {
            return (
                <div className='symbol-overview ml-4 mr-4 p-2 w-64 rounded-md'>
                <div className='flex small-symbol flex-col'>
                <div className='flex items-center'>
                    <img src={top.item.large} className='w-8 h-8'/>
                    <p className='font-semibold ml-2'>{top.item.name}</p>
                    <p className='change-pt px-2 text-green-500 ml-3 rounded-md'>{top.item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                </div>
                <p className='text-lg font-semibold mt-1'> {top.item.data.price} </p>
                <div className='w-full flex justify-center'> 
                    <img src={top.item.data.sparkline} className='w-20 h-10'/>
                </div>
                </div>
                </div>);
            })}
        </div>
        <p className='text-xl font-semibold ml-6 mt-2'>Trending Coins</p>
        <div className='flex you-may-also-like-scroll-container mt-6'>
        
        
        {TrendingCoins && TrendingCoins.map((top) => {
            return (
                <div className='symbol-overview ml-4 mr-4 p-2 w-64 rounded-md'>
                <div className='flex small-symbol flex-col'>
                <div className='flex items-center'>
                    <img src={top.item.large} className='w-8 h-8'/>
                    <p className='font-semibold ml-2'>{top.item.name}</p>
                    <p className='change-pt px-2 text-green-500 ml-3 rounded-md'>{top.item.data.price_change_percentage_24h.usd.toFixed(2)}</p>
                </div>
                <p className='text-lg font-semibold mt-1'> {top.item.data.price} </p>
                <div className='w-full flex justify-center'> 
                    <img src={top.item.data.sparkline} className='w-20 h-10'/>
                </div>
                </div>
                </div>);
            })}
        </div>
    </div>
  )
}
