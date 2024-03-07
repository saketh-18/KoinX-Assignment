import React , {useState , useEffect} from 'react';
import axios from 'axios';
import TradingViewChart from './ChartWidget';


export default function MainChart() {
    const [coinData , setCoinData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
              params: {
                ids: 'bitcoin', 
                vs_currencies: 'usd,inr', 
                include_24hr_change: 'true',
                precision: 2, 
              },
            });
                const data = await response.data;
                setCoinData(data);
                console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      return (
        <div>
            {coinData && coinData.bitcoin && ( <>
                <div className='flex btc-logo-rank items-baseline bg-transparent sm:bg-white mt-10 p-3 ml-6 mr-6'>
                    <div className='flex'>
                        <img src='/Images/Bitcoin.svg.png' alt='bitcoin logo' className='w-8 h-8'/>
                        <p className='text-lg font-bold ml-3'>Bitcoin</p>
                        <p className='ml-2 text-gray-500 text-sm font-semibold '>BTC</p>
                        <p className='rank bg-gray-400 rounded-md p-1 text-white ml-3'> Rank #1 </p>
                    </div>
                </div>
                <div className='price-change-chart flex flex-col bg-white ml-6 mr-6 py-4 rounded-md'>
                    <div className='price-change flex items-baseline bg-white sm:rounded-none rounded-md'>
                        <div className='flex flex-col price-usd-inr'>
                            <p className='price-usd text-3xl font-semibold text-black ml-6'>$ {coinData.bitcoin.usd}</p>
                            <p className='price-inr text-lg font-semibold text-gray-400 ml-6'>₹ {coinData.bitcoin.inr}</p>
                        </div>
                        <div className='change ml-4 flex'>
                            <p className='change-pt px-2 text-green-500 ml-3 rounded-md'>{coinData.bitcoin.usd_24h_change.toFixed(2)}%</p> 
                            <p className='text-gray-400 ml-3'> (24H)</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <hr className='w-full mt-2 ml-6 mr-6'/>
                    </div>
                    <div className='ml-6 mr-6 mt-6 '>
                        <TradingViewChart />
                    </div>
                </div>
                </>
            )}
        </div>
    )
            }