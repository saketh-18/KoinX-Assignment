import React, { useContext } from 'react';
import { TrendingContext } from './TrendingContext'

export default function CoinDetails() {
    const { TrendingCoins } = useContext(TrendingContext);

    return (
        <>
            {TrendingCoins && TrendingCoins.length > 0 && (
                <div className='flex flex-col ml-6 sm:w-1/2 mb-6 w-full mr-6 sm:mr-0'> 
                    <div className='flex justify-between btc-attributes'>
                        <p>Market Cap:</p>
                        <p> {TrendingCoins[0].item.data.market_cap}</p>
                    </div> 
                    <hr className='w-full self-center'/>
                    <div className='flex justify-between btc-attributes'>
                        <p>Price :</p>
                        <p> {TrendingCoins[0].item.data.price}</p>
                    </div> 
                    <hr className='w-full self-center'/>
                    <div className='flex justify-between btc-attributes'>
                        <p>Price BTC:</p>
                        <p> {TrendingCoins[0].item.data.price_btc}</p>
                    </div> 
                    <hr className='w-full self-center'/>
                    <div className='flex justify-between btc-attributes'>
                        <p>Price Change %:</p>
                        <p> {TrendingCoins[0].item.data.price_change_percentage_24h.usd}</p>
                    </div> 
                    <hr className='w-full self-center'/>
                    <div className='flex justify-between btc-attributes'>
                        <p>Total Volume:</p>
                        <p> {TrendingCoins[0].item.data.total_volume}</p>
                    </div> 
                    <hr className='w-full self-center'/>
                    <div className='flex justify-between btc-attributes'>
                        <p>Total Volume BTC:</p>
                        <p> {TrendingCoins[0].item.data.total_volume_btc}</p>
                    </div> 
                    <hr className='w-full self-center'/>
                </div>
            )}
        </>
    )
}
