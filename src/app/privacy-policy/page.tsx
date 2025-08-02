import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - GoruSheba',
  description: 'Privacy Policy for GoruSheba - Learn how we collect, use, and protect your data in our cattle management platform.',
  keywords: 'privacy policy, data protection, GoruSheba, cattle management, IoT, AI',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                GoruSheba (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by GoruSheba, a comprehensive cattle management platform that combines IoT technology with artificial intelligence.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Account information (name, email address, phone number)</li>
                <li>Farm and cattle management data</li>
                <li>IoT device information and sensor data</li>
                <li>Location data for farm management (with your permission)</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Usage Information</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Cattle health monitoring data</li>
                <li>IoT sensor readings and analytics</li>
                <li>App usage patterns and preferences</li>
                <li>Device information and operating system</li>
                <li>Performance metrics and error logs</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Device identifiers and IP addresses</li>
                <li>App crash reports and performance data</li>
                <li>Usage analytics and user behavior patterns</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide and improve our cattle management services</li>
                <li>Monitor cattle health and provide alerts</li>
                <li>Analyze IoT sensor data for predictive insights</li>
                <li>Personalize your experience with relevant recommendations</li>
                <li>Send you important updates about our services</li>
                <li>Respond to your questions and provide customer support</li>
                <li>Ensure the security and integrity of our platform</li>
                <li>Comply with legal obligations</li>
                <li>Improve our AI algorithms and IoT device performance</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist us in operating our platform (under strict confidentiality agreements)</li>
                <li>For IoT device management and cloud services</li>
                <li>For payment processing (through secure third-party providers)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Data Security
              </h2>
              <p className="text-gray-700 mb-4">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>End-to-end encryption of data in transit and at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and multi-factor authentication</li>
                <li>Secure data storage practices with industry-standard protocols</li>
                <li>IoT device security and firmware updates</li>
                <li>Regular backup and disaster recovery procedures</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Data Retention
              </h2>
              <p className="text-gray-700">
                We retain your personal information only for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Cattle health data is retained for veterinary and regulatory compliance purposes. You can request deletion of your account and associated data at any time through the app settings or by contacting us directly.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access and update your personal information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of non-essential communications</li>
                <li>Request a copy of your data in a portable format</li>
                <li>Withdraw consent for data processing</li>
                <li>Request correction of inaccurate data</li>
                <li>Object to certain types of data processing</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Third-Party Services
              </h2>
              <p className="text-gray-700 mb-4">Our app integrates with third-party services for:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>IoT device management and cloud storage</li>
                <li>Payment processing</li>
                <li>Analytics and performance monitoring</li>
                <li>Customer support and communication</li>
              </ul>
              <p className="text-gray-700">
                We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any personal information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Children's Privacy
              </h2>
              <p className="text-gray-700">
                Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                International Data Transfers
              </h2>
              <p className="text-gray-700">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700">
                We may update our Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page, sending you an email, or through in-app notifications. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-green-500 pl-4">
                Contact Us
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> hello@goru.help</p>
                  <p><strong>Phone:</strong> +880 1789 536 985</p>
                  <p><strong>Address:</strong> Dhaka, Bangladesh</p>
                  <p><strong>Website:</strong> https://gorusheba.web.app/</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Protection Officer</h3>
              <p className="text-gray-700">
                For privacy-related inquiries, you can also contact our Data Protection Officer at the same email address: hello@goru.help
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 