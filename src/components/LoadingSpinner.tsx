const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          {/* GoruSheba Logo */}
          <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          
          {/* Spinning Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">GoruSheba</h2>
          <p className="text-gray-500">Loading your smart farming experience...</p>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-6 w-48 mx-auto">
          <div className="bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 