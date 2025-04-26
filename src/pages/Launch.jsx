import React, { useState, useEffect } from "react";

const Launch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Mock data for listings
  const listings = [
    {
      id: 1,
      user: "@realdoanldtrump",
      progress: "0/500 $USDC",
      progressValue: 0,
      maxValue: 500,
      contributed: "$7.22",
      yourContribution: "0.0",
    },
    {
      id: 2,
      user: "@realdoanldtrump",
      progress: "50/500 $USDC",
      progressValue: 50,
      maxValue: 500,
      contributed: "$7.22",
      yourContribution: "0.0",
    },
    {
      id: 3,
      user: "@realdoanldtrump",
      progress: "50/500 $USDC",
      progressValue: 50,
      maxValue: 500,
      contributed: "$7.22",
      yourContribution: "0.0",
    },
    {
      id: 4,
      user: "@realdoanldtrump",
      progress: "50/500 $USDC",
      progressValue: 10,
      maxValue: 500,
      contributed: "7.22",
      yourContribution: "0.0",
    },
    {
      id: 5,
      user: "@realdoanldtrump",
      progress: "550/500 $USDC ",
      progressValue: 550,
      maxValue: 500,
      contributed: "$7.22",
      yourContribution: "0.0",
      capReached: true,
      timeRemaining: "0:58",
    },
    {
      id: 6,
      user: "@realdoanldtrump",
      progress: "50/500 $USDC",
      progressValue: 50,
      maxValue: 500,
      contributed: "$7.22",
      yourContribution: "0.0",
    },
  ];

  const filteredListings = listings.filter((listing) =>
    listing.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate progress percentage
  const getProgressPercentage = (current, max) => {
    const percentage = (current / max) * 100;
    return Math.min(percentage, 100); // Cap at 100%
  };

  // Render buttons with consistent width
  const renderActionButtons = (index) => {
    return (
      <div className="flex space-x-2 mx-2">
        <button className="w-[100px] py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm text-center">
          Send
        </button>
        <button className="w-[100px] py-1 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition text-sm text-center">
          Withdraw
        </button>
      </div>
    );
  };

  // Render mobile row
  const renderMobileRow = (listing, index) => {
    return (
      <div
        key={listing.id}
        className={`p-4 border border-gray-200 mb-3 rounded-md ${
          index % 2 === 0 ? "bg-white" : "bg-gray-50"
        }`}
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

        <div className="grid grid-cols-1 gap-4 mb-3">
          <div className="flex flex-row justify-between">
          <div className="text-xs text-black-500 mb-1 font-semibold">You Contributed</div>
            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
              <img src="dallar.png" alt="" />
              </div>
              <span className="text-sm text-gray-700">
                {listing.contributed}
              </span>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-700 mb-1">
              {listing.progress}
              {listing.capReached && (
                <>
                  Cap Reached! <span className="text-red-500">{listing.timeRemaining}</span> remains!
                </>
              )}
            </div>
            <div className="w-full bg-blue-100 h-6 rounded-[5px]">
              <div
                className={`h-6 rounded-[5px] ${
                  listing.capReached ? "bg-red-500 ticking-bar" : "bg-blue-500"
                }`}
                style={{
                  width: `${getProgressPercentage(
                    listing.progressValue,
                    listing.maxValue
                  )}%`,
                }}
              ></div>
            </div>

        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="flex flex-row justify-between">
            <div className="text-xs text-black-500 mb-1 font-semibold">Contribute</div>
            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-2 flex-shrink-0">
                <img src="dallar.png" alt="USDC image" />
              </div>
              <span className="text-sm text-gray-700">
                {listing.yourContribution}
              </span>
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-1"></div>
            <div className="flex space-x-2">
              <button className="flex-1 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm text-center">
                Send
              </button>
              <button className="flex-1 py-1 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition text-sm text-center">
                Withdraw
              </button>
            </div>
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
            className="grid grid-cols-5 px-4 py-4 border border-gray-200 rounded-md"
          >
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full loading-shimmer mr-2"></div>
              <div className="h-4 w-24 loading-shimmer"></div>
            </div>

            <div className="flex flex-col pr-4">
              <div className="h-4 w-32 loading-shimmer mb-1"></div>
              <div className="w-full bg-blue-100 h-6 rounded-[5px]">
                <div
                  className="h-6 rounded-[5px] loading-shimmer"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full loading-shimmer mr-2"></div>
              <div className="h-4 w-12 loading-shimmer"></div>
            </div>

            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full loading-shimmer mr-2"></div>
              <div className="h-4 w-12 loading-shimmer"></div>
            </div>

            <div className="flex space-x-2">
              <div className="w-[72px] h-8 loading-shimmer rounded-lg"></div>
              <div className="w-[72px] h-8 loading-shimmer rounded-lg"></div>
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
                <div className="h-4 w-32 loading-shimmer mb-1"></div>
                <div className="w-full bg-blue-100 h-6 rounded-[5px]">
                  <div
                    className="h-6 rounded-[5px] loading-shimmer"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="h-3 w-16 loading-shimmer mb-2"></div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full loading-shimmer mr-2"></div>
                  <div className="h-4 w-12 loading-shimmer"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="h-3 w-16 loading-shimmer mb-2"></div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full loading-shimmer mr-2"></div>
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
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm font-sans">
      <div className="p-4 sm:p-6 ">
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
          </div>
        </div>

        {/* Desktop View (screen width >= 980px) */}
        <div className="hidden max-[979px]:hidden min-[980px]:block ">
          {/* Table Header */}
          <div className="bg-gray-50 rounded-t-lg overflow-hidden border border-gray-200 border-b-0">
            <div className="grid grid-cols-5 px-4 py-3">
              <div className="text-sm font-medium text-gray-700">X</div>
              <div className="text-sm font-medium text-gray-700">
                Progress to cap
              </div>
              <div className="text-sm font-medium text-gray-700">
                You Contributed
              </div>
              <div className="text-sm font-medium text-gray-700">
                Contribute
              </div>
              <div className="text-sm font-medium text-gray-700">Action</div>
            </div>
          </div>

          {/* Table Body */}
          {isLoading ? (
            renderLoadingShimmer()
          ) : filteredListings.length > 0 ? (
            <div className="space-y-1 h-[50vh] overflow-y-auto">
              <div className="overflow-y-auto">
                {filteredListings.map((listing, index) => (
                  <div
                    key={listing.id}
                    className={`grid grid-cols-5 px-4 py-4 border border-gray-200 rounded-md ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
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
                      <span className="text-sm text-gray-700">
                        {listing.user}
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="flex flex-col pr-4">
                      <span className="text-[10px] text-gray-700 mb-1">
                        {listing.progress}
                        {listing.capReached && (
                          <>
                            Cap Reached! <span className="text-red-500">{listing.timeRemaining}</span> remains!
                          </>
                        )}
                      </span>
                      <div className="w-full bg-blue-100 h-6 rounded-[5px]">
                        <div
                          className={`h-6 rounded-[5px] ${
                            listing.capReached
                              ? "bg-red-500 ticking-bar"
                              : "bg-blue-500"
                          }`}
                          style={{
                            width: `${getProgressPercentage(
                              listing.progressValue,
                              listing.maxValue
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* You Contributed */}
                    <div className="flex items-center w-[150px]">
                      <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                        <img src="dallar.png" alt="USDC" />
                      </div>
                      <span className="text-sm text-gray-700">
                        {listing.contributed}
                      </span>
                    </div>

                    {/* Contribute */}
                    <div className="flex items-center border border-gray-200 rounded-lg p-2 mx-2 relative">
                      <input type="number" className="ml-6 outline-none w-full" placeholder="0.0" />
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center absolute left-2 flex-shrink-0">
                        <img src="dallar.png" alt="USDC" />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {renderActionButtons(index)}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 h-64 w-[100%] text-center">
              <img src="No_found.jpg" alt="No_Result" className="w-[10%]" />
              <p className="text-lg text-gray-500">No results found</p>
              <p className="text-sm text-gray-400">
                Try searching with other keywords or make sure the <br /> account name
                is correct.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                    <input
                      type="text"
                      placeholder="@Lorem ipsum"
                      className="border rounded-lg px-4 py-2 w-full sm:w-64"
                    />
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                      Launch
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
                filteredListings.map((listing) => renderMobileRow(listing))
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
  );
};

export default Launch;
