import React, { useState, useEffect } from 'react';

const Launch = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
      user: '@realdoanldtrump',
      progress: '0/500 $USDC',
      progressValue: 0,
      maxValue: 500,
      contributed: '$7.22',
      yourContribution: '0.0'
    },
    {
      id: 2,
      user: '@realdoanldtrump',
      progress: '50/500 $USDC',
      progressValue: 50,
      maxValue: 500,
      contributed: '$7.22',
      yourContribution: '0.0'
    },
    {
      id: 3,
      user: '@realdoanldtrump',
      progress: '50/500 $USDC',
      progressValue: 50,
      maxValue: 500,
      contributed: '$7.22',
      yourContribution: '0.0'
    },
    {
      id: 4,
      user: '@realdoanldtrump',
      progress: '50/500 $USDC',
      progressValue: 10,
      maxValue: 500,
      contributed: '7.22',
      yourContribution: '0.0'
    },
    {
      id: 5,
      user: '@realdoanldtrump',
      progress: '550/500 $USDC  Cap Reached! 0:58 remains!',
      progressValue: 550,
      maxValue: 500,
      contributed: '$7.22',
      yourContribution: '0.0',
      capReached: true
    },
    {
      id: 6,
      user: '@realdoanldtrump',
      progress: '50/500 $USDC',
      progressValue: 50,
      maxValue: 500,
      contributed: '$7.22',
      yourContribution: '0.0'
    }
  ];

  const filteredListings = listings.filter(listing =>
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
      <div className="flex space-x-2">
        <button className="w-[72px] py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm text-center">
          Send
        </button>
        <button className="w-[72px] py-1 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition text-sm text-center">
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
        className={`p-4 border border-gray-200 rounded-md ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
      >
        <div className="flex items-center mb-3">
          <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden mr-2 flex-shrink-0">
            <img src="profilephoto.png" alt="User" className="h-full w-full object-cover" />
          </div>
          <span className="text-sm text-gray-700">{listing.user}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <div className="text-xs text-gray-500 mb-1">Progress to cap</div>
            <div className="text-sm text-gray-700 mb-1">{listing.progress}</div>
            <div className="w-full bg-blue-100 h-6 rounded-[5px]">
              <div 
                className={`h-6 rounded-[5px] ${listing.capReached ? 'bg-red-500 ticking-bar' : 'bg-blue-500'}`}
                style={{ width: `${getProgressPercentage(listing.progressValue, listing.maxValue)}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="text-xs text-gray-500 mb-1">You Contributed</div>
            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <span className="text-sm text-gray-700">{listing.contributed}</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-gray-500 mb-1">Contribute</div>
            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-2 flex-shrink-0">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <span className="text-sm text-gray-700">{listing.yourContribution}</span>
            </div>
          </div>
          
          <div>
            <div className="text-xs text-gray-500 mb-1">Action</div>
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
          <div key={index} className="grid grid-cols-5 px-4 py-4 border border-gray-200 rounded-md">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full loading-shimmer mr-2"></div>
              <div className="h-4 w-24 loading-shimmer"></div>
            </div>
            
            <div className="flex flex-col pr-4">
              <div className="h-4 w-32 loading-shimmer mb-1"></div>
              <div className="w-full bg-blue-100 h-6 rounded-[5px]">
                <div className="h-6 rounded-[5px] loading-shimmer" style={{ width: '50%' }}></div>
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
          <div key={index} className="p-4 border border-gray-200 rounded-md mb-3">
            <div className="flex items-center mb-3">
              <div className="h-8 w-8 rounded-full loading-shimmer mr-2"></div>
              <div className="h-4 w-24 loading-shimmer"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <div className="h-3 w-16 loading-shimmer mb-2"></div>
                <div className="h-4 w-32 loading-shimmer mb-1"></div>
                <div className="w-full bg-blue-100 h-6 rounded-[5px]">
                  <div className="h-6 rounded-[5px] loading-shimmer" style={{ width: '50%' }}></div>
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
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* Desktop View (screen width >= 980px) */}
        <div className="hidden max-[979px]:hidden min-[980px]:block">
          {/* Table Header */}
          <div className="bg-gray-50 rounded-t-lg overflow-hidden border border-gray-200 border-b-0">
            <div className="grid grid-cols-5 px-4 py-3">
              <div className="text-sm font-medium text-gray-700">X</div>
              <div className="text-sm font-medium text-gray-700">Progress to cap</div>
              <div className="text-sm font-medium text-gray-700">You Contributed</div>
              <div className="text-sm font-medium text-gray-700">Contribute</div>
              <div className="text-sm font-medium text-gray-700">Action</div>
            </div>
          </div>
          
          {/* Table Body */}
          {isLoading ? (
            renderLoadingShimmer()
          ) : filteredListings.length > 0 ? (
            <div className="space-y-1">
              {filteredListings.map((listing, index) => (
                <div 
                  key={listing.id} 
                  className={`grid grid-cols-5 gap-4 px-4 py-4 border border-gray-200 rounded-md ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  {/* User */}
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden mr-2 flex-shrink-0">
                      <img src="profilephoto.png" alt="User" className="h-full w-full object-cover" />
                    </div>
                    <span className="text-sm text-gray-700">{listing.user}</span>
                  </div>
                  
                  {/* Progress */}
                  <div className="flex flex-col pr-4 w-[250px]">
                    <span className="text-[10px] text-gray-700 mb-1">
                      {listing.progress}
                    </span>
                    <div className="w-full bg-blue-100 h-6 rounded-[5px]">
                      <div 
                        className={`h-6 rounded-[5px] ${listing.capReached ? 'bg-red-500 ticking-bar' : 'bg-blue-500'}`}
                        style={{ width: `${getProgressPercentage(listing.progressValue, listing.maxValue)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* You Contributed */}
                  <div className="flex items-center w-[150px]">
                    <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                    <img src="dallar.png" alt="USDC" />
                    </div>
                    <span className="text-sm text-gray-700">{listing.contributed}</span>
                  </div>
                  
                  {/* Contribute */}
                  <div className="flex items-center border border-gray-200 rounded-lg p-2">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-2 flex-shrink-0">
                      <img src="dallar.png" alt="USDC" />
                    </div>
                    <span className="text-sm text-gray-700">{listing.yourContribution}</span>
                    
                  </div>
                  
                  {/* Action Buttons */}
                  {renderActionButtons(index)}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 h-64 w-[100%] text-center">
              <svg className="h-16 w-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5-6l3 3-3 3" />
              </svg>
              <p className="text-lg text-gray-500">No results found</p>
              <p className="text-sm text-gray-400">Try searching with other keywords or make sure the account name is correct.</p>
            </div>
          )}
        </div>
        
        {/* Mobile View (screen width < 980px) */}
        <div className="min-[980px]:hidden space-y-3">
          {isLoading ? (
            renderMobileLoadingShimmer()
          ) : filteredListings.length > 0 ? (
            filteredListings.map((listing, index) => renderMobileRow(listing, index))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 h-64 text-center">
              <svg className="h-16 w-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5-6l3 3-3 3" />
              </svg>
              <p className="text-lg text-gray-500">No results found</p>
              <p className="text-sm text-gray-400">Try searching with other keywords or make sure the account name is correct.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Launch; 