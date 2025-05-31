import { Button } from "@/components/ui/button";
import { TOURNAMENT_INFO } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, MapPinIcon, TrophyIcon, DocumentTextIcon, MapIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-blue/80">
        <div className="absolute inset-0">
          <Image
            src="/images/volleyball/optimized-photo-hero-volleyball.webp"
            alt="Volleyball Championship Action"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-blue/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-medium mb-4 text-brand-powder">
            Welcome to the
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            2025 ASICS JUNIOR NATIONAL VOLLEYBALL CHAMPIONSHIPS
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-brand-powder">
            The premier destination for elite youth volleyball competition • Celebrating 50 years in the Great Lakes/Chicagoland area
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-brand-blue">
              <Link href="/schedule">View Tournament Schedule</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-brand-blue">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Tournament Information
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about the 2025 championships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 card-hover">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
                <CalendarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-3 text-center">Tournament Information</h3>
              <p className="text-neutral-600 text-center">
                June 6-10, 2025 at Navy Pier, Chicago. Two separate events: 3-day (June 6-8) and 2-day (June 9-10). 480 teams maximum capacity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 card-hover">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 float-animation" style={{ animationDelay: '1s' }}>
                <MapPinIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-3 text-center">Navy Pier Venue</h3>
              <p className="text-neutral-600 text-center">
                Festival Hall A/B - Indoor pier/convention hall extending into Lake Michigan with views of yachts, skyscrapers, and lakefront activity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 card-hover">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4 float-animation" style={{ animationDelay: '2s' }}>
                <TrophyIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-3 text-center">Championship Experience</h3>
              <p className="text-neutral-600 text-center">
                50+ years of excellence hosting one of the oldest running mega volleyball events. Over 5,000 athletes and guests from the US, Canada, Hawaii, and Puerto Rico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Playing Waves Section */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-red">
              2025 PLAYING WAVES
            </h2>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
              Playing Waves (schedules) are posted approximately one month prior to the event through Advanced Event Systems. Download current schedules below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                <Link href="/schedule">View Schedule Details</Link>
              </Button>
              <Button size="lg" variant="primary">
                <Link href="https://www.advancedeventsystems.com" target="_blank" rel="noopener noreferrer">
                  Advanced Event Systems
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Parking Information */}
      <section className="py-12 lg:py-16 bg-brand-powder/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              2025 ASICS Parking Discount Rates
            </h2>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
              Special tournament parking rates available for all participants and spectators. Teams encouraged to use vans and carpooling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-brand-blue mb-4">Daily Rates</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium">Thursday, June 5</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://spothero.com/search?kind=event&id=asics-june-5" target="_blank" rel="noopener noreferrer">
                      Purchase $39
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium">Friday, June 6</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://spothero.com/search?kind=event&id=asics-june-6" target="_blank" rel="noopener noreferrer">
                      Purchase $45
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium">Saturday, June 7</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://spothero.com/search?kind=event&id=asics-june-7" target="_blank" rel="noopener noreferrer">
                      Purchase $45
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium">Sunday, June 8</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://spothero.com/search?kind=event&id=asics-june-8" target="_blank" rel="noopener noreferrer">
                      Purchase $45
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium">Monday, June 9</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://spothero.com/search?kind=event&id=asics-june-9" target="_blank" rel="noopener noreferrer">
                      Purchase $39
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium">Tuesday, June 10</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://spothero.com/search?kind=event&id=asics-june-10" target="_blank" rel="noopener noreferrer">
                      Purchase $39
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-brand-blue mb-4">Multi-Day Packages</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium">Thursday-Sunday</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://spothero.com/search?kind=event&id=asics-thurs-sun" target="_blank" rel="noopener noreferrer">
                      Purchase $182
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium">Friday-Sunday</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://spothero.com/search?kind=event&id=asics-fri-sun" target="_blank" rel="noopener noreferrer">
                      Purchase $137
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium">Friday-Tuesday</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://spothero.com/search?kind=event&id=asics-fri-tue" target="_blank" rel="noopener noreferrer">
                      Purchase $208
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium">Monday-Tuesday</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://spothero.com/search?kind=event&id=asics-mon-tue" target="_blank" rel="noopener noreferrer">
                      Purchase $78
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-between items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium">Full Week</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://spothero.com/search?kind=event&id=asics-full-week" target="_blank" rel="noopener noreferrer">
                      Purchase $270
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-brand-blue mb-4">Alternative Parking</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium block">Grand Plaza</span>
                    <span className="text-sm text-neutral-600">$15 • 540 N. State St.</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://grs-reservationserviceesb.lazparking.com/checkout/?l=8902&wk=17df9669a41f4404b401867bdcab2093" target="_blank" rel="noopener noreferrer">
                      Reserve Now
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium block">Ogden Plaza</span>
                    <span className="text-sm text-neutral-600">$15 • 300 E. North Water St.</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://app.parkmobile.io/reservation/402678" target="_blank" rel="noopener noreferrer">
                      Reserve Now
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium block">Millennium</span>
                    <span className="text-sm text-neutral-600">$14 • 5 S. Columbus Dr.</span>
                  </div>
                  <Button variant="outline" size="sm" className="min-w-[130px] flex-shrink-0" asChild>
                    <Link href="https://prod1.millenniumgarages.com/all-garages/millennium-park-garage/" target="_blank" rel="noopener noreferrer">
                      Reserve Now
                    </Link>
                  </Button>
                </div>
              </div>
              <p className="text-xs text-neutral-500 mt-4">
                *Offsite parking rates not guaranteed by event organizers. Validation required at Navy Pier Guest Services.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 mt-6">
            <h3 className="text-lg font-semibold text-brand-blue mb-4">Navy Pier Parking Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">On-Site Parking</h4>
                <p className="text-sm text-neutral-600 mb-3">
                  Navy Pier offers two on-site parking garages (East and West) with 1,500 total spaces. Electric vehicle charging stations available in both garages.
                </p>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• West Garage: 6'3" height clearance</li>
                  <li>• East Garage: 7'9" height clearance (recommended for oversized vehicles)</li>
                  <li>• 30 minutes to exit after payment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">Additional Options</h4>
                <p className="text-sm text-neutral-600 mb-3">
                  Valet parking available at select restaurants and hotels. Park & Dine deals offer $20 parking for up to 2.5 hours at participating restaurants.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://navypier.org/plan-your-visit/getting-here-and-parking/parking-and-valet/" target="_blank" rel="noopener noreferrer">
                    View Full Parking Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-neutral-600">
              For additional parking questions or assistance, please <Link href="/contact" className="text-brand-blue hover:underline font-semibold">contact us</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Spectator Tickets */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/volleyball/optimized-photo-action-volleyball.webp"
            alt="Volleyball Action"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-brand-blue/80"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Spectator Tickets & Live Streaming
          </h2>
          <p className="text-lg text-brand-powder max-w-3xl mx-auto mb-8">
            Join us in person or watch online as the nation's best young volleyball players compete for championship glory.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-3">3-Day Pass</h3>
              <p className="text-3xl font-bold mb-2">$45</p>
              <p className="text-brand-powder mb-4">June 6-8, 2025</p>
              <Button variant="white" size="sm" className="w-full" asChild>
                <Link href="https://tickets.sportwrench.com/#/events/509120305" target="_blank" rel="noopener noreferrer">
                  Buy Online
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-3">2-Day Pass</h3>
              <p className="text-3xl font-bold mb-2">$30</p>
              <p className="text-brand-powder mb-4">June 9-10, 2025</p>
              <Button variant="white" size="sm" className="w-full" asChild>
                <Link href="https://tickets.sportwrench.com/#/events/185796404" target="_blank" rel="noopener noreferrer">
                  Buy Online
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-3">Live Stream</h3>
              <p className="text-lg font-bold mb-2">BallerTV</p>
              <p className="text-brand-powder mb-4">Watch from anywhere</p>
              <div className="space-y-2">
                <Button variant="white" size="sm" className="w-full" asChild>
                  <Link href="https://ballertv.com/events/asics-jr-national-volleyball-championship-june-6-8" target="_blank" rel="noopener noreferrer">
                    June 6-8 Event
                  </Link>
                </Button>
                <Button variant="white" size="sm" className="w-full" asChild>
                  <Link href="https://ballertv.com/events/asics-jr-national-volleyball-championship-june-9-10" target="_blank" rel="noopener noreferrer">
                    June 9-10 Event
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-brand-powder/80 mt-6">
            Single day passes available on-site for $20 (cash only). Free credentials for 15 players + 2 coaches per team.
          </p>
        </div>
      </section>

      {/* Tournament Information Section */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              2025 TOURNAMENT INFORMATION
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Download essential tournament documents and information for teams, coaches, and spectators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Entry Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center relative">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <DocumentTextIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-4">Team Registration</h3>
              <p className="text-neutral-600 mb-6">
                Register your team through Advanced Event Systems. Maximum 15 players and 2 coaches per roster.
              </p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://advancedeventsystems.com/36825" target="_blank" rel="noopener noreferrer">
                    June 6-8 Event
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://advancedeventsystems.com/36826" target="_blank" rel="noopener noreferrer">
                    June 9-10 Event
                  </Link>
                </Button>
              </div>
            </div>

            {/* Navy Pier Directions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center relative">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <MapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-4">Navy Pier Directions</h3>
              <p className="text-neutral-600 mb-6">
                600 East Grand Avenue, Chicago, IL 60611 - Festival Hall A/B. East/West entrance drop-off available.
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="https://maps.google.com/maps?q=Navy+Pier+Chicago" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </Link>
              </Button>
            </div>

            {/* Hotel Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center relative">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingOfficeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-4">Hotel Information</h3>
              <p className="text-neutral-600 mb-6">
                Sheraton Grand Chicago River Walk - Official tournament hotel. No stay-to-play policy required.
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="https://book.passkey.com/event/50883013/owner/15090011/home" target="_blank" rel="noopener noreferrer">
                  Book Hotel
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 lg:py-16 bg-brand-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            SIGN UP FOR ALL THE LATEST NEWS, INFO AND UPDATES!
          </h2>
          <p className="text-xl text-brand-powder mb-8 max-w-3xl mx-auto">
            Stay informed about tournament schedules, important announcements, and championship updates
          </p>
          
          <div className="max-w-md mx-auto">
            <Button variant="white" size="lg" asChild>
              <Link href="mailto:midwestjvb@gmail.com?subject=Newsletter Signup&body=Please add me to your tournament newsletter mailing list.%0A%0AName: %0AEmail: ">
                Subscribe to Newsletter
              </Link>
            </Button>
            <p className="text-sm text-brand-powder/80 mt-4 text-center">
              Click to send us an email requesting newsletter updates. We'll add you to our mailing list for tournament schedules, announcements, and championship news.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media & CTA */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              FOLLOW US!
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Stay connected with the latest updates, behind-the-scenes content, and championship highlights
            </p>
            <Button size="lg" variant="primary">
              <Link href="https://facebook.com/midwestjuniorvolleyball" target="_blank" rel="noopener noreferrer">
                Follow on Facebook
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
            Ready to Compete?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Join us for the most prestigious junior volleyball championship in the nation
          </p>
          <Button size="lg" variant="primary">
            <Link href="/contact">Get Tournament Information</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
