import React, { useState } from 'react';
import Alert from '../components/Alert';
import { 
  LoadingShimmer, 
  TableLoadingShimmer, 
  MobileLoadingShimmer, 
  ProgressBar, 
  NoResultsFound,
  NotificationModal
} from '../components/UIComponents';

const UIDemo = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState('waiting');

  const openNotification = (type) => {
    setNotificationType(type);
    setShowNotification(true);
  };

  const notificationContent = {
    waiting: {
      title: "Waiting For Confirmation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula tellus leo, feugiat ultricies."
    },
    success: {
      title: "Swap Success",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula tellus leo."
    },
    error: {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula tellus leo."
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden font-sans p-6">
      <h1 className="text-2xl font-bold mb-6">UI Components Demo</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="flex flex-wrap gap-4">
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg" 
            onClick={() => openNotification('waiting')}
          >
            Show Waiting Notification
          </button>
          <button 
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg" 
            onClick={() => openNotification('success')}
          >
            Show Success Notification
          </button>
          <button 
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" 
            onClick={() => openNotification('error')}
          >
            Show Error Notification
          </button>
        </div>

        {/* Notification Modal */}
        <NotificationModal
          type={notificationType}
          title={notificationContent[notificationType].title}
          description={notificationContent[notificationType].description}
          isOpen={showNotification}
          onClose={() => setShowNotification(false)}
        />

        {/* Static Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-md p-5 relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <div className="w-14 h-14 rounded-full border-4 border-blue-500 border-t-transparent"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Waiting For Confirmation</h3>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-5 relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Swap Success</h3>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-5 relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lorem ipsum dolor</h3>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Alerts</h2>
        {showAlert && (
          <Alert 
            type="error" 
            message="Lorem ipsum dolor sit amet" 
            dismissible={true} 
            onDismiss={() => setShowAlert(false)} 
          />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Alert type="info" message="This is an information message" />
          <Alert type="success" message="Operation completed successfully" />
          <Alert type="warning" message="Please proceed with caution" />
          <Alert type="error" message="An error occurred during the operation" />
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Progress Bars</h2>
        <div className="space-y-4">
          <div>
            <p className="mb-2">Normal Progress (30%)</p>
            <ProgressBar current={30} max={100} />
          </div>
          <div>
            <p className="mb-2">Almost Complete (80%)</p>
            <ProgressBar current={80} max={100} />
          </div>
          <div>
            <p className="mb-2">Cap Reached (550/500 $USDC Cap Reached! 0:58 remains!)</p>
            <ProgressBar current={550} max={500} capReached={true} />
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Loading Shimmers</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Basic Loading Shimmers</h3>
            <div className="flex space-x-4">
              <LoadingShimmer width="w-24" height="h-6" />
              <LoadingShimmer width="w-12" height="h-12" rounded={true} />
              <LoadingShimmer width="w-32" height="h-4" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Table Loading Shimmer</h3>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <TableLoadingShimmer rows={3} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Mobile Loading Shimmer</h3>
            <MobileLoadingShimmer rows={2} />
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">No Results Found</h2>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <NoResultsFound />
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
          <button className="btn btn-danger">Danger Button</button>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <div className="card-header">Card Title</div>
            <div className="card-body">
              <p>This is the content of the card. You can put any content here.</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Action</button>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">Another Card</div>
            <div className="card-body">
              <p>Cards are versatile components that can be used for various purposes.</p>
              <div className="mt-4">
                <ProgressBar current={65} max={100} />
              </div>
            </div>
            <div className="card-footer flex justify-between">
              <button className="btn btn-secondary">Cancel</button>
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Badges</h2>
        <div className="flex flex-wrap gap-3">
          <span className="badge badge-blue">New</span>
          <span className="badge badge-green">Completed</span>
          <span className="badge badge-red">Error</span>
          <span className="badge badge-yellow">Warning</span>
        </div>
      </section>
    </div>
  );
};

export default UIDemo; 