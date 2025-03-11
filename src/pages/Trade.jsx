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
    primary: "#000000",
    secondary: "#000000",
    interactive: "#2196F3",
    container: "#FFF",
    module: "#FFF",
    accent: "#8E8B78",
    outline: "#CADDC2",
    dialog: "#FFF",
    fontFamily: "sans-serif",
    borderRadius: 0.8,
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

  // Render mobile row
  const renderMobileRow = (listing) => {
    return (
      <div
        key={listing.id}
        className="p-4 border border-gray-200 rounded-md mb-3"
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

        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <div className="text-xs text-gray-500 mb-1">Ticket/CA</div>
            <div className="flex items-center">
              <span className="text-sm text-gray-700">{listing.ticket}</span>
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
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-1">Price</div>
            <div className="flex items-center">
              <span className="text-sm text-gray-700">{listing.price}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-1">Action</div>
          <div className="flex space-x-2">
            <button className="flex-1 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm text-center">
              Buy
            </button>
            <button className="flex-1 py-1 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition text-sm text-center">
              Sell
            </button>
          </div>
        </div>
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
              minWidth: "700px",
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
            className="p-4 border border-gray-200 rounded-md mb-3"
          >
            <div className="flex items-center mb-3">
              <div className="h-8 w-8 rounded-full loading-shimmer mr-2"></div>
              <div className="h-4 w-24 loading-shimmer"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <div className="h-3 w-16 loading-shimmer mb-2"></div>
                <div className="h-4 w-20 loading-shimmer"></div>
              </div>

              <div>
                <div className="h-3 w-16 loading-shimmer mb-2"></div>
                <div className="h-4 w-12 loading-shimmer"></div>
              </div>
            </div>

            <div>
              <div className="h-3 w-16 loading-shimmer mb-2"></div>
              <div className="flex space-x-2">
                <div className="flex-1 h-8 loading-shimmer rounded-lg"></div>
                <div className="flex-1 h-8 loading-shimmer rounded-lg"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden font-sans">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
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
                      minWidth: "700px",
                      gridTemplateColumns: "1.2fr 1.5fr 0.8fr 1fr",
                    }}
                  >
                    <div className="text-sm font-medium text-gray-700">X</div>
                    <div className="text-sm font-medium text-gray-700">
                      Ticket/CA
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      <div className="flex items-center">
                        Price
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
                  <div className="space-y-1">
                    {filteredTradeListings.map((listing) => (
                      <div
                        key={listing.id}
                        className="grid grid-cols-4 px-4 py-4 border-b border-gray-200"
                        style={{
                          minWidth: "700px",
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
                          <svg
                            className="ml-2 h-5 w-5 text-blue-500 flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                        </div>
                        <div>{listing.price}</div>
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
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 h-64 text-center">
                    <svg
                      className="h-16 w-16 text-gray-300 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m5-6l3 3-3 3"
                      />
                    </svg>
                    <p className="text-lg text-gray-500">No results found</p>
                    <p className="text-sm text-gray-400">
                      Try searching with other keywords or make sure the account
                      name is correct.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile View (screen width < 980px) */}
            <div className="min-[980px]:hidden space-y-3">
              {isLoading ? (
                renderMobileLoadingShimmer()
              ) : filteredTradeListings.length > 0 ? (
                filteredTradeListings.map((listing) => renderMobileRow(listing))
              ) : (
                <div className="flex flex-col items-center justify-center py-20 h-64 text-center">
                  <svg
                    className="h-16 w-16 text-gray-300 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5-6l3 3-3 3"
                    />
                  </svg>
                  <p className="text-lg text-gray-500">No results found</p>
                  <p className="text-sm text-gray-400">
                    Try searching with other keywords or make sure the account
                    name is correct.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Swap interface */}
          <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <SwapWidget
                theme={theme}
                width="100%"
                className="uniswap-widget"
                defaultInputTokenAddress="NATIVE"
                defaultInputAmount="0"
                tokenList={MY_TOKEN_LIST}
              />
              <style>
              {`
                button[data-testid="connect-wallet"] {
                  background-color: #3B82F6;
                  border-color: #3B82F6;
                }
                button[data-testid="connect-wallet"] div {
                  color: #FFFFFF;
                }
              `}
              </style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
