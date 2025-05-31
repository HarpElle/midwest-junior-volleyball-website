import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function SponsorsPage() {
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
              Tournament Sponsors & Partners
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-powder">
              Supporting excellence in youth volleyball
            </p>
          </div>
        </div>
      </section>

      {/* Title Sponsor */}
      <section className="py-12 lg:py-16 bg-brand-powder/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Title Sponsor
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Celebrating 30 years of partnership excellence with our title sponsor ASICS America.
            </p>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-lg shadow-sm border border-neutral-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <Image
                    src="/images/sponsors/optimized-logo-asics.webp"
                    alt="ASICS America"
                    width={300}
                    height={120}
                    className="mx-auto lg:mx-0"
                  />
                </div>
                <div className="bg-brand-red text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                  30th Anniversary Partner - 2025
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">ASICS America Corporation</h3>
                <p className="text-neutral-700 mb-4">
                  ASICS America has been the title sponsor of the Junior National Volleyball Championships for 30 consecutive years, making 2025 a milestone anniversary. As a global leader in sports apparel and equipment, ASICS brings world-class quality and innovation to youth volleyball.
                </p>
                <p className="text-neutral-700 mb-6">
                  Their commitment to youth athletics and volleyball excellence has helped make this tournament one of the premier destinations for junior volleyball competition in North America.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-600">
                    <span className="font-semibold">Partnership Since:</span> 1995
                  </p>
                  <p className="text-sm text-neutral-600">
                    <span className="font-semibold">Tournament Name:</span> ASICS Junior National Volleyball Championships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Partners */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Official Tournament Partners
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Our trusted partners provide essential services and products that make the championship experience exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mikasa Sports */}
            <div className="bg-brand-powder/30 p-8 rounded-lg">
              <div className="text-center mb-6">
                <Image
                  src="/images/sponsors/optimized-logo-mikasa.webp"
                  alt="Mikasa Sports"
                  width={200}
                  height={80}
                  className="mx-auto mb-4"
                />
                <div className="bg-brand-red text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  30th Anniversary Partner - 2025
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4">Official Ball Sponsor</h3>
              <p className="text-neutral-700 mb-4">
                Mikasa Sports has been the official ball sponsor for 30 years, providing high-quality volleyballs for all championship matches. Their commitment to excellence ensures consistent play across all divisions.
              </p>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Official Balls:</span> V200W (13u+), VUL500 Lite (12u and under)</p>
                <p><span className="font-semibold">Partnership Since:</span> 1995</p>
              </div>
            </div>

            {/* BallerTV */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <div className="text-center mb-6">
                <Image
                  src="/images/sponsors/optimized-logo-ballertv.webp"
                  alt="BallerTV"
                  width={200}
                  height={80}
                  className="mx-auto mb-4"
                />
                <div className="bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  Official Live Streaming Partner
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4">Live Streaming Coverage</h3>
              <p className="text-neutral-700 mb-4">
                BallerTV provides comprehensive live streaming coverage of both championship events, allowing families and fans worldwide to watch the action from anywhere.
              </p>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Coverage:</span> Both June 6-8 and June 9-10 events</p>
                <p><span className="font-semibold">Access:</span> Live streaming and on-demand replays</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Sponsorship Opportunities
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Join us in supporting the next generation of volleyball champions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="w-16 h-16 bg-neutral-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-neutral-600 font-bold text-xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">
                Platinum Sponsor
              </h3>
              <p className="text-3xl font-bold text-brand-red">$10,000+</p>
              <p className="text-neutral-600">
                Premium visibility and exclusive benefits
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="w-16 h-16 bg-amber rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🥇</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">
                Gold Sponsor
              </h3>
              <p className="text-3xl font-bold text-brand-red">$5,000+</p>
              <p className="text-neutral-600">
                Excellent exposure and tournament benefits
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="w-16 h-16 bg-neutral-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-neutral-700 font-bold text-xl">🥈</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">
                Silver Sponsor
              </h3>
              <p className="text-3xl font-bold text-brand-red">$2,500+</p>
              <p className="text-neutral-600">
                Great value sponsorship package
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 text-center">
              <h3 className="text-xl font-semibold text-brand-blue mb-4">
                Court Sponsor
              </h3>
              <p className="text-neutral-600">
                Sponsor individual courts for maximum visibility during matches
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 text-center md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold text-brand-blue mb-4">
                Equipment Sponsor
              </h3>
              <p className="text-neutral-600">
                Provide tournament equipment and gain brand recognition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-12 lg:py-16 bg-brand-powder/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Why Sponsor Our Championship?
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Partner with one of the oldest running mega volleyball events in North America and reach thousands of dedicated volleyball families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-brand-red mb-2">5,000+</div>
              <p className="text-neutral-600">Athletes & Guests Annually</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-brand-red mb-2">480</div>
              <p className="text-neutral-600">Teams Maximum Capacity</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-brand-red mb-2">50+</div>
              <p className="text-neutral-600">Years of Excellence</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-brand-red mb-2">International</div>
              <p className="text-neutral-600">US, Canada, Hawaii, Puerto Rico</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Tournament Reach & Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Annual Tournaments Administered:</span>
                  <span className="font-semibold text-brand-blue">40-45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Live Streaming Viewers:</span>
                  <span className="font-semibold text-brand-blue">Global Reach</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Navy Pier Location:</span>
                  <span className="font-semibold text-brand-blue">19th Year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Event Duration:</span>
                  <span className="font-semibold text-brand-blue">5 Days Total</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-blue text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Sponsorship Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-powder mr-2">•</span>
                  <span>Brand exposure to dedicated volleyball families with high disposable income</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-powder mr-2">•</span>
                  <span>Association with 50+ years of volleyball excellence and tradition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-powder mr-2">•</span>
                  <span>Live streaming exposure through BallerTV to global audience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-powder mr-2">•</span>
                  <span>Direct access to youth volleyball market and decision makers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-powder mr-2">•</span>
                  <span>Year-round marketing opportunities through 40+ annual tournaments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Impact */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Tournament Impact
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Your sponsorship reaches thousands of athletes, families, and volleyball enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-brand-powder/30 p-6 rounded-lg">
              <div className="text-4xl font-bold text-brand-blue mb-2">500+</div>
              <div className="text-neutral-700">Teams Expected</div>
            </div>
            <div className="bg-brand-coral/20 p-6 rounded-lg">
              <div className="text-4xl font-bold text-brand-red mb-2">6,000+</div>
              <div className="text-neutral-700">Athletes</div>
            </div>
            <div className="bg-teal-light p-6 rounded-lg">
              <div className="text-4xl font-bold text-teal mb-2">15,000+</div>
              <div className="text-neutral-700">Spectators</div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-neutral-700 mb-2">3</div>
              <div className="text-neutral-700">Days of Competition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Sponsorship */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Custom Sponsorship Packages
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              We can create a custom sponsorship package tailored to your specific marketing goals and budget.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-brand-blue mb-4">
                  Available Opportunities
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Tournament naming rights</li>
                  <li>• Court naming opportunities</li>
                  <li>• Awards ceremony sponsorship</li>
                  <li>• Live stream sponsorship</li>
                  <li>• Mobile app integration</li>
                  <li>• Hospitality packages</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-blue mb-4">
                  Marketing Benefits
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Brand visibility to target audience</li>
                  <li>• Digital marketing integration</li>
                  <li>• Product sampling opportunities</li>
                  <li>• Customer engagement activities</li>
                  <li>• Year-round partnership options</li>
                  <li>• ROI tracking and reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-12 lg:py-16 bg-brand-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Current Sponsors
            </h2>
            <p className="text-xl text-brand-powder mb-8">
              Thank you to our amazing sponsors who make this tournament possible
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-4 rounded-lg">
              <Image
                src="/images/sponsors/optimized-logo-asics.webp"
                alt="ASICS"
                width={200}
                height={80}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white p-4 rounded-lg">
              <Image
                src="/images/sponsors/optimized-logo-mikasa.webp"
                alt="Mikasa"
                width={200}
                height={80}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white p-4 rounded-lg">
              <Image
                src="/images/sponsors/optimized-logo-ballertv.webp"
                alt="Baller TV"
                width={200}
                height={80}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white p-4 rounded-lg">
              <Image
                src="/images/sponsors/optimized-logo-mci.webp"
                alt="MCI"
                width={200}
                height={80}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white p-4 rounded-lg">
              <Image
                src="/images/sponsors/optimized-logo-jva.webp"
                alt="JVA"
                width={200}
                height={80}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white p-4 rounded-lg">
              <Image
                src="/images/sponsors/optimized-logo-gbolt.webp"
                alt="G Bolt"
                width={200}
                height={80}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-blue">
              <Link href="/contact">Become a Sponsor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 lg:py-16 bg-brand-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-brand-powder mb-8">
              Join our community of sponsors and help support the next generation of volleyball champions.
            </p>
            <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-brand-blue">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 