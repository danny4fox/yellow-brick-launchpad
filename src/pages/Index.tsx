import React from 'react';
import VideoEmbed from '../components/VideoEmbed';
import ActionButton from '../components/ActionButton';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
const Index = () => {
  // Replace with your actual LinkedIn URL
  const linkedInUrl = "https://www.linkedin.com";

  // Replace with your actual calendar booking URL
  const calendarUrl = "https://calendly.com";

  // YouTube video ID from the URL
  const youtubeVideoId = "CLaTNJ2Nh9k";
  return <div className="min-h-screen bg-gradient-to-b from-darknavy to-black text-white font-sans">
      {/* Hero Section with frosted glass navbar */}
      <header className="relative bg-gradient-to-r from-black to-darknavy/90">
        {/* Navigation */}
        <div className="container mx-auto px-6 py-6">
          <nav>
            <div className="flex items-center justify-between px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg">
              <a href="/" className="text-2xl font-bold tracking-tight">
                <span className="text-neon">*</span> Daniel Bodnar
              </a>
              
              <div className="flex items-center gap-6">
                <Link to="/alternate" className="text-white/80 hover:text-white transition-colors">
                  Alternate Version
                </Link>
                <ActionButton href={calendarUrl} className="shadow-xl">
                  Free Consultation
                </ActionButton>
              </div>
            </div>
          </nav>
        </div>
        
        {/* Hero Content with improved spacing */}
        <div className="container mx-auto px-6 py-32">
          <div className="flex flex-col items-center justify-center text-center px-0">
            <div className="space-y-6 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mx-0 my-0">
                Bringing SaaS, IoT Brands to Life <br className="hidden md:block" />
                <span className="text-neon">with Motion Graphics</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white/90 font-light">
                Guidance that flows, brand that sticks
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* About Section with white background */}
        <section id="about" className="py-24 bg-white text-darknavy">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <img src="/lovable-uploads/719edf1a-d56a-4774-9d0c-09af34b91723.png" alt="Daniel Bodnar" className="rounded-2xl w-full max-w-xs mx-auto shadow-2xl border-2 border-gray-100" />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Who Am I?</h2>
                <div className="space-y-4 text-base text-darknavy/80">
                  <p>
                    Hi, I'm Daniel Bodnar — a Motion Graphic Designer with 8 years of experience in content production and marketing. 
                    I've worked with 500+ small and mid-sized businesses across Hungary as a Regional Digital Marketing Consultant at Google, 
                    diving deep into marketing strategies and spotting one common theme:
                  </p>
                  <p className="text-lg font-medium text-darknavy">
                    👉 Video content was full of untapped potential.
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

        {/* Video Showcase Section - Modern gradient background */}
        <section className="py-24 bg-gradient-to-tr from-darknavy via-darknavy/95 to-black/90 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-neon/10 blur-3xl rounded-full opacity-30"></div>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">My Work</h2>
              <p className="text-base md:text-lg max-w-3xl mx-auto text-white/80">
                Check out this example of my motion design work
              </p>
            </div>
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm p-1">
              <VideoEmbed youtubeId={youtubeVideoId} fullWidth={true} />
            </div>
          </div>
        </section>

        {/* What Am I Doing Section - Clean white background */}
        <section id="services" className="py-24 bg-white text-darknavy relative">
          <div className="container mx-auto px-6 relative z-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What Am I Doing?</h2>
              <p className="text-base md:text-lg max-w-3xl mx-auto text-darknavy/80">
                I understand the unique challenges of technology companies and create visual 
                content that truly resonates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px]">
                <h3 className="font-bold text-xl mb-4 text-darknavy">Explainer Videos</h3>
                <p className="text-base text-darknavy/80">
                  Break down complex products & services into clear, engaging narratives that your audience can easily understand.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px]">
                <h3 className="font-bold text-xl mb-4 text-darknavy">UI & Product Demos</h3>
                <p className="text-base text-darknavy/80">
                  Highlight features with clarity and showcase your product's functionality in an intuitive, visual way.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px]">
                <h3 className="font-bold text-xl mb-4 text-darknavy">Support & Help Center Videos</h3>
                <p className="text-base text-darknavy/80">
                  Boost onboarding & reduce churn with clear, instructional content that helps users get the most from your product.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px]">
                <h3 className="font-bold text-xl mb-4 text-darknavy">Marketing & Social Motion Graphics</h3>
                <p className="text-base text-darknavy/80">
                  Maximize engagement & conversions with eye-catching animations designed specifically for marketing and social media channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Refined dark section with subtle glass effect */}
        <section id="contact" className="py-28 relative overflow-hidden bg-gradient-to-br from-darknavy to-black">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-neon/10 blur-3xl rounded-full opacity-30"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
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
      <footer className="bg-black text-center py-10 text-white/60 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-base font-light">© {new Date().getFullYear()} Daniel Bodnar. All rights reserved.</p>
            <p className="text-xs text-white/40">Bay Area · Copenhagen</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;