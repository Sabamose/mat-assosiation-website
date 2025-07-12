import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Left Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-emerald-900 z-50">
        {/* Logo Section */}
        <div className="p-8 border-b border-emerald-800">
          <div className="text-2xl font-serif text-stone-100 mb-2">
            The MAT Association
          </div>
          <div className="text-emerald-200 text-sm italic">
            Mentorship • Access • Training
          </div>
        </div>

        {/* Navigation Links */}
        <div className="p-8">
          <ul className="space-y-6">
            <li>
              <a 
                href="/" 
                className="block text-stone-100 hover:text-yellow-400 transition-colors duration-200 font-medium border-b-2 border-yellow-600 pb-1"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/mission" 
                className="block text-emerald-200 hover:text-yellow-400 transition-colors duration-200"
              >
                Our Mission
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className="block text-emerald-200 hover:text-yellow-400 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/donate" 
                className="block text-emerald-200 hover:text-yellow-400 transition-colors duration-200"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom CTA in Sidebar */}
        <div className="absolute bottom-8 left-8 right-8">
          <a 
            href="/donate"
            className="block bg-yellow-600 text-emerald-900 text-center px-4 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-sm"
          >
            Support Our Cause
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64">
        {/* Hero Section */}
        <section className="px-16 py-24">
          <div className="max-w-5xl">
            <div className="mb-16">
              <div className="inline-block bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-medium mb-8">
                Est. 2025 • Non-Profit Organization
              </div>
              <h1 className="text-6xl font-serif text-emerald-900 leading-tight mb-8">
                Building Champions
                <span className="text-yellow-600 block mt-2">Beyond the Mat</span>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed max-w-4xl">
                The MAT Association bridges the gap between athletic excellence and academic achievement, 
                providing comprehensive support for combat sports athletes from diverse backgrounds. We believe 
                every athlete deserves the opportunity to reach their full potential.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6 mb-20">
              <a 
                href="/mission"
                className="bg-emerald-900 text-stone-100 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition-colors duration-200"
              >
                Our Mission
              </a>
              <a 
                href="/about"
                className="border-2 border-emerald-200 text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200"
              >
                Get Involved
              </a>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="px-16 py-20 bg-white">
          <div className="max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-emerald-900 mb-6">
                Our Three Pillars
              </h2>
              <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
              <p className="text-lg text-stone-600 italic max-w-3xl mx-auto">
                Built upon the foundation of academic excellence, athletic achievement, and character development
              </p>
            </div>

            <div className="space-y-12">
              {/* Pillar 1 */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-serif font-bold text-emerald-900">I</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-emerald-900 mb-2">
                    Accessible Training Excellence
                  </h3>
                  <p className="text-stone-600">
                    Free-access training facilities eliminating financial barriers to elite coaching and competition preparation.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-serif font-bold text-emerald-900">II</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-emerald-900 mb-2">
                    Academic Excellence Integration
                  </h3>
                  <p className="text-stone-600">
                    Comprehensive tutoring and scholarship opportunities leveraging athletic discipline for academic success.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-serif font-bold text-emerald-900">III</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-emerald-900 mb-2">
                    Character & Leadership Development
                  </h3>
                  <p className="text-stone-600">
                    Mentorship programs building future community leaders through character development and social responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Do It Section */}
        <section className="px-16 py-20 bg-emerald-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif text-emerald-900 mb-12 text-center">
              Why We Do It
            </h2>
            <div className="bg-white rounded-2xl p-12 border-2 border-emerald-100">
              <blockquote className="text-2xl font-serif text-emerald-900 leading-relaxed text-center italic mb-8">
                "We believe that financial, social, and physical barriers should never prevent talented athletes 
                from reaching their full potential. Wrestling and combat sports teach invaluable life skills—discipline, 
                resilience, and determination—that extend far beyond the mat."
              </blockquote>
              <div className="text-center">
                <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded font-medium">
                  Building Future Leaders, One Athlete at a Time
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="px-16 py-20 bg-white">
          <div className="max-w-6xl">
            <h2 className="text-4xl font-serif text-emerald-900 mb-16 text-center">
              Who We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-emerald-900 mb-2">Youth Athletes</h3>
                <p className="text-sm text-stone-600">Ages 5-18: Building foundational skills and character development</p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6m0 0v6m0-6L8 6m8 0l-8 6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-emerald-900 mb-2">Adult Athletes</h3>
                <p className="text-sm text-stone-600">Ages 19+: Competitive training and networking opportunities</p>
              </div>
              <div className="text-center p-6 bg-stone-50 rounded-lg border border-stone-200">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-emerald-900 mb-2">Wounded Warriors</h3>
                <p className="text-sm text-stone-600">Rehabilitation and reintegration through wrestling programs</p>
              </div>
              <div className="text-center p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-emerald-900 mb-2">Service Members</h3>
                <p className="text-sm text-stone-600">Active duty and veteran community support programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* General Information */}
        <section className="px-16 py-20 bg-emerald-50">
          <div className="max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif text-emerald-900 mb-8">
                  Our Foundation
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900 mb-2">Transparent Governance</h3>
                      <p className="text-stone-600 text-sm">Governed by a diverse Board of Directors with publicly available financial reports and open governance policies ensuring accountability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900 mb-2">Measurable Impact</h3>
                      <p className="text-stone-600 text-sm">Tracking participation rates, academic improvements, and athletic achievements to ensure program effectiveness and continuous improvement.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900 mb-2">Community-Driven</h3>
                      <p className="text-stone-600 text-sm">Every program designed with input from athletes, families, and community members to meet real needs and create lasting change.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-emerald-200 p-12 rounded-2xl">
                <div className="text-center">
                  <div className="text-5xl font-serif font-bold text-emerald-900 mb-2">356,000+</div>
                  <p className="text-stone-600 mb-8 font-medium">High school wrestling participants nationwide in 2023-24</p>
                  <div className="text-2xl font-serif font-bold text-yellow-600 mb-3">Rising Diversity</div>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Growing female participation and increasing representation across all backgrounds, 
                    reflecting the evolution of combat sports into a truly inclusive community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-16 py-20 bg-emerald-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-stone-100 mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-emerald-200 mb-8 max-w-2xl mx-auto">
              Together, we can break down barriers and create opportunities for the next generation of athletes and leaders.
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="/donate"
                className="bg-yellow-600 text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
              >
                Make a Donation
              </a>
              <a 
                href="/about"
                className="border-2 border-emerald-200 text-stone-100 px-8 py-4 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
