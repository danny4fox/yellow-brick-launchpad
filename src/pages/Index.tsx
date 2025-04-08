
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
      {/* Hero Section with Video Background */}
      <header className="relative overflow-hidden">
        {/* Video Background */}
        <div className="container mx-auto px-6">
          <VideoEmbed youtubeId={youtubeVideoId} isHero={true} />
        </div>
        
        {/* Navigation Floating on Top */}
        <div className="absolute top-0 left-0 right-0 z-20 container mx-auto px-6">
          <nav className="py-6">
            <div className="flex items-center justify-between px-6 py-3 rounded-lg">
              <a href="/" className="text-2xl font-bold">
                <span className="text-neon">*</span> Daniel Bodnar
              </a>
              
              <div className="hidden md:flex items-center">
                <ActionButton href={calendarUrl}>
                  Free Consultation
                </ActionButton>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Who Am I Section - Now with black background */}
        <section id="about" className="py-20 bg-black">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Who Am I?</h2>
                <div className="space-y-4 text-base text-white/80">
                  <p>
                    Hi, I'm Daniel Bodnar — a Motion Graphic Designer with 8 years of experience in content production and marketing. 
                    I've worked with 500+ small and mid-sized businesses across Hungary as a Regional Digital Marketing Consultant at Google, 
                    diving deep into marketing strategies and spotting one common theme:
                  </p>
                  <p className="text-lg font-medium text-neon">
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

        {/* What Am I Doing Section with Video Background */}
        <section id="services" className="py-20 relative">
          {/* Video Background */}
          <div className="absolute inset-0 z-0 opacity-30">
            <VideoEmbed youtubeId={youtubeVideoId} isBackground={true} />
          </div>
          
          {/* Black overlay with 45-degree gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/90 to-darknavy/80 z-10"></div>
          
          <div className="container mx-auto px-6 relative z-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Am I Doing?</h2>
              <p className="text-base md:text-lg max-w-3xl mx-auto text-white/80">
                I understand the unique challenges of technology companies and create visual 
                content that truly resonates
              </p>
            </div>

            {/* Services Cards - Now with black background */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-black/70 backdrop-blur-sm border border-white/10 hover:border-neon/50 transition-all">
                <h3 className="font-bold text-xl mb-4 text-neon">Explainer Videos</h3>
                <p className="text-base text-white/80">
                  Break down complex products & services into clear, engaging narratives that your audience can easily understand.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-black/70 backdrop-blur-sm border border-white/10 hover:border-neon/50 transition-all">
                <h3 className="font-bold text-xl mb-4 text-neon">UI & Product Demos</h3>
                <p className="text-base text-white/80">
                  Highlight features with clarity and showcase your product's functionality in an intuitive, visual way.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-black/70 backdrop-blur-sm border border-white/10 hover:border-neon/50 transition-all">
                <h3 className="font-bold text-xl mb-4 text-neon">Support & Help Center Videos</h3>
                <p className="text-base text-white/80">
                  Boost onboarding & reduce churn with clear, instructional content that helps users get the most from your product.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-black/70 backdrop-blur-sm border border-white/10 hover:border-neon/50 transition-all">
                <h3 className="font-bold text-xl mb-4 text-neon">Marketing & Social Motion Graphics</h3>
                <p className="text-base text-white/80">
                  Maximize engagement & conversions with eye-catching animations designed specifically for marketing and social media channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - With 45-degree gradient */}
        <section id="contact" className="py-20 relative overflow-hidden">
          {/* Black gradient background with 45-degree angle */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black to-darknavy"></div>
          
          {/* Light effect for better contrast */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-neon/10 blur-3xl rounded-full opacity-30"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-8">
              <p className="text-lg text-white max-w-2xl mx-auto">
                Let's connect for a free consultation and explore how motion design can elevate your marketing :)
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <ActionButton href={linkedInUrl} inverse={true}>
                Connect on LinkedIn
              </ActionButton>
              <ActionButton href={calendarUrl} className="bg-neon hover:bg-neon/80 text-darknavy font-bold">
                Schedule a Meeting
              </ActionButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Now pure black */}
      <footer className="bg-black text-center py-6 text-white/60 text-sm">
        <p>© {new Date().getFullYear()} | Coming Soon</p>
      </footer>
    </div>
  );
};

export default Index;
