import React, { useState } from 'react';
import Alert from '../components/Alert';
import { 
  LoadingShimmer, 
  TableLoadingShimmer, 
  MobileLoadingShimmer, 
  ProgressBar, 
  NoResultsFound 
} from '../components/UIComponents';

const UIDemo = () => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden font-sans p-6">
      <h1 className="text-2xl font-bold mb-6">UI Components Demo</h1>
      
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