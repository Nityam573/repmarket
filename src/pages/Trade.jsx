import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaFilter,
  FaChartLine,
  FaExchangeAlt,
  FaUserCircle,
} from "react-icons/fa";
import { SwapWidget } from "@uniswap/widgets";

const Trade = () => {
  const [activeTab, setActiveTab] = useState("swap");
  const [fromValue, setFromValue] = useState("0.0");
  const [toValue, setToValue] = useState("0.0");
  const [slippageTolerance, setSlippageTolerance] = useState(49);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

    const theme = {
    primary: "#5D8EF7",    // Blue for connect wallet button
    secondary: "#FFFFFF",  
    interactive: "#5D8EF7", 
    container: "#FFFFFF",
    module: "#FFFFFF",
    accent: "#5D8EF7",
    outline: "#F9F9F9",
    dialog: "#FFFFFF",
    fontFamily: "Inter, sans-serif",
    borderRadius: 0.75,
  };
  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // My token list
  const MY_TOKEN_LIST = [
    {
      name: "Dai Stablecoin",
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      symbol: "DAI",
      decimals: 18,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
    },
    {
      name: "Tether USD",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      symbol: "USDT",
      decimals: 6,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
    },
    {
      name: "USD Coin",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      symbol: "USDC",
      decimals: 6,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
    },
  ];

  // Mock data for trade listings
  const tradeListings = [
    {
      id: 1,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      price: "$7.22",
    },
    {
      id: 2,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      price: "$7.22",
    },
    {
      id: 3,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      price: "$7.22",
    },
    {
      id: 4,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      price: "$7.22",
    },
    {
      id: 5,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      price: "$7.22",
    },
    {
      id: 6,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      price: "$7.22",
    },
    {
      id: 7,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      price: "$7.22",
    },
    {
      id: 8,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      price: "$7.22",
    },
  ];

  const filteredTradeListings = tradeListings.filter((listing) =>
    listing.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render mobile row - updated to match design in screenshot
  const renderMobileRow = (listing) => {
    return (
      <div
        key={listing.id}
        className="p-4 bg-white border border-gray-100 rounded-lg mb-3 shadow-sm"
      >
        <div className="flex items-center mb-3">
          <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden mr-2 flex-shrink-0">
            <img
              src="profilephoto.png"
              alt="User"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-sm text-gray-700">{listing.user}</span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <span className="text-sm font-medium">Ticket/CA</span>
            <button className="ml-1">
              <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <img src="eth.png" alt="ETH" className="h-4 w-4 mr-1" />
            <span className="text-sm text-gray-700">{listing.ticket}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium">Price</span>
          <span className="text-sm text-gray-700">{listing.price}</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <button className="py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm font-medium">
            Buy
          </button>
          <button className="py-2 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition text-sm font-medium">
            Sell
          </button>
        </div>
      </div>
    );
  };

  // Custom swap interface for mobile
  const renderMobileSwapInterface = () => {
    return (
      <div className="bg-white p-4 rounded-lg mb-4">
        {/* Tabs */}
        <div className="flex mb-6 bg-gray-100 p-1 rounded-lg">
          <button
            className={`flex-1 py-2 text-center rounded-lg ${activeTab === 'swap' ? 'bg-white font-medium shadow-sm' : 'text-gray-500'}`}
            onClick={() => setActiveTab('swap')}
          >
            Swap
          </button>
          <button
            className={`flex-1 py-2 text-center rounded-lg ${activeTab === 'pool' ? 'bg-white font-medium shadow-sm' : 'text-gray-500'}`}
            onClick={() => setActiveTab('pool')}
          >
            Pool
          </button>
        </div>

        {/* From field */}
        <div className="mb-2">
          <div className="text-sm font-medium mb-2 text-gray-700">From</div>
          <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
            <input
              type="text"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              className="text-2xl w-1/2 focus:outline-none"
              placeholder="0.0"
            />
            <button className="flex items-center bg-blue-100 rounded-full px-3 py-1">
              <div className="h-6 w-6 rounded-full bg-blue-500 mr-1 flex items-center justify-center">
                <span className="text-white text-xs">Ξ</span>
              </div>
              <span className="mr-1 font-medium">ETH</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swap button */}
        <div className="flex justify-center -my-2 relative z-10">
          <button className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>

        {/* To field */}
        <div className="mb-4">
          <div className="text-sm font-medium mb-2 text-gray-700">To</div>
          <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
            <input
              type="text"
              value={toValue}
              onChange={(e) => setToValue(e.target.value)}
              className="text-2xl w-1/2 focus:outline-none"
              placeholder="0.0"
            />
            <button className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <span className="mr-1">Select a token</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slippage tolerance */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">Slippage Tolerance</span>
          <span className="text-sm text-gray-700">{slippageTolerance}%</span>
        </div>

        {/* Connect wallet button */}
        <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium flex items-center justify-center">
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          Connect wallet
        </button>
      </div>
    );
  };

  // Loading shimmer for table rows
  const renderLoadingShimmer = () => {
    return (
      <div className="space-y-1">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-4 px-4 py-4 border-b border-gray-200"
            style={{
              maxWidth: "100%",
              gridTemplateColumns: "1.2fr 1.5fr 0.8fr 1fr",
            }}
          >
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full loading-shimmer mr-2"></div>
              <div className="h-4 w-24 loading-shimmer"></div>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-20 loading-shimmer"></div>
            </div>
            <div className="h-4 w-12 loading-shimmer"></div>
            <div>
              <div className="flex space-x-2">
                <div className="h-8 w-16 loading-shimmer rounded-lg"></div>
                <div className="h-8 w-16 loading-shimmer rounded-lg"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Loading shimmer for mobile view
  const renderMobileLoadingShimmer = () => {
    return (
      <div className="space-y-3">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm mb-3"
          >
            <div className="flex items-center mb-3">
              <div className="h-8 w-8 rounded-full loading-shimmer mr-2"></div>
              <div className="h-4 w-24 loading-shimmer"></div>
            </div>

            <div className="flex justify-between items-center mb-2">
              <div className="h-4 w-20 loading-shimmer"></div>
              <div className="h-4 w-24 loading-shimmer"></div>
            </div>

            <div className="flex justify-between items-center mb-3">
              <div className="h-4 w-12 loading-shimmer"></div>
              <div className="h-4 w-16 loading-shimmer"></div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="h-10 loading-shimmer rounded-lg"></div>
              <div className="h-10 loading-shimmer rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden font-sans">
      <div className="p-4 sm:p-6">
        
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          {/* Right side - Swap interface */}
          <div className="w-full lg:w-2/5 lg:h-[450px] mt-6 lg:mt-0">
            <div className="bg-white border border-gray-100 rounded-lg p-0 hidden min-[980px]:block">
              <div className="bg-gray-50 p-1 rounded-t-lg mb-0">
                <div className="grid grid-cols-2">
                  <button 
                    className={`py-3 text-center rounded-lg font-medium text-lg ${activeTab === 'swap' ? '' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('swap')}
                  >
                    Swap
                  </button>
                  <button 
                    className={`py-3 text-center rounded-lg font-medium text-lg ${activeTab === 'pool' ? '' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('pool')}
                  >
                    Pool
                  </button>
                </div>
              </div>
              
              {/* Uniswap Widget */}
              <div className="uniswap-widget-container h-[450px] px-4 pb-4">
                {activeTab === 'swap' && (
                  <SwapWidget
                    theme={theme}
                    width="100%"
                    className="uniswap-widget"
                    defaultInputTokenAddress="NATIVE"
                    defaultInputAmount="0"
                    tokenList={MY_TOKEN_LIST}
                  />
                )}
              </div>
              
              {/* Custom styling to match screenshot exactly */}
              <style jsx global>{`
                /* Container styling */
                .uniswap-widget {
                  padding: 0 !important;
                  margin: 0 !important;
                  border: none !important;
                  box-shadow: none !important;
                  height: 100% !important;
                }
                
                /* You pay / You receive text */
                .uniswap-widget div:has(input) > div:first-child {
                  font-size: 18px !important;
                  font-weight: 400 !important;
                  color: #000000 !important;
                }
                
                /* Input field */
                .uniswap-widget input {
                  font-size: 36px !important;
                  color: #5D8EF7 !important;
                  font-weight: 400 !important;
                }
                
                /* ETH button */
                .uniswap-widget button[data-testid="token-select-button"] {
                  background-color: #000000 !important;
                  border-color: #000000 !important;
                  border-radius: 9999px !important;
                  color: white !important;
                  padding: 8px 16px !important;
                }

                .ihoxvx{
                  height: 60px !important;
                }
                
                /* Select token button */
                .uniswap-widget button[data-testid="token-select-button"]:contains("Select token") {
                  background-color: #000000 !important;
                  border-color: #000000 !important;
                  border-radius: 9999px !important;
                  color: white !important;
                  padding: 8px 16px !important;
                }
                
                /* Swap arrows */
                .uniswap-widget button[data-testid="swap-button"] {
                  width: 40px !important;
                  height: 40px !important;
                  background: transparent !important;
                  border: 1px solid #E5E7EB !important;
                  border-radius: 9999px !important;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.05) !important;
                }
                
                /* Connect wallet button styling */
                .uniswap-widget button[data-testid="connect-wallet"] {
                  background-color: #5D8EF7 !important;
                  border-color: #5D8EF7 !important;
                  border-radius: 0.5rem !important;
                  font-family: Inter, sans-serif !important;
                  font-size: 18px !important;
                  padding: 16px !important;
                  margin-top: 30px !important;
                }
                
                .uniswap-widget button[data-testid="connect-wallet"] div {
                  color: #FFFFFF !important;
                  font-family: Inter, sans-serif !important;
                  font-weight: 500 !important;
                }
                
                /* Powered by Uniswap text */
                .uniswap-widget div[data-testid="swap-uniswap-link"] {
                  font-size: 14px !important;
                  color: #666666 !important;
                  margin-top: 12px !important;
                  text-align: center !important;
                }
                
                /* Make sure fonts are consistent */
                .uniswap-widget * {
                  font-family: Inter, sans-serif !important;
                }
                
                /* Divider lines */
                .uniswap-widget div:has(> input) {
                  border-bottom: 1px solid #F0F0F0 !important;
                  margin-bottom: 0 !important;
                  padding: 16px 0 !important;
                }
              `}</style>
            </div>
            
            {/* Mobile Swap Interface - Use Uniswap Widget with exact styling to match screenshot */}
            <div className="min-[980px]:hidden">
              <div className="bg-gray-50 p-1 rounded-t-lg mb-0">
                <div className="grid grid-cols-2">
                  <button 
                    className={`py-3 text-center rounded-lg font-medium text-lg ${activeTab === 'swap' ? '' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('swap')}
                  >
                    Swap
                  </button>
                  <button 
                    className={`py-3 text-center rounded-lg font-medium text-lg ${activeTab === 'pool' ? '' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('pool')}
                  >
                    Pool
                  </button>
                </div>
              </div>
              
              {/* Uniswap Widget for Mobile */}
              <div className="uniswap-widget-container-mobile px-4 pb-4">
                {activeTab === 'swap' && (
                  <SwapWidget
                    theme={theme}
                    width="100%"
                    className="uniswap-widget-mobile"
                    defaultInputTokenAddress="NATIVE"
                    defaultInputAmount="0"
                    tokenList={MY_TOKEN_LIST}
                  />
                )}
              </div>
              
              {/* Use the same styling as desktop to ensure consistency */}
              <style jsx global>{`
                /* Container styling */
                .uniswap-widget-mobile {
                  padding: 0 !important;
                  margin: 0 !important;
                  border: none !important;
                  box-shadow: none !important;
                }
                
                /* You pay / You receive text */
                .uniswap-widget-mobile div:has(input) > div:first-child {
                  font-size: 18px !important;
                  font-weight: 400 !important;
                  color: #000000 !important;
                }
                
                /* Input field */
                .uniswap-widget-mobile input {
                  font-size: 36px !important;
                  color: #5D8EF7 !important;
                  font-weight: 400 !important;
                }
                
                /* ETH button */
                .uniswap-widget-mobile button[data-testid="token-select-button"] {
                  background-color: #000000 !important;
                  border-color: #000000 !important;
                  border-radius: 9999px !important;
                  color: white !important;
                  padding: 8px 16px !important;
                }
                
                /* Select token button */
                .uniswap-widget-mobile button[data-testid="token-select-button"]:contains("Select token") {
                  background-color: #000000 !important;
                  border-color: #000000 !important;
                  border-radius: 9999px !important;
                  color: white !important;
                  padding: 8px 16px !important;
                }
                
                /* Swap arrows */
                .uniswap-widget-mobile button[data-testid="swap-button"] {
                  width: 40px !important;
                  height: 40px !important;
                  background: transparent !important;
                  border: 1px solid #E5E7EB !important;
                  border-radius: 9999px !important;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.05) !important;
                }
                
                /* Connect wallet button styling */
                .uniswap-widget-mobile button[data-testid="connect-wallet"] {
                  background-color: #5D8EF7 !important;
                  border-color: #5D8EF7 !important;
                  border-radius: 0.5rem !important;
                  font-family: Inter, sans-serif !important;
                  font-size: 18px !important;
                  padding: 16px !important;
                  margin-top: 16px !important;
                }
                
                .uniswap-widget-mobile button[data-testid="connect-wallet"] div {
                  color: #FFFFFF !important;
                  font-family: Inter, sans-serif !important;
                  font-weight: 500 !important;
                }
                
                /* Powered by Uniswap text */
                .uniswap-widget-mobile div[data-testid="swap-uniswap-link"] {
                  font-size: 14px !important;
                  color: #666666 !important;
                  margin-top: 12px !important;
                  text-align: center !important;
                }
                
                /* Make sure fonts are consistent */
                .uniswap-widget-mobile * {
                  font-family: Inter, sans-serif !important;
                }
                
                /* Divider lines */
                .uniswap-widget-mobile div:has(> input) {
                  border-bottom: 1px solid #F0F0F0 !important;
                  margin-bottom: 0 !important;
                  padding: 16px 0 !important;
                }
              `}</style>
            </div>
          </div>
          
          {/* Left side - Trade listings */}
          <div className="w-full lg:w-3/5">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search X account"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 min-[980px]:hidden">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop View (screen width >= 980px) */}
            <div className="hidden max-[979px]:hidden min-[980px]:block">
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                {/* Table Header */}
                <div className="bg-gray-50 rounded-t-lg overflow-hidden border-b border-gray-200">
                  <div
                    className="grid grid-cols-4 px-4 py-3"
                    style={{
                      maxWidth: "100%",
                      gridTemplateColumns: "1.2fr 1.5fr 0.8fr 1fr",
                    }}
                  >
                    <div className="text-sm font-medium text-gray-700">X</div>
                    <div className="text-sm font-medium text-gray-700">
                      Ticket/CA
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      <div className="flex">
                        <div className="text-sm text-left font-medium text-gray-700">
                          Price
                        </div>
                        <button>
                          <svg
                            className="ml-1 h-4 w-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      Action
                    </div>
                  </div>
                </div>

                {/* Table Body */}
                {isLoading ? (
                  renderLoadingShimmer()
                ) : filteredTradeListings.length > 0 ? (
                  <div className="space-y-1 h-[50vh] overflow-y-auto">
                    <div className="space-y-1">
                      {filteredTradeListings.map((listing) => (
                        <div
                          key={listing.id}
                          className="grid grid-cols-4 px-4 py-4 border-b border-gray-200"
                          style={{
                            maxWidth: "100%",
                            gridTemplateColumns: "1.2fr 1.5fr 0.8fr 1fr",
                          }}
                        >
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden mr-2 flex-shrink-0">
                              <img
                                src="profilephoto.png"
                                alt="User"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <span className="text-sm truncate">
                              {listing.user}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="truncate">{listing.ticket}</span>
                            <button>
                              <svg
                                className="ml-2 h-4 w-4 text-gray-500 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                            </button>
                            <button>
                              <svg
                                className="ml-2 h-5 w-5 text-blue-500 flex-shrink-0"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                              </svg>
                            </button>
                          </div>
                          <div className="text-left">
                            <span className="text-left">{listing.price}</span>
                          </div>
                          <div>
                            <div className="flex space-x-2">
                              <button className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                                Buy
                              </button>
                              <button className="px-4 py-1 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition">
                                Sell
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <img
                      src="No_found.jpg"
                      alt="No_Result"
                      className="w-[15%] mb-3"
                    />
                    <p className="text-lg font-medium text-gray-700 mt-2">No results found</p>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Try searching with other keywords or make sure <br />
                      the account name is correct.
                    </p>
                    <div className="flex items-center mt-4">
                      <input
                        type="text"
                        defaultValue="@Lorem ipsum"
                        placeholder="@Username"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-64 text-gray-500"
                      />
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition ml-3">
                        Launch
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile View (screen width < 980px) */}
            <div className="min-[980px]:hidden ">
              {isLoading ? (
                renderMobileLoadingShimmer()
              ) : filteredTradeListings.length > 0 ? (
                filteredTradeListings.map((listing) => renderMobileRow(listing))
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center px-4">
                  <img
                    src="No_found.jpg"
                    alt="No_Result"
                    className="w-[40%] mb-3"
                  />
                  <p className="text-lg font-medium text-gray-700 mt-2">No results found</p>
                  <p className="text-sm text-gray-500 mt-1 mb-4">
                    Try searching with other keywords or make sure<br />the account name is correct.
                  </p>
                  <div className="w-full mt-2 mb-2">
                    <input
                      type="text"
                      defaultValue="@Lorem ipsum"
                      placeholder="@Username"
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-500 mb-3"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition w-full">
                      Launch
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;