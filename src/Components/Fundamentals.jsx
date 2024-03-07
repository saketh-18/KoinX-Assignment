import React, { useContext } from 'react';
import { TrendingContext } from './TrendingContext';
import CoinDetails from './CoinDetails';

export default function Fundamentals() {
    const { TrendingCoins } = useContext(TrendingContext);
    
    return (
        <>
            <p className='text-xl font-semibold mt-4 ml-6'>Fundamentals</p>
            <div className='flex justify-between mr-6 sm:flex-row flex-col'> 
                {TrendingCoins && TrendingCoins.length > 0 && (
                    <>
                        <CoinDetails />
                        <CoinDetails />
                    </>
                )}
            </div>
        </>
    );
}
