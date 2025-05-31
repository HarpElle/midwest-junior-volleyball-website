import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Midwest Junior Volleyball',
  description: 'Terms of Service for Midwest Junior Volleyball - Tournament participation rules, website usage terms, and legal agreements.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-brand-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-brand-powder max-w-3xl mx-auto">
              Please read these terms carefully before using our website or participating in our tournaments.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-brand-powder/20 p-6 rounded-lg mb-8">
              <p className="text-sm text-neutral-600 mb-0">
                <strong>Last Updated:</strong> January 2025<br />
                <strong>Effective Date:</strong> January 2025
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">1. Acceptance of Terms</h2>
            <p className="text-neutral-700 mb-6">
              By accessing and using the Midwest Junior Volleyball website, registering for tournaments, or participating in our events, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">2. About Midwest Junior Volleyball</h2>
            <p className="text-neutral-700 mb-6">
              Midwest Junior Volleyball is a sports organization founded in 1983, operating as a member of AAU, USA Volleyball, and JVA. We organize and manage junior volleyball tournaments, including the ASICS Junior National Volleyball Championships held annually at Navy Pier in Chicago, Illinois.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">3. Tournament Registration and Participation</h2>
            
            <h3 className="text-xl font-semibold text-brand-blue mb-3">3.1 Registration Requirements</h3>
            <ul className="text-neutral-700 mb-4 space-y-2">
              <li>• Teams must register through Advanced Event Systems on a first-come, first-serve basis</li>
              <li>• Maximum roster size: 15 players and 2 coaches per team</li>
              <li>• All participants must have valid background checks (JVA or AAU only)</li>
              <li>• Proof of insurance coverage is required</li>
              <li>• Signed waivers must be submitted for all participants</li>
              <li>• Registration fees must be paid in full before tournament participation</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-blue mb-3">3.2 Tournament Rules and Conduct</h3>
            <ul className="text-neutral-700 mb-4 space-y-2">
              <li>• All participants must comply with AAU, USA Volleyball, and JVA rules and regulations</li>
              <li>• Unsportsmanlike conduct may result in ejection from the tournament</li>
              <li>• Teams are responsible for the conduct of their players, coaches, and spectators</li>
              <li>• Tournament format includes pool play followed by elimination brackets</li>
              <li>• Minimum 7 matches guaranteed per team</li>
              <li>• Tournament decisions by officials and organizers are final</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-blue mb-3">3.3 Age and Eligibility</h3>
            <p className="text-neutral-700 mb-6">
              Tournaments are designed for junior athletes. Age verification may be required. Players must be eligible according to the rules of their respective governing bodies (AAU, USA Volleyball, or JVA).
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">4. Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-brand-blue mb-3">4.1 Tournament Fees</h3>
            <ul className="text-neutral-700 mb-4 space-y-2">
              <li>• Tournament entry fees must be paid in full before participation</li>
              <li>• Accepted payment methods: Zelle (midwestjvb@gmail.com), Venmo (@midwestjrvb), or check</li>
              <li>• Checks should be made payable to "Midwest Sports Management LLC"</li>
              <li>• Returned checks will incur additional fees</li>
              <li>• No refunds for cancellations within 30 days of tournament start</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-blue mb-3">4.2 Refund Policy</h3>
            <ul className="text-neutral-700 mb-6 space-y-2">
              <li>• Refunds may be available for cancellations more than 30 days before tournament start</li>
              <li>• Tournament cancellation due to circumstances beyond our control may result in partial refunds</li>
              <li>• Processing fees may be deducted from refunds</li>
              <li>• Refund requests must be submitted in writing to midwestjvb@gmail.com</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">5. Website Usage</h2>
            
            <h3 className="text-xl font-semibold text-brand-blue mb-3">5.1 Permitted Use</h3>
            <p className="text-neutral-700 mb-4">
              You may use our website for lawful purposes related to tournament information, registration, and communication. You agree not to:
            </p>
            <ul className="text-neutral-700 mb-4 space-y-2">
              <li>• Use the website for any illegal or unauthorized purpose</li>
              <li>• Attempt to gain unauthorized access to our systems</li>
              <li>• Interfere with the website's operation or security</li>
              <li>• Submit false or misleading information</li>
              <li>• Violate any applicable laws or regulations</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-blue mb-3">5.2 Intellectual Property</h3>
            <p className="text-neutral-700 mb-6">
              All content on this website, including text, images, logos, and design elements, is owned by Midwest Junior Volleyball or our licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">6. Third-Party Services</h2>
            <p className="text-neutral-700 mb-4">
              Our website contains links to and integrates with third-party services, including:
            </p>
            <ul className="text-neutral-700 mb-4 space-y-2">
              <li>• <strong>Advanced Event Systems:</strong> Tournament registration platform</li>
              <li>• <strong>SpotHero:</strong> Parking reservation service</li>
              <li>• <strong>Hotel Booking Services:</strong> Accommodation reservations</li>
              <li>• <strong>Payment Processors:</strong> Zelle, Venmo, and banking services</li>
            </ul>
            <p className="text-neutral-700 mb-6">
              We are not responsible for the content, privacy practices, or terms of service of these third-party providers. Your use of these services is subject to their respective terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">7. Liability and Risk Assumption</h2>
            
            <h3 className="text-xl font-semibold text-brand-blue mb-3">7.1 Assumption of Risk</h3>
            <p className="text-neutral-700 mb-4">
              Volleyball is a physical sport that involves inherent risks of injury. By participating in our tournaments, you acknowledge and assume these risks. Participants should:
            </p>
            <ul className="text-neutral-700 mb-4 space-y-2">
              <li>• Be in appropriate physical condition to participate</li>
              <li>• Use proper safety equipment</li>
              <li>• Follow all safety guidelines and instructions</li>
              <li>• Maintain adequate health and accident insurance</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-blue mb-3">7.2 Limitation of Liability</h3>
            <p className="text-neutral-700 mb-6">
              To the maximum extent permitted by law, Midwest Junior Volleyball, its officers, directors, employees, and volunteers shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from tournament participation or website use. Our total liability shall not exceed the amount of tournament fees paid.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">8. Indemnification</h2>
            <p className="text-neutral-700 mb-6">
              You agree to indemnify and hold harmless Midwest Junior Volleyball from any claims, damages, losses, or expenses (including attorney fees) arising from your participation in tournaments, use of our website, or violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">9. Privacy and Data Protection</h2>
            <p className="text-neutral-700 mb-6">
              Your privacy is important to us. Please review our <Link href="/privacy" className="text-brand-blue hover:underline font-semibold">Privacy Policy</Link> to understand how we collect, use, and protect your personal information.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">10. Force Majeure</h2>
            <p className="text-neutral-700 mb-6">
              We shall not be liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, government actions, pandemics, facility unavailability, or other force majeure events. In such cases, we may cancel, postpone, or modify tournaments with appropriate notice.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">11. Photography and Media</h2>
            <p className="text-neutral-700 mb-6">
              By participating in our tournaments, you consent to the use of photographs, videos, and other media taken during the event for promotional purposes. If you do not wish to be photographed or recorded, please notify tournament staff.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">12. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-brand-blue mb-3">12.1 Governing Law</h3>
            <p className="text-neutral-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold text-brand-blue mb-3">12.2 Dispute Resolution Process</h3>
            <p className="text-neutral-700 mb-6">
              Any disputes arising from these Terms or tournament participation shall first be addressed through good faith negotiation. If resolution cannot be reached, disputes may be submitted to binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">13. Modifications to Terms</h2>
            <p className="text-neutral-700 mb-6">
              We reserve the right to modify these Terms at any time. Changes will be posted on our website with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">14. Severability</h2>
            <p className="text-neutral-700 mb-6">
              If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions shall continue in full force and effect. The unenforceable provision shall be replaced with a valid provision that most closely reflects the original intent.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">15. Entire Agreement</h2>
            <p className="text-neutral-700 mb-6">
              These Terms, together with our Privacy Policy and any tournament-specific rules, constitute the entire agreement between you and Midwest Junior Volleyball regarding the use of our services.
            </p>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">16. Contact Information</h2>
            <p className="text-neutral-700 mb-4">
              If you have questions about these Terms of Service, please contact us:
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

            <h2 className="text-2xl font-bold text-brand-blue mb-4">17. Emergency Procedures</h2>
            <p className="text-neutral-700 mb-4">
              In case of medical emergencies during tournaments:
            </p>
            <ul className="text-neutral-700 mb-6 space-y-2">
              <li>• Call 911 immediately for serious injuries</li>
              <li>• Notify tournament staff of any incidents</li>
              <li>• Teams are responsible for their own first aid and medical care</li>
              <li>• Tournament staff will assist with emergency coordination when possible</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-blue mb-4">18. Code of Conduct</h2>
            <p className="text-neutral-700 mb-4">
              All participants, coaches, and spectators are expected to:
            </p>
            <ul className="text-neutral-700 mb-6 space-y-2">
              <li>• Demonstrate good sportsmanship and respect for others</li>
              <li>• Follow all facility rules and regulations</li>
              <li>• Respect officials' decisions</li>
              <li>• Maintain appropriate language and behavior</li>
              <li>• Report any safety concerns to tournament staff</li>
            </ul>

            <div className="bg-brand-blue/10 p-6 rounded-lg mt-8">
              <p className="text-sm text-neutral-600 mb-0">
                By participating in Midwest Junior Volleyball tournaments or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. For questions or clarifications, please <Link href="/contact" className="text-brand-blue hover:underline font-semibold">contact us</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
} 