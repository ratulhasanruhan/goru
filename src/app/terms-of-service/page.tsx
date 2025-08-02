import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - GoruSheba',
  description: 'Terms of Service for GoruSheba - Learn about the terms and conditions for using our cattle management platform.',
  keywords: 'terms of service, terms and conditions, GoruSheba, cattle management, IoT, AI',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                Welcome to GoruSheba! These Terms of Service ("Terms") govern your use of our cattle management platform, including our mobile application, web application, and IoT devices (collectively, the "Service").
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-700">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Description of Service
              </h2>
              <p className="text-gray-700 mb-4">GoruSheba is a comprehensive cattle management platform that provides:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>IoT device integration for cattle monitoring</li>
                <li>AI-powered analytics and health tracking</li>
                <li>Veterinary consultation services</li>
                <li>Farm management tools and reporting</li>
                <li>Mobile and web applications for remote access</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                User Accounts
              </h2>
              <p className="text-gray-700 mb-4">To use certain features of our Service, you must create an account. You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Acceptable Use
              </h2>
              <p className="text-gray-700 mb-4">You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Share your account credentials with others</li>
                <li>Use the Service to harm animals or violate animal welfare laws</li>
                <li>Upload malicious code or attempt to compromise security</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                IoT Devices and Hardware
              </h2>
              <p className="text-gray-700 mb-4">Our Service includes IoT devices for cattle monitoring. You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Install and maintain devices according to our instructions</li>
                <li>Ensure devices are properly secured and protected</li>
                <li>Report any device malfunctions or damage</li>
                <li>Not tamper with or modify device hardware or software</li>
                <li>Return devices in good condition if required</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Data and Privacy
              </h2>
              <p className="text-gray-700">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Payment Terms
              </h2>
              <p className="text-gray-700 mb-4">Some features of our Service require payment. You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Pay all fees in advance</li>
                <li>Provide accurate billing information</li>
                <li>Authorize recurring payments where applicable</li>
                <li>Pay any applicable taxes</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Fees are non-refundable except as required by law or as specified in our refund policy.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Intellectual Property
              </h2>
              <p className="text-gray-700">
                The Service and its original content, features, and functionality are owned by GoruSheba and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                User Content
              </h2>
              <p className="text-gray-700">
                You retain ownership of any content you submit to our Service. By submitting content, you grant us a worldwide, non-exclusive license to use, reproduce, and distribute your content in connection with providing the Service.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Disclaimers
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                <p className="text-red-800 font-medium">
                  <strong>Important:</strong> Our Service provides monitoring and analytics tools but does not replace professional veterinary care. Always consult with qualified veterinarians for medical decisions regarding your cattle.
                </p>
              </div>
              <p className="text-gray-700 mb-4">The Service is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that the Service will be uninterrupted or error-free</li>
                <li>Warranties regarding the accuracy of data or predictions</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-4">In no event shall GoruSheba be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages resulting from device malfunctions</li>
                <li>Losses due to inaccurate analytics or predictions</li>
                <li>Any damages arising from the use of our Service</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Indemnification
              </h2>
              <p className="text-gray-700">
                You agree to indemnify and hold harmless GoruSheba from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Termination
              </h2>
              <p className="text-gray-700 mb-4">We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your right to use the Service will cease immediately</li>
                <li>We may delete your account and data</li>
                <li>You must return any IoT devices in your possession</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Governing Law
              </h2>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website or through the Service. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Contact Information
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> hello@goru.help</p>
                  <p><strong>Phone:</strong> +880 1789 536 985</p>
                  <p><strong>Address:</strong> Dhaka, Bangladesh</p>
                  <p><strong>Website:</strong> https://gorusheba.web.app/</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Contact</h3>
              <p className="text-gray-700">
                For urgent technical support or device issues, please contact our support team immediately at hello@goru.help or call +880 1789 536 985.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 