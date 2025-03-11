import React, { useState, useEffect } from 'react';

const Rewards = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
      user: '@realdoanldtrump',
      ticket: '$blackrock',
      contributed: '$0',
      earningsWithdraw: { crypto: '$7.22', usd: '$7.22' },
      earningsPending: { crypto: '$7.22', usd: '$7.22' },
      action: 'Withdraw & Collect'
    },
    {
      id: 2,
      user: '@realdoanldtrump',
      ticket: '$blackrock',
      contributed: '$7.22',
      earningsWithdraw: { crypto: '$7.22', usd: '$7.22' },
      earningsPending: { crypto: '$7.22', usd: '$7.22' },
      action: 'Collect'
    },
    {
      id: 3,
      user: '@realdoanldtrump',
      ticket: '$blackrock',
      contributed: '$7.22',
      earningsWithdraw: { crypto: '$7.22', usd: '$7.22' },
      earningsPending: { crypto: '$7.22', usd: '$7.22' },
      action: 'Withdraw & Collect'
    },
    {
      id: 4,
      user: '@realdoanldtrump',
      ticket: '$blackrock',
      contributed: '$7.22',
      earningsWithdraw: { crypto: '$7.22', usd: '$7.22' },
      earningsPending: { crypto: '$7.22', usd: '$7.22' },
      action: 'Collect'
    },
    {
      id: 5,
      user: '@realdoanldtrump',
      ticket: '$blackrock',
      contributed: '$7.22',
      earningsWithdraw: { crypto: '$7.22', usd: '$7.22' },
      earningsPending: { crypto: '$7.22', usd: '$7.22' },
      action: 'Withdraw & Collect'
    },
    {
      id: 6,
      user: '@realdoanldtrump',
      ticket: '$blackrock',
      contributed: '$7.22',
      earningsWithdraw: { crypto: '$7.22', usd: '$7.22' },
      earningsPending: { crypto: '$7.22', usd: '$7.22' },
      action: 'Collect'
    },
    {
      id: 7,
      user: '@realdoanldtrump',
      ticket: '$blackrock',
      contributed: '$7.22',
      earningsWithdraw: { crypto: '$7.22', usd: '$7.22' },
      earningsPending: { crypto: '$7.22', usd: '$7.22' },
      action: 'Withdraw & Collect'
    }
  ];

  // Render action button based on type
  const renderActionButton = (actionType) => {
    if (actionType === 'Withdraw & Collect') {
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

  // Render mobile row
  const renderMobileRow = (listing, index) => {
    return (
      <div 
        key={listing.id} 
        className={`p-4 border border-gray-200 rounded-md ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} mb-3`}
      >
        <div className="flex items-center mb-3">
          <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden mr-2 flex-shrink-0">
            <img src="profilephoto.png" alt="User" className="h-full w-full object-cover" />
          </div>
          <span className="text-sm text-gray-700">{listing.user}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <div className="text-xs text-gray-500 mb-1">Ticket/CA</div>
            <div className="flex items-center">
              <span className="text-sm text-gray-700">{listing.ticket}</span>
              <div className="flex ml-2">
                <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg className="h-3 w-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                  </svg>
                </div>
                <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center ml-1">
                  <svg className="h-3 w-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                  </svg>
                </div>
              </div>
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
        
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <div className="text-xs text-gray-500 mb-1">Earnings Withdraw</div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-1 flex-shrink-0">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">{listing.earningsWithdraw.crypto}</span>
              </div>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-1 flex-shrink-0">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-700">{listing.earningsWithdraw.usd}</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-xs text-gray-500 mb-1">Earnings Pending</div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-1 flex-shrink-0">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">{listing.earningsPending.crypto}</span>
              </div>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-1 flex-shrink-0">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-700">{listing.earningsPending.usd}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="text-xs text-gray-500 mb-1">Action</div>
          {renderActionButton(listing.action)}
        </div>
      </div>
    );
  };

  const filteredListings = listings.filter(listing =>
    listing.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading shimmer for table rows
  const renderLoadingShimmer = () => {
    return (
      <div className="space-y-1">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="grid grid-cols-6 px-4 py-4 border-b border-gray-200" style={{ minWidth: '900px', gridTemplateColumns: '1fr 1fr 0.8fr 1fr 1fr 0.8fr' }}>
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
                <div className="h-4 w-20 loading-shimmer"></div>
              </div>
              
              <div>
                <div className="h-3 w-16 loading-shimmer mb-2"></div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full loading-shimmer mr-2"></div>
                  <div className="h-4 w-12 loading-shimmer"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <div className="h-3 w-16 loading-shimmer mb-2"></div>
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 rounded-full loading-shimmer"></div>
                  <div className="h-4 w-12 loading-shimmer"></div>
                </div>
              </div>
              
              <div>
                <div className="h-3 w-16 loading-shimmer mb-2"></div>
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 rounded-full loading-shimmer"></div>
                  <div className="h-4 w-12 loading-shimmer"></div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="h-3 w-16 loading-shimmer mb-2"></div>
              <div className="h-8 w-full loading-shimmer rounded-lg"></div>
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
        
        {/* Scrollable Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg hidden max-[979px]:hidden min-[980px]:block">
          {/* Table Header */}
          <div className="bg-gray-50 rounded-t-lg overflow-hidden border-b border-gray-200">
            <div className="grid grid-cols-6 px-4 py-3" style={{ minWidth: '900px', gridTemplateColumns: '1fr 1fr 0.8fr 1fr 1fr 0.8fr' }}>
              <div className="text-sm font-medium text-gray-700">X</div>
              <div className="text-sm font-medium text-gray-700">Ticket/CA</div>
              <div className="text-sm font-medium text-gray-700">You Contributed</div>
              <div className="text-sm font-medium text-gray-700">Earnings Withdraw</div>
              <div className="text-sm font-medium text-gray-700">Earnings Pending</div>
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
                  className={`grid grid-cols-6 px-4 py-4 border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  style={{ minWidth: '900px', gridTemplateColumns: '1fr 1fr 0.8fr 1fr 1fr 0.8fr' }}
                >
                  {/* User */}
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden mr-2 flex-shrink-0">
                      <img src="profilephoto.png" alt="User" className="h-full w-full object-cover" />
                    </div>
                    <span className="text-sm truncate">{listing.user}</span>
                  </div>
                  
                  {/* Ticket/CA */}
                  <div className="flex items-center">
                    <span className="truncate">{listing.ticket}</span>
                    <div className="flex ml-2">
                      <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg className="h-3 w-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                        </svg>
                      </div>
                      <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center ml-1">
                        <svg className="h-3 w-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* You Contributed */}
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                      <img src="dallar.png" alt="USDC" />
                    </div>
                    <span className="text-sm text-gray-700">{listing.contributed}</span>
                  </div>
                  
                  {/* Earnings Withdraw */}
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-1 flex-shrink-0">
                      <img src="dallar.png" alt="USDC" />
                      </div>
                      <span className="text-sm text-gray-700">{listing.earningsWithdraw.crypto}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-1 flex-shrink-0">
                      <img src="eth.png" alt="USDC" />
                      </div>
                      <span className="text-sm text-gray-700">{listing.earningsWithdraw.usd}</span>
                    </div>
                  </div>
                  
                  {/* Earnings Pending */}
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center mr-1 flex-shrink-0">
                      <img src="dallar.png" alt="USDC" />
                      </div>
                      <span className="text-sm text-gray-700">{listing.earningsPending.crypto}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-1 flex-shrink-0">
                      <img src="eth.png" alt="USDC" />
                      </div>
                      <span className="text-sm text-gray-700">{listing.earningsPending.usd}</span>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div>
                    {renderActionButton(listing.action)}
                  </div>
                </div>
              ))}
            </div>
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

export default Rewards; 