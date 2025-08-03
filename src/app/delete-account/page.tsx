'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const DeleteAccountPage = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className={`text-xl font-bold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                GoruSheba
              </span>
            </Link>
            <Link 
              href="/"
              className={`text-gray-600 hover:text-gray-900 transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}
            >
              {language === 'bn' ? '← ফিরে যান' : '← Back to Home'}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className={`text-3xl font-bold text-gray-900 mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'অ্যাকাউন্ট মুছে ফেলুন' : 'Delete Account'}
            </h1>
            <p className={`text-gray-600 max-w-2xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' 
                ? 'আপনার অ্যাকাউন্ট এবং সমস্ত ডেটা স্থায়ীভাবে মুছে ফেলার অনুরোধ করুন। এই পদক্ষেপটি অপরিবর্তনীয়।'
                : 'Request to permanently delete your account and all associated data. This action is irreversible.'
              }
            </p>
          </div>

          {/* Important Information */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <h3 className={`text-lg font-semibold text-red-800 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'গুরুত্বপূর্ণ তথ্য' : 'Important Information'}
                </h3>
                <ul className={`text-red-700 space-y-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  <li>• {language === 'bn' ? 'এই পদক্ষেপটি অপরিবর্তনীয় এবং আপনার সমস্ত ডেটা স্থায়ীভাবে মুছে ফেলবে' : 'This action is irreversible and will permanently delete all your data'}</li>
                  <li>• {language === 'bn' ? 'আপনার অ্যাকাউন্ট, প্রোফাইল, এবং সমস্ত কৃষি ডেটা মুছে যাবে' : 'Your account, profile, and all agricultural data will be deleted'}</li>
                  <li>• {language === 'bn' ? 'আপনি আর অ্যাপে প্রবেশ করতে পারবেন না' : 'You will no longer be able to access the app'}</li>
                  <li>• {language === 'bn' ? 'ডেটা পুনরুদ্ধার করা যাবে না' : 'Data cannot be recovered'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What Will Be Deleted */}
          <div className="mb-8">
            <h3 className={`text-xl font-semibold text-gray-900 mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'যা মুছে যাবে' : 'What Will Be Deleted'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className={`font-medium text-gray-900 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'অ্যাকাউন্ট তথ্য' : 'Account Information'}
                </h4>
                <ul className={`text-sm text-gray-600 space-y-1 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  <li>• {language === 'bn' ? 'ব্যক্তিগত প্রোফাইল' : 'Personal profile'}</li>
                  <li>• {language === 'bn' ? 'যোগাযোগের তথ্য' : 'Contact information'}</li>
                  <li>• {language === 'bn' ? 'অ্যাকাউন্ট সেটিংস' : 'Account settings'}</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className={`font-medium text-gray-900 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'কৃষি ডেটা' : 'Agricultural Data'}
                </h4>
                <ul className={`text-sm text-gray-600 space-y-1 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  <li>• {language === 'bn' ? 'গবাদি পশুর তথ্য' : 'Cattle information'}</li>
                  <li>• {language === 'bn' ? 'স্বাস্থ্য রেকর্ড' : 'Health records'}</li>
                  <li>• {language === 'bn' ? 'খামার ডেটা' : 'Farm data'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Delete Account */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div>
                <h3 className={`text-lg font-semibold text-blue-800 mb-3 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'অ্যাকাউন্ট মুছে ফেলার প্রক্রিয়া' : 'How to Delete Your Account'}
                </h3>
                <div className="space-y-3">
                  <p className={`text-blue-700 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' 
                      ? 'আপনার অ্যাকাউন্ট মুছে ফেলার জন্য, অনুগ্রহ করে নিম্নলিখিত নম্বরে একটি বার্তা পাঠান:'
                      : 'To delete your account, please send a message to the following number:'
                    }
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-medium text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                          {language === 'bn' ? 'ফোন নম্বর' : 'Phone Number'}
                        </p>
                        <p className="text-lg font-semibold text-blue-600">+880 1789-536985</p>
                      </div>
                      <a 
                        href="sms:+8801789536985?body=আমি আমার অ্যাকাউন্ট মুছে ফেলতে চাই। আমার নাম: [আপনার নাম] এবং ফোন নম্বর: [আপনার ফোন নম্বর]"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        {language === 'bn' ? 'বার্তা পাঠান' : 'Send Message'}
                      </a>
                    </div>
                  </div>
                  <p className={`text-sm text-blue-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' 
                      ? 'বার্তায় আপনার নাম এবং ফোন নম্বর উল্লেখ করুন। আমাদের দল ৭ দিনের মধ্যে আপনার অনুরোধ প্রক্রিয়া করবে।'
                      : 'Please include your name and phone number in the message. Our team will process your request within 7 days.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Options */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className={`text-lg font-semibold text-yellow-800 mb-3 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'বিকল্প বিকল্পগুলি বিবেচনা করুন' : 'Consider Alternative Options'}
            </h3>
            <div className="space-y-3">
              <p className={`text-yellow-700 ${language === 'bn' ? 'font-bengali' : ''}`}>
                {language === 'bn' 
                  ? 'আপনার অ্যাকাউন্ট মুছে ফেলার আগে, আপনি বিবেচনা করতে পারেন:'
                  : 'Before deleting your account, you might consider:'
                }
              </p>
              <ul className={`text-yellow-700 space-y-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                <li>• {language === 'bn' ? 'আপনার ডেটা ডাউনলোড করা' : 'Downloading your data'}</li>
                <li>• {language === 'bn' ? 'অ্যাকাউন্ট নিষ্ক্রিয় করা' : 'Deactivating your account'}</li>
                <li>• {language === 'bn' ? 'সহায়তা দলের সাথে যোগাযোগ করা' : 'Contacting our support team'}</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className={`text-xl font-semibold text-gray-900 mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'সাহায্যের জন্য যোগাযোগ করুন' : 'Need Help? Contact Us'}
            </h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`font-medium text-gray-900 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'ইমেইল' : 'Email'}
                  </h4>
                  <a 
                    href="mailto:hello@goru.help" 
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    hello@goru.help
                  </a>
                </div>
                <div>
                  <h4 className={`font-medium text-gray-900 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'ফোন' : 'Phone'}
                  </h4>
                  <a 
                    href="tel:+8801789536985" 
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    +880 1789-536985
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Processing Time */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className={`text-lg font-semibold text-green-800 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'প্রক্রিয়াকরণের সময়' : 'Processing Time'}
                </h3>
                <p className={`text-green-700 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' 
                    ? 'আমাদের দল আপনার অ্যাকাউন্ট মুছে ফেলার অনুরোধ ৭ দিনের মধ্যে প্রক্রিয়া করবে। প্রক্রিয়াকরণের সময় আপনি একটি নিশ্চিতকরণ বার্তা পাবেন।'
                    : 'Our team will process your account deletion request within 7 days. You will receive a confirmation message during the processing period.'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Legal Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className={`text-lg font-semibold text-gray-900 mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'আইনি তথ্য' : 'Legal Information'}
            </h3>
            <div className="text-sm text-gray-600 space-y-3">
              <p className={`${language === 'bn' ? 'font-bengali' : ''}`}>
                {language === 'bn' 
                  ? 'গরুসেবা বাংলাদেশের ডেটা সুরক্ষা আইন এবং আন্তর্জাতিক ডেটা সুরক্ষা প্রবিধান মেনে চলে। আপনার ডেটা সুরক্ষা অধিকার সম্পর্কে আরও জানতে আমাদের গোপনীয়তা নীতি পড়ুন।'
                  : 'GoruSheba complies with Bangladesh Data Protection Act and international data protection regulations. Read our Privacy Policy to learn more about your data protection rights.'
                }
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/privacy-policy" 
                  className="text-green-600 hover:text-green-700 transition-colors"
                >
                  {language === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
                </Link>
                <Link 
                  href="/terms-of-service" 
                  className="text-green-600 hover:text-green-700 transition-colors"
                >
                  {language === 'bn' ? 'সেবার শর্তাবলী' : 'Terms of Service'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountPage; 