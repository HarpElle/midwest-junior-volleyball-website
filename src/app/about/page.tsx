import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

export default function AboutPage() {
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
              ABOUT MIDWEST JUNIOR VOLLEYBALL
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-powder">
              40+ years of excellence in youth volleyball
            </p>
          </div>
        </div>
      </section>

      {/* Organization History */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-24 h-24 mx-auto mb-6">
                <Image
                  src={getImagePath("/images/volleyball/volleyball-icon-vector.svg")}
                  alt="Volleyball Icon"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
                Our Story
              </h2>
              <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
                Founded in 1983, Midwest Junior Volleyball has been the official home of premier youth volleyball championships for over 40 years, celebrating 50 years in the Great Lakes/Chicagoland area and 30 years of partnership with ASICS America and Mikasa Sports.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Historical Timeline */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
                <h3 className="text-2xl font-bold text-brand-blue mb-6">Historical Timeline</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-brand-red pl-4">
                    <h4 className="font-semibold text-brand-blue">1976-1994</h4>
                    <p className="text-neutral-600">AAU National Championships hosted at Benedictine University (formerly Illinois Benedictine College)</p>
                  </div>
                  <div className="border-l-4 border-brand-red pl-4">
                    <h4 className="font-semibold text-brand-blue">1983</h4>
                    <p className="text-neutral-600">Midwest Junior Volleyball founded as a member of AAU, later joining USA Volleyball and JVA</p>
                  </div>
                  <div className="border-l-4 border-brand-red pl-4">
                    <h4 className="font-semibold text-brand-blue">1995-2002</h4>
                    <p className="text-neutral-600">Event moved to College of DuPage, converted to ASICS Jr National Championships</p>
                  </div>
                  <div className="border-l-4 border-brand-red pl-4">
                    <h4 className="font-semibold text-brand-blue">2002-2008</h4>
                    <p className="text-neutral-600">Championships moved to McCormick Place - first volleyball event hosted at this venue</p>
                  </div>
                  <div className="border-l-4 border-brand-red pl-4">
                    <h4 className="font-semibold text-brand-blue">2009-Present</h4>
                    <p className="text-neutral-600">Permanent home at Navy Pier, Chicago - 2025 marks the 19th year at this iconic venue</p>
                  </div>
                </div>
              </div>

              {/* Mission & Activities */}
              <div className="bg-brand-powder/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-brand-blue mb-6">Mission & Activities</h3>
                <div className="space-y-4">
                  <p className="text-neutral-700">
                    Our mission is to provide opportunities for students to earn tuition dollars and part-time jobs through sporting event management, while helping athletes raise funds for their schools and organizations.
                  </p>
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-2">Current Activities</h4>
                    <ul className="text-neutral-600 space-y-1">
                      <li>• Administers 40-45 tournaments annually</li>
                      <li>• Hosts the ASICS Junior National Championships</li>
                      <li>• Previously hosted Mayor Daley Holiday Sports Festival (2001-2010)</li>
                      <li>• Supports four USA Volleyball clubs: Straight Down, Midwest JR VBC, Cyclones VBC, Rally Force VBC</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-2">Institutions Supported</h4>
                    <p className="text-neutral-600 text-sm">
                      College of DuPage, Elmhurst College, Olivet Nazarene University, St. Francis University, Lewis University, West Chicago HS, St. Luke's Ministry, and many others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                To provide the premier junior volleyball championship experience that celebrates 
                athletic excellence, promotes character development, and creates lasting memories 
                for young athletes and their families.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">Our Values</h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span><strong>Excellence:</strong> Striving for the highest standards in competition and organization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span><strong>Integrity:</strong> Conducting all activities with honesty and fairness</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span><strong>Community:</strong> Building connections within the volleyball family</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span><strong>Development:</strong> Supporting the growth of young athletes</span>
                </li>
              </ul>
            </div>
            
            <div className="relative h-96">
              <Image
                src={getImagePath("/images/volleyball/optimized-photo-action-volleyball.webp")}
                alt="Volleyball Action"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Legacy */}
      <section className="py-12 lg:py-16 bg-brand-powder/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Tournament Legacy
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Four decades of hosting premier volleyball championships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">40+</div>
              <div className="text-lg font-semibold text-brand-blue mb-2">Years of Excellence</div>
              <p className="text-neutral-600">
                Continuously hosting premier volleyball championships since 1983
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-4xl font-bold text-brand-red mb-2">500+</div>
              <div className="text-lg font-semibold text-brand-blue mb-2">Teams Annually</div>
              <p className="text-neutral-600">
                Bringing together the best junior volleyball teams from across the nation
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-4xl font-bold text-teal mb-2">15+</div>
              <div className="text-lg font-semibold text-brand-blue mb-2">States Represented</div>
              <p className="text-neutral-600">
                Athletes travel from across the country to compete in our championships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navy Pier Partnership */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src={getImagePath("/images/venue/optimized-photo-venue-navypier-1.webp")}
                alt="Navy Pier Festival Hall"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
                Navy Pier Partnership
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                We are proud to host our championships at Chicago's iconic Navy Pier, 
                providing a world-class venue that matches the caliber of our tournament. 
                The facility offers state-of-the-art courts, excellent spectator viewing, 
                and the excitement of competing in one of America's most famous landmarks.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-neutral-700">Professional-grade volleyball courts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-neutral-700">Excellent spectator facilities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-neutral-700">Convenient downtown Chicago location</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-neutral-700">Multiple dining and entertainment options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board & Leadership */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Leadership & Experience
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Our board members bring decades of experience in volleyball administration and event management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-xl font-semibold text-brand-blue mb-4">
                AAU National Championships Experience
              </h3>
              <p className="text-neutral-700 mb-4">
                Several of our board members served on the staff of the AAU National Championships, 
                held at Benedictine University from 1979-1994, bringing invaluable experience to our organization.
              </p>
              <div className="flex items-center">
                <Image
                  src={getImagePath("/images/sponsors/optimized-logo-jva.webp")}
                  alt="JVA Logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-xl font-semibold text-brand-blue mb-4">
                Multi-Organization Membership
              </h3>
              <p className="text-neutral-700 mb-4">
                We maintain active memberships in AAU, USA Volleyball, and JVA, ensuring our 
                tournaments meet the highest standards and provide opportunities for athlete development.
              </p>
              <div className="space-y-2 text-sm text-neutral-600">
                <div>• AAU Member Since 1983</div>
                <div>• USA Volleyball Member</div>
                <div>• Junior Volleyball Association Member</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Leadership & Board of Directors
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of volleyball expertise and event management experience to ensure the highest quality tournament experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* President Bio */}
            <div className="bg-brand-powder/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Deb DiMatteo</h3>
              <p className="text-lg font-semibold text-brand-red mb-4">President & Tournament Director</p>
              
              <div className="space-y-4 text-neutral-700">
                <p>
                  Deb DiMatteo brings unparalleled experience to Midwest Junior Volleyball as both an educator and athletic administrator. She serves as a USA Volleyball Great Lakes Region Board member and is Professor Emeritus at the College of DuPage, where she concluded a distinguished 37-year career.
                </p>
                
                <div>
                  <h4 className="font-semibold text-brand-blue mb-2">Coaching Excellence</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 27-year collegiate coach (volleyball and softball)</li>
                    <li>• 13 consecutive NCAA post-season bids at Benedictine University (1981-1993)</li>
                    <li>• Three Final Four appearances in volleyball</li>
                    <li>• Four National NJCAA Championships in softball (1998, 2000, 2001, 2004)</li>
                    <li>• 8 consecutive World Series appearances</li>
                  </ul>
                </div>
                
                <p className="text-sm">
                  Her extensive background in both competitive athletics and educational administration provides the perfect foundation for managing one of the nation's premier youth volleyball championships.
                </p>
              </div>
            </div>

            {/* Board Members */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Board of Directors</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-brand-red pl-4">
                  <h4 className="font-semibold text-brand-blue">Deb DiMatteo</h4>
                  <p className="text-neutral-600 text-sm">President & Tournament Director</p>
                </div>
                
                <div className="border-l-4 border-brand-red pl-4">
                  <h4 className="font-semibold text-brand-blue">George DiMatteo</h4>
                  <p className="text-neutral-600 text-sm">Board Member</p>
                </div>
                
                <div className="border-l-4 border-brand-red pl-4">
                  <h4 className="font-semibold text-brand-blue">Lara Aprati</h4>
                  <p className="text-neutral-600 text-sm">Board Member</p>
                </div>
                
                <div className="border-l-4 border-brand-red pl-4">
                  <h4 className="font-semibold text-brand-blue">Caitlin O'Hara</h4>
                  <p className="text-neutral-600 text-sm">Board Member</p>
                </div>
                
                <div className="border-l-4 border-brand-red pl-4">
                  <h4 className="font-semibold text-brand-blue">Danielle Cline</h4>
                  <p className="text-neutral-600 text-sm">Board Member</p>
                </div>
                
                <div className="border-l-4 border-brand-red pl-4">
                  <h4 className="font-semibold text-brand-blue">Wendy Rochon</h4>
                  <p className="text-neutral-600 text-sm">Board Member</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-brand-powder/20 rounded-lg">
                <p className="text-sm text-neutral-600">
                  Several board members served on the staff of the AAU National Championships at Benedictine University from 1979-1994, bringing decades of championship-level event management experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-16 bg-brand-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Volleyball Family
          </h2>
          <p className="text-xl text-brand-powder mb-8 max-w-3xl mx-auto">
            Experience the tradition, excellence, and excitement of the premier junior volleyball championship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-blue">
              <Link href="/schedule">View Tournament Schedule</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-blue">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 