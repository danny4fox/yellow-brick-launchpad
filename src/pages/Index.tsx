
import React from 'react';
import VideoEmbed from '../components/VideoEmbed';
import ActionButton from '../components/ActionButton';
import { Separator } from '@/components/ui/separator';

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

      <main>
        {/* Video Section - Light background */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="w-full max-w-4xl mx-auto">
              <VideoEmbed youtubeId={youtubeVideoId} />
            </div>
          </div>
        </section>

        {/* My Journey Section - Dark with border */}
        <section className="py-20 bg-darknavy">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <img 
                  src="/public/lovable-uploads/719edf1a-d56a-4774-9d0c-09af34b91723.png" 
                  alt="Daniel Bodnar" 
                  className="rounded-2xl w-full max-w-xs mx-auto shadow-xl border-2 border-white/10"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">My Journey</h2>
                <div className="space-y-4 text-lg text-white/80">
                  <p>
                    Hi, I'm Daniel Bodnar — a Motion Graphic Designer with 8 years of experience in content production and marketing. 
                    I've worked with 500+ small and mid-sized businesses across Hungary as a Regional Digital Marketing Consultant at Google, 
                    diving deep into marketing strategies and spotting one common theme:
                  </p>
                  <p className="text-xl font-medium text-neon">
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

        {/* Separator */}
        <div className="container mx-auto px-6">
          <Separator className="my-0 bg-white/10" />
        </div>

        {/* Why Choose Me Section - Gradient background */}
        <section id="services" className="py-20 bg-gradient-to-b from-darknavy to-darknavy/80">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Why Choose Me</h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
                I understand the unique challenges of technology companies and create visual 
                content that truly resonates
              </p>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon/50 transition-all">
                <h3 className="font-bold text-2xl mb-4 text-neon">Tech Expertise</h3>
                <p className="text-white/80">
                  I specialize in SaaS, IoT, and Robotics industries, understanding your unique 
                  needs and audience.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon/50 transition-all">
                <h3 className="font-bold text-2xl mb-4 text-neon">Conversion Focused</h3>
                <p className="text-white/80">
                  My videos aren't just pretty—they're strategically designed to drive user 
                  action and business growth.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon/50 transition-all">
                <h3 className="font-bold text-2xl mb-4 text-neon">End-to-End Service</h3>
                <p className="text-white/80">
                  From concept to final delivery, I handle the entire production process with 
                  meticulous attention to detail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Dark with glow */}
        <section id="contact" className="py-20 bg-darknavy/90 relative">
          <div className="absolute inset-0 bg-neon/5 blur-3xl rounded-full mx-auto w-1/2 h-1/2 my-auto opacity-20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Visual Communication?</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Let's collaborate to bring clarity to your complex ideas
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <ActionButton href={linkedInUrl}>
                Connect on LinkedIn
              </ActionButton>
              <ActionButton href={calendarUrl} className="bg-pink-500 hover:bg-pink-600">
                Schedule a Meeting
              </ActionButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 text-center py-6 text-white/60 text-sm">
        <p>© {new Date().getFullYear()} | Coming Soon</p>
      </footer>
    </div>
  );
};

export default Index;
