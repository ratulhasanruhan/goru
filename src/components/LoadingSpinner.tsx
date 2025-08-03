import Image from 'next/image';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        {/* GoruSheba Logo */}
        <div className="mb-6">
          <Image
            src="/g_goru.png"
            alt="GoruSheba Logo"
            width={80}
            height={80}
            className="mx-auto"
            priority
          />
        </div>
        
        {/* Loading Text */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">GoruSheba</h2>
          <p className="text-gray-500">Loading your smart farming experience...</p>
        </div>
        
        {/* Simple Loading Indicator */}
        <div className="mt-6 w-48 mx-auto">
          <div className="bg-gray-200 rounded-full h-1">
            <div className="bg-green-600 h-1 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 