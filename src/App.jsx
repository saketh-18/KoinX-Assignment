import React from 'react';
import './App.css';
import MainChart from './Components/MainChart';
import AboutBitcoin from './Components/AboutBitcoin';
import Team from './Components/Team';
import Trending from './Components/Trending';
import NavBar from './Components/NavBar';
import Insights from './Components/Insights';
import Tokenomics from './Components/Tokenomics';
import TrendingContextProvider from './Components/TrendingContext';
import Ymal from './Components/Ymal';
import Overview from './Components/Overview';
import HorizontalMenu from './Components/HorizontalMenu';
import AdDialog from './Components/AdDialog';
import Path from './Components/Path';

function App() {


  return (
    <>
    <TrendingContextProvider>
      <div className='flex flex-col w-full bg-slate-200 outer-container'>
        <NavBar />
        <div className='w-full flex ml-2  sm:flex-row flex-col'>
        <div className='w-full sm:w-4/6'>
          <Path />
          <MainChart />
          <HorizontalMenu />
          <Overview />
          <Insights />
          <AboutBitcoin />
          <Tokenomics />
          <Team />  
      </div>
        <div className='w-full sm:w-1/3'>
          <AdDialog />
          <Trending />
        </div>
      </div>
      <Ymal />
      </div>
    </TrendingContextProvider>
    </>
  )
}

export default App
