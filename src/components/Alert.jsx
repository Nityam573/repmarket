import React from 'react';

/**
 * Alert component for displaying different types of messages
 * @param {Object} props - Component props
 * @param {string} props.type - Type of alert (info, success, warning, error)
 * @param {string} props.message - Alert message
 * @param {boolean} props.dismissible - Whether the alert can be dismissed
 * @param {Function} props.onDismiss - Function to call when alert is dismissed
 * @returns {JSX.Element} - Alert component
 */
const Alert = ({ type = 'info', message, dismissible = false, onDismiss }) => {
  // Define alert styles based on type
  const alertClasses = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error'
  };

  // Define alert icons based on type
  const alertIcons = {
    info: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    success: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return (
    <div className={`alert ${alertClasses[type]}`}>
      <div className="alert-icon">
        {alertIcons[type]}
      </div>
      <div className="alert-content">
        {message}
      </div>
      {dismissible && (
        <button 
          onClick={onDismiss} 
          className="ml-auto flex-shrink-0 text-gray-400 hover:text-gray-500 focus:outline-none"
          aria-label="Dismiss"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert; 