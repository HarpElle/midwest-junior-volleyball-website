import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Midwest Junior Volleyball',
  description: 'Privacy Policy for Midwest Junior Volleyball - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-brand-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-brand-powder max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-brand-powder/20 p-6 rounded-lg mb-8">
              <p className="text-sm text-neutral-600 mb-0">
                <strong>Last Updated:</strong> January 2025<br />
                <strong>Effective Date:</strong> January 2025
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">1. Introduction</h2>
            <p className="text-neutral-700 mb-6">
              Midwest Junior Volleyball ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website, register for tournaments, or interact with our services.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-brand-blue mb-3">2.1 Information You Provide Directly</h3>
            <ul className="text-neutral-700 mb-4 space-y-2">
              <li>• <strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
              <li>• <strong>Tournament Registration:</strong> Team information, player names, coach information, emergency contacts</li>
              <li>• <strong>Payment Information:</strong> Billing information for tournament fees (processed through secure third-party systems)</li>
              <li>• <strong>Communication:</strong> Messages sent through our contact forms or email</li>
              <li>• <strong>Newsletter Subscriptions:</strong> Email addresses for tournament updates and announcements</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-blue mb-3">2.2 Information Collected Automatically</h3>
            <ul className="text-neutral-700 mb-6 space-y-2">
              <li>• <strong>Website Usage:</strong> Pages visited, time spent on site, browser type, device information</li>
              <li>• <strong>IP Address:</strong> For security and analytics purposes</li>
              <li>• <strong>Cookies:</strong> Small files stored on your device to improve website functionality</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">3. How We Use Your Information</h2>
            <ul className="text-neutral-700 mb-6 space-y-2">
              <li>• <strong>Tournament Operations:</strong> Processing registrations, managing team information, coordinating events</li>
              <li>• <strong>Communication:</strong> Sending tournament updates, schedules, important announcements</li>
              <li>• <strong>Customer Service:</strong> Responding to inquiries and providing support</li>
              <li>• <strong>Payment Processing:</strong> Handling tournament fees and related transactions</li>
              <li>• <strong>Website Improvement:</strong> Analyzing usage patterns to enhance user experience</li>
              <li>• <strong>Legal Compliance:</strong> Meeting regulatory requirements and protecting our rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">4. Information Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold text-brand-blue mb-3">4.1 Third-Party Service Providers</h3>
            <p className="text-neutral-700 mb-4">
              We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business:
            </p>
            <ul className="text-neutral-700 mb-4 space-y-2">
              <li>• <strong>Advanced Event Systems:</strong> Tournament registration and management</li>
              <li>• <strong>Payment Processors:</strong> Zelle, Venmo, and banking institutions for payment processing</li>
              <li>• <strong>SpotHero:</strong> Parking reservations and management</li>
              <li>• <strong>Hotel Partners:</strong> Accommodation booking services</li>
              <li>• <strong>Email Services:</strong> Newsletter and communication delivery</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-blue mb-3">4.2 Legal Requirements</h3>
            <p className="text-neutral-700 mb-6">
              We may disclose your information when required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">5. Data Security</h2>
            <p className="text-neutral-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            <ul className="text-neutral-700 mb-6 space-y-2">
              <li>• Secure data transmission using encryption</li>
              <li>• Limited access to personal information on a need-to-know basis</li>
              <li>• Regular security assessments and updates</li>
              <li>• Secure storage of physical documents</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">6. Children's Privacy</h2>
            <p className="text-neutral-700 mb-6">
              Our tournaments involve minors (under 18 years of age). We collect information about minor athletes only with parental consent and for legitimate tournament purposes. Parents and guardians have the right to review, update, or request deletion of their child's information by contacting us directly.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">7. Your Rights and Choices</h2>
            <ul className="text-neutral-700 mb-6 space-y-2">
              <li>• <strong>Access:</strong> Request information about the personal data we hold about you</li>
              <li>• <strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li>• <strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li>• <strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li>• <strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-neutral-700 mb-4">
              Our website uses cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser preferences, though disabling cookies may affect website functionality.
            </p>
            <ul className="text-neutral-700 mb-6 space-y-2">
              <li>• <strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li>• <strong>Functional Cookies:</strong> Remember your preferences and settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">9. Third-Party Links</h2>
            <p className="text-neutral-700 mb-6">
              Our website contains links to third-party websites (such as SpotHero, Advanced Event Systems, and hotel booking sites). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">10. Data Retention</h2>
            <p className="text-neutral-700 mb-6">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Tournament registration data may be retained for historical records and future event planning.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">11. International Data Transfers</h2>
            <p className="text-neutral-700 mb-6">
              While we primarily operate within the United States, some of our service providers may process data internationally. We ensure appropriate safeguards are in place for any international data transfers.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-neutral-700 mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">13. Contact Information</h2>
            <p className="text-neutral-700 mb-4">
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
            </p>
            <div className="bg-brand-powder/20 p-6 rounded-lg mb-8">
              <p className="text-neutral-700 mb-2">
                <strong>Midwest Junior Volleyball</strong><br />
                Email: <a href="mailto:midwestjvb@gmail.com" className="text-brand-blue hover:underline">midwestjvb@gmail.com</a><br />
                Mailing Address:<br />
                PO BOX 92543<br />
                Henderson, NV 89009
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">14. State-Specific Rights</h2>
            
            <h3 className="text-xl font-semibold text-brand-blue mb-3">California Residents (CCPA)</h3>
            <p className="text-neutral-700 mb-4">
              California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale of personal information. We do not sell personal information.
            </p>

            <h3 className="text-xl font-semibold text-brand-blue mb-3">European Union Residents (GDPR)</h3>
            <p className="text-neutral-700 mb-6">
              If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR), including the right to data portability, the right to object to processing, and the right to lodge a complaint with a supervisory authority.
            </p>

            <div className="bg-brand-blue/10 p-6 rounded-lg mt-8">
              <p className="text-sm text-neutral-600 mb-0">
                This Privacy Policy is designed to be transparent about our data practices. If you have any questions or concerns, please don't hesitate to <Link href="/contact" className="text-brand-blue hover:underline font-semibold">contact us</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
} 