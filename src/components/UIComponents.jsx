import React from 'react';

/**
 * LoadingShimmer - A component that displays a loading shimmer effect
 * @param {Object} props - Component props
 * @param {string} props.width - Width of the shimmer
 * @param {string} props.height - Height of the shimmer
 * @param {boolean} props.rounded - Whether to apply rounded corners
 * @returns {JSX.Element} - Loading shimmer component
 */
export const LoadingShimmer = ({ width = "w-full", height = "h-6", rounded = false }) => {
  return (
    <div className={`loading-shimmer ${width} ${height} ${rounded ? 'rounded-full' : 'rounded'}`}></div>
  );
};

/**
 * TableLoadingShimmer - A component that displays a loading shimmer for tables
 * @param {Object} props - Component props
 * @param {number} props.rows - Number of rows
 * @returns {JSX.Element} - Table loading shimmer component
 */
export const TableLoadingShimmer = ({ rows = 5 }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex p-4 bg-gray-50 border-b border-gray-200">
        <div className="loading-shimmer w-32 h-5 rounded"></div>
        <div className="loading-shimmer w-24 h-5 rounded ml-auto"></div>
      </div>
      
      {/* Rows */}
      {[...Array(rows)].map((_, index) => (
        <div key={index} className={`flex p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200`}>
          <div className="flex-1">
            <div className="loading-shimmer w-48 h-5 rounded mb-2"></div>
            <div className="loading-shimmer w-32 h-4 rounded"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="loading-shimmer w-20 h-8 rounded"></div>
            <div className="loading-shimmer w-20 h-8 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * MobileLoadingShimmer - A component that displays a loading shimmer for mobile views
 * @param {Object} props - Component props
 * @param {number} props.rows - Number of rows
 * @returns {JSX.Element} - Mobile loading shimmer component
 */
export const MobileLoadingShimmer = ({ rows = 3 }) => {
  return (
    <div className="w-full space-y-4">
      {[...Array(rows)].map((_, index) => (
        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div className="loading-shimmer w-32 h-5 rounded"></div>
            <div className="loading-shimmer w-16 h-5 rounded"></div>
          </div>
          <div className="loading-shimmer w-full h-4 rounded mb-3"></div>
          <div className="loading-shimmer w-3/4 h-4 rounded mb-4"></div>
          <div className="flex justify-end space-x-2">
            <div className="loading-shimmer w-20 h-8 rounded"></div>
            <div className="loading-shimmer w-20 h-8 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * ProgressBar - A component that displays a progress bar with optional ticking animation
 * @param {Object} props - Component props
 * @param {number} props.current - Current value
 * @param {number} props.max - Maximum value
 * @param {boolean} props.capReached - Whether the cap has been reached
 * @returns {JSX.Element} - Progress bar component
 */
export const ProgressBar = ({ current, max, capReached = false }) => {
  const percentage = Math.min(100, (current / max) * 100);
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
      <div 
        className={`h-2.5 rounded-full ${capReached ? 'bg-red-500 ticking-bar' : 'bg-blue-500'}`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

/**
 * NoResultsFound - A component that displays a message when no results are found
 * @returns {JSX.Element} - No results found component
 */
export const NoResultsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center p-6">
      <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="text-lg font-medium text-gray-900 mb-1">No results found</h3>
      <p className="text-gray-500 max-w-md">
        We couldn't find any matches for your search. Try checking the account name or using different keywords.
      </p>
    </div>
  );
};

export default {
  LoadingShimmer,
  TableLoadingShimmer,
  MobileLoadingShimmer,
  ProgressBar,
  NoResultsFound
}; 