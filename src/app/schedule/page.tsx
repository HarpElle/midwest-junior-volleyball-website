import { Button } from "@/components/ui/button";
import { TOURNAMENT_INFO } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, TrophyIcon, MapPinIcon, ClockIcon, ExclamationTriangleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { getImagePath } from "@/lib/utils";

export default function SchedulePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[400px] bg-gradient-to-r from-brand-blue/90 to-brand-blue/80 text-white">
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/volleyball/optimized-photo-hero-volleyball.webp")}
            alt="Volleyball Championship"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/80"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Tournament Information
            </h1>
            <p className="text-xl md:text-2xl text-brand-powder mb-8">
              2025 ASICS Junior National Volleyball Championships
            </p>
          </div>
        </div>
      </section>

      {/* Tournament Overview */}
      <section className="py-12 lg:py-16 bg-brand-powder/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              2025 Tournament Structure
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Two separate championship events featuring multiple age divisions with pool play and elimination brackets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Event 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-brand-red mb-2">Event #1</h3>
                <p className="text-lg font-semibold text-brand-blue">June 6-8, 2025 (Friday-Sunday)</p>
                <p className="text-neutral-600">Girls U13-U18 Divisions</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Tournament Format</h4>
                  <ul className="text-neutral-600 space-y-1 text-sm">
                    <li>• Pool play followed by elimination brackets</li>
                    <li>• Minimum 7 matches guaranteed</li>
                    <li>• 8:00 AM start times for bracket play</li>
                    <li>• Maximum 240 teams</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Registration</h4>
                  <p className="text-neutral-600 text-sm mb-3">First-come, first-serve basis through Advanced Event Systems</p>
                  <Button variant="primary" size="sm" className="w-full" asChild>
                    <Link href="https://advancedeventsystems.com/36825" target="_blank" rel="noopener noreferrer">
                      Register for Event #1
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-brand-red mb-2">Event #2</h3>
                <p className="text-lg font-semibold text-brand-blue">June 9-10, 2025 (Monday-Tuesday)</p>
                <p className="text-neutral-600">Girls U11-U18 & Boys U13-U14</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Tournament Format</h4>
                  <ul className="text-neutral-600 space-y-1 text-sm">
                    <li>• Pool play followed by elimination brackets</li>
                    <li>• Minimum 5 matches guaranteed</li>
                    <li>• 8:00 AM start times for bracket play</li>
                    <li>• Maximum 240 teams</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Registration</h4>
                  <p className="text-neutral-600 text-sm mb-3">First-come, first-serve basis through Advanced Event Systems</p>
                  <Button variant="primary" size="sm" className="w-full" asChild>
                    <Link href="https://advancedeventsystems.com/36826" target="_blank" rel="noopener noreferrer">
                      Register for Event #2
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Playing Waves Information */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Playing Waves & Schedule Information
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Playing Waves (tournament schedules) are posted approximately one month prior to each event through Advanced Event Systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Schedule Information */}
            <div className="bg-brand-powder/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Schedule Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">What to Expect</h4>
                  <ul className="text-neutral-600 space-y-1 text-sm">
                    <li>• Complete match schedules with court assignments</li>
                    <li>• Pool play brackets and seeding information</li>
                    <li>• Elimination bracket structures</li>
                    <li>• Awards ceremony schedule and locations</li>
                    <li>• Important tournament announcements</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Schedule Access</h4>
                  <p className="text-neutral-600 text-sm">
                    Schedules are available through Advanced Event Systems website and mobile app. QR codes will be provided for quick mobile access at the venue.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://www.advancedeventsystems.com" target="_blank" rel="noopener noreferrer">
                    Visit Advanced Event Systems
                  </Link>
                </Button>
              </div>
            </div>

            {/* Check-in Information */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Team Check-in Procedures</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Check-in Location</h4>
                  <p className="text-neutral-600 text-sm">
                    Lobby leading to Festival Hall (Room 202-207) at Navy Pier
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Required Documents</h4>
                  <ul className="text-neutral-600 space-y-1 text-sm">
                    <li>• Team roster (maximum 15 players, 2 coaches)</li>
                    <li>• Background check verification (JVA or AAU only)</li>
                    <li>• Proof of insurance coverage</li>
                    <li>• Signed waivers for all participants</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Credential Information</h4>
                  <p className="text-neutral-600 text-sm">
                    Free credentials provided for 15 players + 2 coaches per team. Lost credential replacement available at check-in desk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Navy Pier Venue
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Experience championship volleyball at Chicago's iconic Navy Pier
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-brand-blue mb-6">Facility Features</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Multiple Competition Courts</h4>
                    <p className="text-neutral-600">Professional-grade volleyball courts with optimal spacing</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Spectator Seating</h4>
                    <p className="text-neutral-600">Comfortable viewing areas for families and fans</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Food & Concessions</h4>
                    <p className="text-neutral-600">Variety of dining options throughout Navy Pier</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Convenient Parking</h4>
                    <p className="text-neutral-600">Multiple parking options with tournament discounts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-blue mb-6">Location & Access</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Address</h4>
                  <p className="text-neutral-600">
                    Navy Pier<br />
                    600 E Grand Ave<br />
                    Chicago, IL 60611
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Transportation</h4>
                  <p className="text-neutral-600">
                    Easily accessible by car, public transit, and ride-sharing services. 
                    Multiple parking garages available on-site.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Nearby Attractions</h4>
                  <p className="text-neutral-600">
                    Located in the heart of Chicago with shopping, dining, and entertainment 
                    options within walking distance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Venue Photo Gallery */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64">
                <Image
                  src={getImagePath("/images/venue/optimized-photo-venue-navypier-1.webp")}
                  alt="Navy Pier Festival Hall A"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src={getImagePath("/images/venue/optimized-photo-venue-navypier-2.webp")}
                  alt="Navy Pier Festival Hall B"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src={getImagePath("/images/venue/optimized-photo-venue-navypier-3.webp")}
                  alt="Navy Pier Exterior"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-12 lg:py-16 bg-brand-powder/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Important Tournament Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-blue">Check-In Times</h3>
              </div>
              <p className="text-neutral-600 text-center">
                Team check-in begins at 7:00 AM on tournament days. 
                Please arrive early to allow time for registration and warm-up.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-3">
                  <ExclamationTriangleIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-blue">Match Timing</h3>
              </div>
              <p className="text-neutral-600 text-center">
                Matches begin promptly at scheduled times. Teams should be ready 
                to play 15 minutes before their scheduled match time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center mx-auto mb-3">
                  <InformationCircleIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-blue">Live Updates</h3>
              </div>
              <p className="text-neutral-600 text-center">
                Follow live scores and bracket updates throughout the tournament 
                on our website and social media channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-16 bg-brand-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About the Tournament?
          </h2>
          <p className="text-xl text-brand-powder mb-8">
            Contact us for more information about schedules, registration, or tournament details
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-blue">
            <Link href="/contact">Contact Tournament Directors</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 