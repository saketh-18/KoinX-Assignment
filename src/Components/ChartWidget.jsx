import React, { useEffect } from 'react';
    
    const TradingViewChart = () => {
        useEffect(() => {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/tv.js';
            script.async = true;
            script.onload = () => {
                new window.TradingView.widget({
                    "autosize": true,
                    "symbol": "BINANCE:BTCUSDT",
                    "interval": "W",
                    "timezone": "Etc/UTC",
                    "theme": "light",
                    "style": "2", // Change to line chart style
                    "locale": "en",
                    "hide_top_toolbar": true,
                    "enable_publishing": false,
                    "hide_legend": true,
                    "hide_side_toolbar": true, // Hide top toolbar
                    "withdateranges": true,
                    "hide_volume": true,
                    "container_id": "tv_chart_container"
                });
            };
            document.body.appendChild(script);
    
            return () => {
                document.body.removeChild(script);
            };
        }, []);
    
        return (
            <div id="tv_chart_container" style={{ width: '100%', height: '600px' }}></div>
        );
    };
    
    export default TradingViewChart;
    
