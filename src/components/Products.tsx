'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface OrderFormData {
  name: string;
  phone: string;
  address: string;
  product: string;
}

interface Product {
  id: string;
  name: string;
  nameBn: string;
  price: string;
  priceBn: string;
  description: string;
  descriptionBn: string;
  features: string[];
  featuresBn: string[];
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
}

const Products = () => {
  const { t, language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    address: '',
    product: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const products: Product[] = [
    {
      id: 'farm-eye',
      name: 'Farm Eye',
      nameBn: 'ফার্ম আই',
      price: '৳3,000',
      priceBn: '৳৩,০০০',
      description: 'Advanced monitoring system that tracks cow movement, records video, and measures temperature, ammonia (NH3), and humidity levels',
      descriptionBn: 'উন্নত পর্যবেক্ষণ ব্যবস্থা যা গরুর চলাচল ট্র্যাক করে, ভিডিও রেকর্ড করে এবং তাপমাত্রা, অ্যামোনিয়া (NH3) এবং আর্দ্রতা পরিমাপ করে',
      features: ['Cow Movement Tracking', 'Video Recording', 'Temperature Monitoring', 'Ammonia (NH3) Detection', 'Humidity Measurement', 'Real-time Alerts'],
      featuresBn: ['গরুর চলাচল ট্র্যাকিং', 'ভিডিও রেকর্ডিং', 'তাপমাত্রা পর্যবেক্ষণ', 'অ্যামোনিয়া (NH3) সনাক্তকরণ', 'আর্দ্রতা পরিমাপ', 'রিয়েল-টাইম সতর্কতা'],
      image: '/farmeye.png',
      imageAlt: 'Farm Eye Smart Monitoring System',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'goru-collar',
      name: 'Goru Collar',
      nameBn: 'গরু কলার',
      price: '৳2,000',
      priceBn: '৳২,০০০',
      description: 'Advanced IoT collar for real-time cattle health monitoring and GPS tracking',
      descriptionBn: 'রিয়েল-টাইম গবাদি পশু স্বাস্থ্য পর্যবেক্ষণ এবং জিপিএস ট্র্যাকিংয়ের জন্য উন্নত আইওটি কলার',
      features: ['Health Monitoring', 'GPS Tracking', 'Temperature Sensor', 'Veterinary Alerts', 'Battery Life 6 Months'],
      featuresBn: ['স্বাস্থ্য পর্যবেক্ষণ', 'জিপিএস ট্র্যাকিং', 'তাপমাত্রা সেন্সর', 'পশুচিকিৎসা সতর্কতা', '৬ মাস ব্যাটারি জীবন'],
      image: '/gorucollar.png',
      imageAlt: 'Goru Collar IoT Device',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setFormData(prev => ({
      ...prev,
      product: language === 'bn' ? product.nameBn : product.name
    }));
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xvgqvkgk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: `New Order - ${formData.product}`,
          message: `Order Details:
Product: ${formData.product}
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          address: '',
          product: ''
        });
        // Close modal after successful submission
        setTimeout(() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setFormData({
      name: '',
      phone: '',
      address: '',
      product: ''
    });
    setSubmitStatus('idle');
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('products.title')}
          </h2>
          <p className={`text-xl text-gray-600 mt-4 max-w-2xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('products.subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              data-product={product.name}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-gray-100"
            >
              {/* Product Header with Icon */}
              <div className="relative h-48 bg-gradient-to-br from-green-100 via-teal-100 to-blue-100">
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                
                {/* Product Image */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    width={180}
                    height={180}
                    className="object-contain max-h-full max-w-full group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                  />
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? product.priceBn : product.price}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className={`text-3xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? product.nameBn : product.name}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? product.descriptionBn : product.description}
                  </p>
                </div>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  <h4 className={`text-sm font-semibold text-gray-900 mb-3 flex items-center ${language === 'bn' ? 'font-bengali' : ''}`}>
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {language === 'bn' ? 'বৈশিষ্ট্যসমূহ:' : 'Key Features:'}
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {(language === 'bn' ? product.featuresBn : product.features).map((feature, index) => (
                      <div key={index} className={`flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Button */}
                <button className={`w-full py-4 px-6 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-teal-600 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl ${language === 'bn' ? 'font-bengali' : ''}`}>
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    {language === 'bn' ? 'অর্ডার করুন' : 'Order Now'}
                  </div>
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Form Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-teal-50">
              <div className="flex justify-between items-center">
                <h3 className={`text-xl font-bold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('order.form.title')}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className={`text-gray-600 mt-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                {t('order.form.subtitle')}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Selected Product Info */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.imageAlt}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? selectedProduct.nameBn : selectedProduct.name}
                    </h4>
                    <p className={`text-green-600 font-bold ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? selectedProduct.priceBn : selectedProduct.price}
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {t('order.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder={language === 'bn' ? 'আপনার পূর্ণ নাম লিখুন' : 'Enter your full name'}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {t('order.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder={language === 'bn' ? 'আপনার ফোন নম্বর লিখুন' : 'Enter your phone number'}
                  />
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {t('order.form.address')}
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder={language === 'bn' ? 'আপনার ডেলিভারি ঠিকানা লিখুন' : 'Enter your delivery address'}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-teal-600 rounded-xl hover:from-green-700 hover:to-teal-700 focus:ring-4 focus:ring-green-300 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${language === 'bn' ? 'font-bengali' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {language === 'bn' ? 'জমা হচ্ছে...' : 'Submitting...'}
                    </div>
                  ) : (
                    t('order.form.submit')
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className={`text-green-800 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {t('order.success')}
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className={`text-red-800 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {t('order.error')}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
