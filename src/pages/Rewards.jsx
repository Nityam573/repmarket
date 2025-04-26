import React, { useState, useEffect } from "react";

const Rewards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Mock data for rewards listings
  const listings = [
    {
      id: 1,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      contributed: "$0",
      earningsWithdraw: { crypto: "$7.22", usd: "$7.22" },
      earningsPending: { crypto: "$7.22", usd: "$7.22" },
      action: "Withdraw & Collect",
    },
    {
      id: 2,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      contributed: "$7.22",
      earningsWithdraw: { crypto: "$7.22", usd: "$7.22" },
      earningsPending: { crypto: "$7.22", usd: "$7.22" },
      action: "Collect",
    },
    {
      id: 3,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      contributed: "$7.22",
      earningsWithdraw: { crypto: "$7.22", usd: "$7.22" },
      earningsPending: { crypto: "$7.22", usd: "$7.22" },
      action: "Withdraw & Collect",
    },
    {
      id: 4,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      contributed: "$7.22",
      earningsWithdraw: { crypto: "$7.22", usd: "$7.22" },
      earningsPending: { crypto: "$7.22", usd: "$7.22" },
      action: "Collect",
    },
    {
      id: 5,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      contributed: "$7.22",
      earningsWithdraw: { crypto: "$7.22", usd: "$7.22" },
      earningsPending: { crypto: "$7.22", usd: "$7.22" },
      action: "Withdraw & Collect",
    },
    {
      id: 6,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      contributed: "$7.22",
      earningsWithdraw: { crypto: "$7.22", usd: "$7.22" },
      earningsPending: { crypto: "$7.22", usd: "$7.22" },
      action: "Collect",
    },
    {
      id: 7,
      user: "@realdoanldtrump",
      ticket: "$blackrock",
      contributed: "$7.22",
      earningsWithdraw: { crypto: "$7.22", usd: "$7.22" },
      earningsPending: { crypto: "$7.22", usd: "$7.22" },
      action: "Withdraw & Collect",
    },
  ];

  // Render action button based on type
  const renderActionButton = (actionType) => {
    if (actionType === "Withdraw & Collect") {
      return (
        <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm">
          Withdraw & Collect
        </button>
      );
    } else {
      return (
        <button className="w-full py-2 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition text-sm">
          Collect
        </button>
      );
    }
  };

  // Render Wind down button
  const renderWindDownButton = () => {
    return (
      <button className="flex items-center justify-center py-2 px-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm text-gray-600">
        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        Wind down
      </button>
    );
  };

  // Render mobile row - updated to match the design in the image
  const renderMobileRow = (listing, index) => {
    return (
      <div key={listing.id} className="bg-white mb-4 p-4 rounded-lg shadow-md">
        {/* User info */}
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden mr-2 flex-shrink-0">
            <img
              src="profilephoto.png"
              alt="User"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-sm text-gray-700">{listing.user}</span>
        </div>

        {/* Ticket/CA */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="text-sm mr-1">Ticket/CA</span>
            <div className="flex">
              <button className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center ml-1">
                <svg className="h-3 w-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
              </button>
            </div>
          </div>
          <span className="text-sm text-blue-600">{listing.ticket}</span>
        </div>

        {/* You Contributed */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm">You Contributed</span>
          <div className="flex items-center">
            <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-1 flex-shrink-0">
              <img src="dallar.png" alt="USDC" />
            </div>
            <span className="text-sm text-gray-700">{listing.contributed}</span>
          </div>
        </div>

        {/* Earnings Withdraw */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm">Earnings Withdraw</span>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-1 flex-shrink-0">
                <img src="dallar.png" alt="USDC" />
              </div>
              <span className="text-sm text-gray-700">{listing.earningsWithdraw.crypto}</span>
            </div>
            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-1 flex-shrink-0">
                <img src="eth.png" alt="ETH" />
              </div>
              <span className="text-sm text-gray-700">{listing.earningsWithdraw.usd}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between space-x-2 mt-4">
          <div className="flex-1">
            {listing.action === "Withdraw & Collect" ? (
              <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm">
                Withdraw & Collect
              </button>
            ) : (
              <button className="w-full py-2 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition text-sm">
                Collect
              </button>
            )}
          </div>
          <div>
            {renderWindDownButton()}
          </div>
        </div>
      </div>
    );
  };

  const filteredListings = listings.filter((listing) =>
    listing.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading shimmer for table rows
  const renderLoadingShimmer = () => {
    return (
      <div className="space-y-1">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-6 px-4 py-4 border-b border-gray-200"
            style={{
              minWidth: "900px",
              gridTemplateColumns: "1fr 1fr 0.8fr 1fr 1fr 0.8fr",
            }}
          >
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full loading-shimmer mr-2"></div>
              <div className="h-4 w-24 loading-shimmer"></div>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-20 loading-shimmer"></div>
              <div className="flex ml-2">
                <div className="h-5 w-5 rounded-full loading-shimmer"></div>
                <div className="h-5 w-5 rounded-full loading-shimmer ml-1"></div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full loading-shimmer mr-2"></div>
              <div className="h-4 w-12 loading-shimmer"></div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full loading-shimmer mr-1"></div>
                <div className="h-4 w-12 loading-shimmer"></div>
              </div>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full loading-shimmer mr-1"></div>
                <div className="h-4 w-12 loading-shimmer"></div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full loading-shimmer mr-1"></div>
                <div className="h-4 w-12 loading-shimmer"></div>
              </div>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full loading-shimmer mr-1"></div>
                <div className="h-4 w-12 loading-shimmer"></div>
              </div>
            </div>
            <div>
              <div className="h-8 w-24 loading-shimmer rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Loading shimmer for mobile view
  const renderMobileLoadingShimmer = () => {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm mb-4"
          >
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full loading-shimmer mr-2"></div>
              <div className="h-4 w-24 loading-shimmer"></div>
            </div>

            <div className="flex justify-between mb-3">
              <div className="h-4 w-16 loading-shimmer"></div>
              <div className="h-4 w-20 loading-shimmer"></div>
            </div>

            <div className="flex justify-between mb-3">
              <div className="h-4 w-24 loading-shimmer"></div>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full loading-shimmer mr-1"></div>
                <div className="h-4 w-12 loading-shimmer"></div>
              </div>
            </div>

            <div className="flex justify-between mb-3">
              <div className="h-4 w-28 loading-shimmer"></div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full loading-shimmer mr-1"></div>
                  <div className="h-4 w-12 loading-shimmer"></div>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full loading-shimmer mr-1"></div>
                  <div className="h-4 w-12 loading-shimmer"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-between space-x-2 mt-4">
              <div className="flex-1">
                <div className="h-8 w-full loading-shimmer rounded-lg"></div>
              </div>
              <div>
                <div className="h-8 w-24 loading-shimmer rounded-lg"></div>
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

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search X account"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        {/* Scrollable Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg hidden max-[979px]:hidden min-[980px]:block">
          {/* Table Header */}
          <div className="bg-gray-50 rounded-t-lg overflow-hidden border-b border-gray-200">
            <div
              className="grid grid-cols-6 px-4 py-3"
              style={{
                minWidth: "900px",
                gridTemplateColumns: "1fr 1fr 0.8fr 1fr 1fr 0.8fr",
              }}
            >
              <div className="text-sm font-medium text-gray-700">X</div>
              <div className="text-sm font-medium text-gray-700">Ticket/CA</div>
              <div className="text-sm font-medium text-gray-700">
                You Contributed
              </div>
              <div className="text-sm font-medium text-gray-700">
                Earnings Withdraw
              </div>
              <div className="text-sm font-medium text-gray-700">
                Earnings Pending
              </div>
              <div className="text-sm font-medium text-gray-700">Action</div>
            </div>
          </div>

          {/* Table Body */}
          {isLoading ? (
            renderLoadingShimmer()
          ) : filteredListings.length > 0 ? (
            <div className="space-y-1 h-[50vh] overflow-y-auto">
              <div className="space-y-1">
                {filteredListings.map((listing, index) => (
                  <div
                    key={listing.id}
                    className={`grid grid-cols-6 px-4 py-4 border-b border-gray-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    style={{
                      minWidth: "900px",
                      gridTemplateColumns: "1fr 1fr 0.8fr 1fr 1fr 0.8fr",
                    }}
                  >
                    {/* User */}
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden mr-2 flex-shrink-0">
                        <img
                          src="profilephoto.png"
                          alt="User"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="text-sm truncate">{listing.user}</span>
                    </div>

                    {/* Ticket/CA */}
                    <div className="flex items-center">
                      <span className="truncate">{listing.ticket}</span>
                      <div className="flex ml-2">
                        <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center">
                          <button>
                            <svg
                              className="h-3 w-3 text-gray-600"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                            </svg>
                          </button>
                        </div>
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center ml-1">
                          <button>
                            <svg
                              className="h-3 w-3 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* You Contributed */}
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                        <img src="dallar.png" alt="USDC" />
                      </div>
                      <span className="text-sm text-gray-700">
                        {listing.contributed}
                      </span>
                    </div>

                    {/* Earnings Withdraw */}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-1 flex-shrink-0">
                          <img src="dallar.png" alt="USDC" />
                        </div>
                        <span className="text-sm text-gray-700">
                          {listing.earningsWithdraw.crypto}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-1 flex-shrink-0">
                          <img src="eth.png" alt="USDC" />
                        </div>
                        <span className="text-sm text-gray-700">
                          {listing.earningsWithdraw.usd}
                        </span>
                      </div>
                    </div>

                    {/* Earnings Pending */}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-1 flex-shrink-0">
                          <img src="dallar.png" alt="USDC" />
                        </div>
                        <span className="text-sm text-gray-700">
                          {listing.earningsPending.crypto}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-1 flex-shrink-0">
                          <img src="eth.png" alt="USDC" />
                        </div>
                        <span className="text-sm text-gray-700">
                          {listing.earningsPending.usd}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div>{renderActionButton(listing.action)}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-center" style={{ height: '400px' }}>
              <img src="No_found.jpg" alt="No token" className="w-[15%] mb-3" />
              <p className="text-lg font-medium text-gray-700 mt-2">No token available</p>
              <p className="text-sm text-gray-500 mt-1 mb-4">
                Lorem ipsum dolor sit amet elit. for @[address]
              </p>
                <div className="flex items-center mt-4">
                  <input
                    type="text"
                    defaultValue="@Lorem ipsum"
                    placeholder="@Username"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-64 text-gray-500"
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition ml-3">
                    Launch Token
                  </button>
                </div>
            </div>
          )}
        </div>

        {/* Mobile View (screen width < 980px) */}
        <div className="min-[980px]:hidden">
          {isLoading ? (
            renderMobileLoadingShimmer()
          ) : filteredListings.length > 0 ? (
            filteredListings.map((listing, index) =>
              renderMobileRow(listing, index)
            )
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center px-4">
              <img src="No_found.jpg" alt="No token" className="w-[40%] mb-4" />
              <p className="text-lg font-medium text-gray-700 mt-2">No token available</p>
              <p className="text-sm text-gray-500 mt-2 mb-5">
                Lorem ipsum dolor sit amet elit.<br />for @[address]
              </p>
              <div className="w-full mt-2 mb-2">
                <input
                  type="text"
                  defaultValue="@Lorem ipsum"
                  placeholder="@Username"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full text-center text-gray-500"
                />
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition mt-2">
                Launch Token
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rewards;