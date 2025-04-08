
import React from 'react';
import VideoEmbed from '../components/VideoEmbed';
import ActionButton from '../components/ActionButton';

const Index = () => {
  // Replace with your actual LinkedIn URL
  const linkedInUrl = "https://www.linkedin.com";
  
  // Replace with your actual calendar booking URL
  const calendarUrl = "https://calendly.com";
  
  // YouTube video ID from the URL
  const youtubeVideoId = "CLaTNJ2Nh9k";

  return (
    <div className="min-h-screen bg-darknavy text-white font-sans">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          <span className="text-neon">*</span> Daniel Bodnar
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="hover:text-neon transition-colors">Services</a>
          <a href="#about" className="hover:text-neon transition-colors">About</a>
          <a href="#contact" className="hover:text-neon transition-colors">Contact</a>
          <ActionButton href={calendarUrl} className="bg-pink-500 hover:bg-pink-600">
            Join Waitlist
          </ActionButton>
        </div>
      </nav>

      <main className="container mx-auto px-6">
        {/* Video Section */}
        <div className="w-full max-w-4xl mx-auto mb-16 mt-8">
          <VideoEmbed youtubeId={youtubeVideoId} />
        </div>

        {/* Why Choose Me Section */}
        <div className="mb-20 py-16 px-6 rounded-3xl bg-darknavy border border-white/10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Why Choose Me</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
              I understand the unique challenges of technology companies and create visual 
              content that truly resonates
            </p>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-darknavy border border-white/10 hover:border-neon/50 transition-all">
              <h3 className="font-bold text-2xl mb-4 text-neon">Tech Expertise</h3>
              <p className="text-white/80">
                I specialize in SaaS, IoT, and Robotics industries, understanding your unique 
                needs and audience.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-darknavy border border-white/10 hover:border-neon/50 transition-all">
              <h3 className="font-bold text-2xl mb-4 text-neon">Conversion Focused</h3>
              <p className="text-white/80">
                My videos aren't just pretty—they're strategically designed to drive user 
                action and business growth.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-darknavy border border-white/10 hover:border-neon/50 transition-all">
              <h3 className="font-bold text-2xl mb-4 text-neon">End-to-End Service</h3>
              <p className="text-white/80">
                From concept to final delivery, I handle the entire production process with 
                meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-16 justify-center">
          <ActionButton href={linkedInUrl}>
            Connect on LinkedIn
          </ActionButton>
          <ActionButton href={calendarUrl} className="bg-pink-500 hover:bg-pink-600">
            Schedule a Meeting
          </ActionButton>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-white/60 text-sm">
        <p>© {new Date().getFullYear()} | Coming Soon</p>
      </footer>
    </div>
  );
};

export default Index;
