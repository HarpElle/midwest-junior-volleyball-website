import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[400px] bg-gradient-to-r from-brand-blue/90 to-brand-blue/80 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/volleyball/optimized-photo-hero-volleyball.webp"
            alt="Volleyball Championship"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/80"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-xl text-brand-powder mb-8">
              Get in touch with the tournament organizers
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-blue">
                Send Us a Message
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                Have questions about the tournament? We're here to help. Fill out the form below 
                and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="tournament-info">Tournament Information</option>
                    <option value="registration">Team Registration</option>
                    <option value="sponsorship">Sponsorship Opportunities</option>
                    <option value="venue">Venue & Logistics</option>
                    <option value="media">Media Inquiries</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="mt-1 h-4 w-4 text-brand-blue focus:ring-brand-blue border-neutral-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-neutral-600">
                    I would like to receive tournament updates and news via email
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-brand-powder/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Tournament Information</h4>
                  <p className="text-neutral-700 mb-2">
                    <strong>Email:</strong> <a href="mailto:midwestjvb@gmail.com" className="text-brand-red hover:underline">midwestjvb@gmail.com</a>
                  </p>
                  <p className="text-neutral-600 text-sm">
                    For team registration, tournament questions, and general inquiries
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Payment Information</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Zelle:</strong> midwestjvb@gmail.com</p>
                    <p><strong>Venmo:</strong> @midwestjrvb</p>
                    <p><strong>Checks payable to:</strong> Midwest Sports Management LLC</p>
                    <p className="text-neutral-600">
                      <strong>Mailing Address:</strong><br />
                      PO BOX 92543<br />
                      Henderson, NV 89009
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Tournament Venue</h4>
                  <p className="text-neutral-700">
                    <strong>Navy Pier - Festival Hall A/B</strong><br />
                    600 East Grand Avenue<br />
                    Chicago, IL 60611
                  </p>
                  <p className="text-neutral-600 text-sm mt-2">
                    Check-in: Room 202-207 Lobby<br />
                    Awards: Room 205 Lobby
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Specialized Inquiries</h4>
                  <div className="space-y-1 text-sm text-neutral-600">
                    <p>• Team Registration & Background Checks</p>
                    <p>• Hotel Booking Assistance</p>
                    <p>• Sponsorship Opportunities</p>
                    <p>• Media Credentials</p>
                    <p>• Waiver Requests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Find answers to common questions about the tournament
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-brand-blue mb-3">
                How do I register my team?
              </h3>
              <p className="text-neutral-600">
                Team registration information will be available on our website approximately 
                3-4 months before the tournament. Contact us to be notified when registration opens.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-brand-blue mb-3">
                What are the age divisions?
              </h3>
              <p className="text-neutral-600">
                We offer multiple age-appropriate divisions to ensure competitive balance. 
                Specific division information will be published with registration details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-brand-blue mb-3">
                Where can I find parking information?
              </h3>
              <p className="text-neutral-600">
                Navy Pier offers multiple parking options with special tournament rates. 
                Detailed parking information and discount codes will be provided to registered teams.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-brand-blue mb-3">
                Are spectator tickets required?
              </h3>
              <p className="text-neutral-600">
                Spectator ticket information will be announced closer to the tournament date. 
                Some matches may require tickets while others may be free admission.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-brand-blue mb-3">
                What hotels are recommended?
              </h3>
              <p className="text-neutral-600">
                We partner with local hotels to offer special tournament rates. 
                Hotel information and booking details will be provided to registered teams.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-brand-blue mb-3">
                How can I become a sponsor?
              </h3>
              <p className="text-neutral-600">
                We offer various sponsorship opportunities to support youth volleyball. 
                Visit our sponsors page or contact us directly to learn about partnership options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Find Us at Navy Pier
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Located in the heart of Chicago, Navy Pier is easily accessible by car, 
              public transportation, and ride-sharing services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Interactive Map */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1234567890123!2d-87.60853!3d41.891775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca55810a493%3A0x4700ddf60fcb6de6!2sNavy%20Pier!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Navy Pier Location"
                  className="w-full h-96"
                ></iframe>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mb-4">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-blue mb-3">
                  Tournament Venue
                </h3>
                <div className="text-neutral-600 space-y-1">
                  <p className="font-medium">Navy Pier</p>
                  <p>600 E Grand Ave</p>
                  <p>Chicago, IL 60611</p>
                </div>
              </div>

              <div className="bg-brand-powder/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-brand-blue mb-3">
                  Getting There
                </h3>
                <div className="text-neutral-600 space-y-2 text-sm">
                  <p><strong>By Car:</strong> Multiple parking garages available</p>
                  <p><strong>By CTA:</strong> Red/Brown Line to Grand, then bus #29</p>
                  <p><strong>By Taxi/Rideshare:</strong> Drop-off at main entrance</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <h3 className="text-lg font-semibold text-brand-blue mb-3">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="https://maps.google.com/maps?q=Navy+Pier+Chicago" target="_blank" rel="noopener noreferrer">
                      Open in Google Maps
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="https://navypier.org/visit/parking/" target="_blank" rel="noopener noreferrer">
                      Parking Information
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 lg:py-16 bg-brand-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-brand-powder mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest tournament news, registration updates, 
            and important announcements.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md text-neutral-900 bg-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-brand-coral placeholder:text-neutral-500"
              required
            />
            <Button type="submit" variant="white" size="lg">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-brand-powder/80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
} 