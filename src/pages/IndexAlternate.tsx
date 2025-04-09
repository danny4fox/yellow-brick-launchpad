
import React from 'react';
import VideoEmbed from '../components/VideoEmbed';
import ActionButton from '../components/ActionButton';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const IndexAlternate = () => {
  // Replace with your actual LinkedIn URL
  const linkedInUrl = "https://www.linkedin.com";
  
  // Replace with your actual calendar booking URL
  const calendarUrl = "https://calendly.com";
  
  // YouTube video ID from the URL
  const youtubeVideoId = "CLaTNJ2Nh9k";
  
  // Background video ID
  const backgroundVideoId = "mI_SHuTntdc";

  return (
    <div className="min-h-screen bg-white text-darknavy font-sans">
      {/* Hero Section */}
      <header className="relative bg-darknavy text-white overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full opacity-20 z-0">
          <VideoEmbed youtubeId={backgroundVideoId} isBackground={true} />
        </div>
        
        {/* Navigation */}
        <div className="container mx-auto px-6 py-6 relative z-10">
          <nav>
            <div className="flex items-center justify-between px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg">
              <a href="/" className="text-xl font-bold tracking-tight">
                <span className="text-neon">*</span> Daniel Bodnar
              </a>
              
              <div className="flex items-center gap-6">
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Original Version
                </Link>
                <ActionButton href={calendarUrl} className="shadow-xl">
                  Free Consultation
                </ActionButton>
              </div>
            </div>
          </nav>
        </div>
        
        {/* Hero Content with improved spacing */}
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-6xl font-normal leading-tight tracking-tight">
              <div className="block">Bringing SaaS, IoT Brands to Life</div>
              <div className="block">with <span className="font-bold text-neon">Motion Graphics</span></div>
            </h1>
            
            <div className="mt-8 text-3xl md:text-4xl font-bold">
              Guidance that flows, brand that sticks
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Who Am I Section - Clean design */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-neon/30 to-neon/10 blur-lg rounded-2xl"></div>
                  <img 
                    src="/lovable-uploads/719edf1a-d56a-4774-9d0c-09af34b91723.png" 
                    alt="Daniel Bodnar" 
                    className="relative rounded-2xl w-full max-w-xs mx-auto shadow-xl border-2 border-gray-100"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Who Am I?</h2>
                <div className="space-y-4 text-sm md:text-base text-darknavy/80">
                  <p>
                    Hi, I'm Daniel Bodnar — a Motion Graphic Designer with 8 years of experience in content production and marketing. 
                    I've worked with 500+ small and mid-sized businesses across Hungary as a Regional Digital Marketing Consultant at Google, 
                    diving deep into marketing strategies and spotting one common theme:
                  </p>
                  <p className="text-base font-medium text-darknavy border-l-4 border-neon pl-4 py-2">
                    Video content was full of untapped potential.
                  </p>
                  <p>
                    That discovery kicked off my obsession with animation—specifically, how it can connect ideas, people, and products in ways no other medium can.
                  </p>
                  <p>
                    After relocating to tech-forward Denmark, I rebuilt my career from the ground up and dove headfirst into the world of motion design. 
                    Today, I help innovative companies—especially in SaaS, IoT, and Robotics—bring clarity to complex concepts.
                  </p>
                  <p>
                    I'm all about delivering the highest amount of meaning in the least amount of time—no fluff, just crystal-clear communication. 
                    And what better way to do that than with motion design?
                  </p>
                  <p className="italic font-medium">
                    We live in a world that's moving fast. Understanding it shouldn't slow us down.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">My Work</h2>
              <p className="text-sm md:text-base max-w-3xl mx-auto text-darknavy/70">
                Check out this example of my motion design work
              </p>
            </div>
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <VideoEmbed youtubeId={youtubeVideoId} fullWidth={true} />
            </div>
          </div>
        </section>

        {/* What Am I Doing Section */}
        <section id="services" className="py-24 bg-darknavy text-white relative">
          <div className="container mx-auto px-6 relative z-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What Am I Doing?</h2>
              <p className="text-sm md:text-base max-w-3xl mx-auto text-white/80">
                I understand the unique challenges of technology companies and create visual 
                content that truly resonates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-neon/30 transition-all hover:translate-y-[-5px]">
                <h3 className="font-bold text-lg mb-3 text-neon">Explainer Videos</h3>
                <p className="text-sm text-white/80">
                  Break down complex products & services into clear, engaging narratives that your audience can easily understand.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-neon/30 transition-all hover:translate-y-[-5px]">
                <h3 className="font-bold text-lg mb-3 text-neon">UI & Product Demos</h3>
                <p className="text-sm text-white/80">
                  Highlight features with clarity and showcase your product's functionality in an intuitive, visual way.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-neon/30 transition-all hover:translate-y-[-5px]">
                <h3 className="font-bold text-lg mb-3 text-neon">Support & Help Center Videos</h3>
                <p className="text-sm text-white/80">
                  Boost onboarding & reduce churn with clear, instructional content that helps users get the most from your product.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-neon/30 transition-all hover:translate-y-[-5px]">
                <h3 className="font-bold text-lg mb-3 text-neon">Marketing & Social Motion Graphics</h3>
                <p className="text-sm text-white/80">
                  Maximize engagement & conversions with eye-catching animations designed specifically for marketing and social media channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Refined and professional */}
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto bg-darknavy/95 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Elevate Your Brand?</h2>
                <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto">
                  Let's connect for a free consultation and explore how motion design can elevate your marketing.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <ActionButton href={linkedInUrl} inverse={true} className="border-white/20">
                  Connect on LinkedIn
                </ActionButton>
                <ActionButton href={calendarUrl} className="bg-neon hover:bg-neon/90 text-darknavy font-bold">
                  Schedule a Meeting
                </ActionButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-darknavy text-center py-8 text-white/60 text-xs">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center space-y-3">
            <p className="text-sm font-light">© {new Date().getFullYear()} Daniel Bodnar. All rights reserved.</p>
            <p className="text-xs text-white/40">Bay Area · Copenhagen</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexAlternate;
