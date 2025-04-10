import React from 'react';
import VideoEmbed from '../components/VideoEmbed';
import ActionButton from '../components/ActionButton';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { ArrowDown, Linkedin, Youtube, Instagram } from 'lucide-react';

const Index = () => {
  // Replace with your actual LinkedIn URL
  const linkedInUrl = "https://www.linkedin.com/in/daniel-bodnar/";

  // Replace with your actual calendar booking URL
  const calendarUrl = "https://calendly.com/hello-danielbodnar/30min";

  // YouTube video ID from the URL
  const youtubeVideoId = "CLaTNJ2Nh9k";

  // Background video ID
  const backgroundVideoId = "mI_SHuTntdc";

  // Motion Graphics text with individual character spans
  const motionGraphicsText = "Motion Graphics".split('').map((char, index) => <span key={index} className="char" style={{
    animationDelay: `${index * 0.05}s`
  }}>
      {char === ' ' ? '\u00A0' : char}
    </span>);

  // Who Am I text with individual character spans - updated to use the same animation as Motion Graphics
  const whoAmIText = "Who Am I?".split('').map((char, index) => <span key={index} className="char" style={{
    animationDelay: `${index * 0.05}s`
  }}>
      {char === ' ' ? '\u00A0' : char}
    </span>);

  // What Am I Doing text with individual character spans - updated to use the same animation as Motion Graphics
  const whatAmIDoingText = "What Am I Doing?".split('').map((char, index) => <span key={index} className="char" style={{
    animationDelay: `${index * 0.05}s`
  }}>
      {char === ' ' ? '\u00A0' : char}
    </span>);

  // Worked With text with individual character spans
  const workedWithText = "Worked With".split('').map((char, index) => <span key={index} className="char" style={{
    animationDelay: `${index * 0.05}s`
  }}>
      {char === ' ' ? '\u00A0' : char}
    </span>);

  // Smooth scroll handler for anchor links
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <div className="min-h-screen bg-gradient-to-b from-darknavy to-black text-white font-sans">
      {/* Hero Section with frosted glass navbar */}
      <header className="relative bg-gradient-to-r from-black to-darknavy/90 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full opacity-20 z-0">
          <VideoEmbed youtubeId={backgroundVideoId} isBackground={true} />
        </div>
        
        {/* Navigation */}
        <div className="container mx-auto px-6 py-6 relative z-10">
          <nav>
            <div className="flex items-center justify-between px-8 py-4">
              <a href="/" className="text-xl font-bold tracking-tight">
                <span className="text-neon">*</span> Daniel Bodnar
              </a>
              
              <div className="flex items-center gap-6">
                <a href="#work" className="text-white/80 hover:text-white transition-colors" onClick={scrollToSection('work')}>
                  Services
                </a>
                <ActionButton href={calendarUrl} highlighted={true}>
                  Free Consultation
                </ActionButton>
              </div>
            </div>
          </nav>
        </div>
        
        {/* Hero Content with improved spacing and glow effect */}
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="flex flex-col items-center justify-center text-center px-0">
            <h1 className="text-5xl md:text-7xl font-normal leading-tight tracking-tight mx-0 my-0">
              <div className="block mb-2">Bringing <strong className="relative">
                <span className="relative z-10">SaaS</span>
              </strong>, <strong className="relative">
                <span className="relative z-10">IoT</span>
              </strong> Brands to Life</div>
              <div className="block">with <span className="gradient-text-hover font-bold italic relative">
                <span className="absolute -inset-2 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite] blur-md rounded-full z-0 glow"></span>
                <span className="text-container inline-flex">
                  {motionGraphicsText}
                </span>
              </span></div>
            </h1>
            
            <div className="mt-12 text-3xl md:text-4xl font-bold text-white/90 relative">
              <span className="absolute -inset-2 bg-white/5 blur-lg rounded-full z-0"></span>
              <span className="relative z-10">Guidance that flows, brand that sticks</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* About Section with white background and enhanced contrast */}
        <section id="about" className="py-24 bg-gradient-to-br from-white to-gray-50 text-darknavy">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-neon/30 via-darknavy/20 to-neon/10 blur-xl rounded-2xl"></div>
                  <img src="/lovable-uploads/719edf1a-d56a-4774-9d0c-09af34b91723.png" alt="Daniel Bodnar" className="relative rounded-2xl w-full max-w-xs mx-auto shadow-2xl border-2 border-gray-100 z-10" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-4xl font-bold mb-8 relative inline-block">
                  <span className="absolute -inset-1 -skew-y-3 bg-darknavy rounded-md z-0"></span>
                  <span className="relative z-10 text-white px-6 py-2 gradient-text-hover">
                    <span className="text-container inline-flex">
                      {whoAmIText}
                    </span>
                  </span>
                </h2>
                <div className="space-y-4 text-sm md:text-base text-darknavy">
                  <p className="font-medium">
                    Hi, I'm Daniel Bodnar — a Motion Graphic Designer with 8 years of experience in content production and marketing. 
                    I've worked with 500+ small and mid-sized businesses across Hungary as a Regional Digital Marketing Consultant at Google, 
                    diving deep into marketing strategies and spotting one common theme:
                  </p>
                  <p className="text-lg font-bold text-darknavy bg-neon/30 p-4 rounded-lg shadow-inner border-l-4 border-neon">
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
                  <p className="italic font-medium text-lg border-b-2 border-neon/50 pb-2 inline-block">
                    We live in a world that's moving fast. Understanding it shouldn't slow us down.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Showcase Section - Enhanced gradient background */}
        <section id="work" className="py-24 bg-gradient-to-tr from-darknavy via-darknavy/95 to-black/90 relative overflow-hidden group wink-on-hover-parent">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 bg-white/10 blur-3xl rounded-full opacity-40"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">My Work</span>
              </h2>
              <p className="text-sm md:text-lg max-w-3xl mx-auto text-white/90 mt-6 flex items-center justify-center transition-all duration-300">
                {/* Circle with arrow */}
                <span className="relative group-hover:opacity-0 transition-opacity duration-300 mr-2">
                  {/* Black circle with arrow */}
                  <span className="bg-black rounded-full w-10 h-10 inline-flex items-center justify-center relative">
                    <ArrowDown size={28} strokeWidth={3} className="animate-continuous-down font-bold transition-opacity duration-300 group-hover:opacity-0 text-white" />
                  </span>
                </span>
                
                <span className="mx-2 font-bold transition-all duration-300 group-hover:scale-115 group-hover:text-xl">
                  <span className="transition-all duration-300 group-hover:opacity-0">
                    <span className="font-normal">Check out my recent</span> <span className="font-bold">Showreel</span>
                  </span>
                  <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-2xl">
                    Click Play <span className="winking-emoji"></span>
                  </span>
                </span>
                
                {/* Circle with arrow */}
                <span className="relative group-hover:opacity-0 transition-opacity duration-300 ml-2">                  
                  {/* Black circle with arrow */}
                  <span className="bg-black rounded-full w-10 h-10 inline-flex items-center justify-center relative">
                    <ArrowDown size={28} strokeWidth={3} className="animate-continuous-down font-bold transition-opacity duration-300 group-hover:opacity-0 text-white" />
                  </span>
                </span>
              </p>
            </div>
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)] bg-white/5 backdrop-blur-sm p-1">
              <VideoEmbed youtubeId={youtubeVideoId} fullWidth={true} />
            </div>
          </div>
        </section>

        {/* What Am I Doing Section - Added emojis to service box titles with spacing and animation */}
        <section id="services" className="py-24 bg-gradient-to-br from-white to-gray-50 text-darknavy relative">
          <div className="container mx-auto px-6 relative z-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
                <span className="absolute -inset-1 -skew-y-3 bg-darknavy rounded-md z-0"></span>
                <span className="relative z-10 text-white px-6 py-2 gradient-text-hover">
                  <span className="text-container inline-flex">
                    {whatAmIDoingText}
                  </span>
                </span>
              </h2>
              <p className="text-sm md:text-lg max-w-2xl mx-auto text-darknavy font-medium mt-6">
                I understand the unique challenges of technology companies and create visual 
                content that truly resonates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon to-neon/30 opacity-70 group-hover:opacity-100 rounded-3xl blur-sm transition-all"></div>
                <div className="relative p-8 bg-[#FEF7CD] rounded-3xl shadow-2xl h-full border-2 border-neon/30 group-hover:border-neon/50 transition-all">
                  <h3 className="font-bold text-xl mb-3 text-white bg-darknavy px-4 py-2 rounded-lg inline-block">
                    <span className="animate-gentle-float inline-block mr-2">🎬</span> Explainer Videos
                  </h3>
                  <ul className="list-disc pl-5 text-base text-darknavy font-medium mt-4 space-y-2">
                    <li>Break down complex products into digestible narratives</li>
                    <li>Transform technical details into engaging stories</li>
                    <li>Create clear visualization of abstract concepts</li>
                    <li>Build emotional connection with your audience</li>
                  </ul>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon to-neon/30 opacity-70 group-hover:opacity-100 rounded-3xl blur-sm transition-all"></div>
                <div className="relative p-8 bg-[#FEF7CD] rounded-3xl shadow-2xl h-full border-2 border-neon/30 group-hover:border-neon/50 transition-all">
                  <h3 className="font-bold text-xl mb-3 text-white bg-darknavy px-4 py-2 rounded-lg inline-block">
                    <span className="animate-gentle-float inline-block mr-2">💻</span> UI & Product Demos
                  </h3>
                  <ul className="list-disc pl-5 text-base text-darknavy font-medium mt-4 space-y-2">
                    <li>Highlight features with clarity and precision</li>
                    <li>Showcase functionality in an intuitive visual way</li>
                    <li>Demonstrate user workflows through animation</li>
                    <li>Present complex interactions in simplified form</li>
                  </ul>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon to-neon/30 opacity-70 group-hover:opacity-100 rounded-3xl blur-sm transition-all"></div>
                <div className="relative p-8 bg-[#FEF7CD] rounded-3xl shadow-2xl h-full border-2 border-neon/30 group-hover:border-neon/50 transition-all">
                  <h3 className="font-bold text-xl mb-3 text-white bg-darknavy px-4 py-2 rounded-lg inline-block">
                    <span className="animate-gentle-float inline-block mr-2">🔍</span> Support & Help Center Videos
                  </h3>
                  <ul className="list-disc pl-5 text-base text-darknavy font-medium mt-4 space-y-2">
                    <li>Boost onboarding with clear instructional content</li>
                    <li>Reduce churn by enhancing user understanding</li>
                    <li>Solve common pain points with visual guidance</li>
                    <li>Create reusable tutorials for customer success</li>
                  </ul>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon to-neon/30 opacity-70 group-hover:opacity-100 rounded-3xl blur-sm transition-all"></div>
                <div className="relative p-8 bg-[#FEF7CD] rounded-3xl shadow-2xl h-full border-2 border-neon/30 group-hover:border-neon/50 transition-all">
                  <h3 className="font-bold text-xl mb-3 text-white bg-darknavy px-4 py-2 rounded-lg inline-block">
                    <span className="animate-gentle-float inline-block mr-2">🚀</span> Marketing & Social Motion Graphics
                  </h3>
                  <ul className="list-disc pl-5 text-base text-darknavy font-medium mt-4 space-y-2">
                    <li>Maximize engagement with eye-catching animations</li>
                    <li>Boost conversions with platform-optimized content</li>
                    <li>Create scroll-stopping social media assets</li>
                    <li>Build campaign consistency across all channels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Worked With Section - Modified for black background and height matching image */}
        <section className="bg-[#18181B] text-white relative">
          <div className="container mx-auto relative z-10 py-0 px-0 bg-[#18181B]">
            <div className="max-w-6xl mx-auto bg-[#18181B] backdrop-blur-sm p-8 rounded-xl">
              <div className="flex items-center justify-center">
                <img src="/lovable-uploads/25ac543f-d6fa-4234-bba3-297c456aa4fd.png" alt="Companies I've worked with including Google, Gulf, Digital Guest, Turf Tank, RaskRask, and Sign.com" className="w-full max-w-5xl mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Updated to remove the container glow and change button styles */}
        <section id="contact" className="py-24 relative bg-gradient-to-r from-black to-darknavy/90 overflow-hidden">
          {/* Background Video - same as header */}
          <div className="absolute inset-0 w-full h-full opacity-20 z-0">
            <VideoEmbed youtubeId={backgroundVideoId} isBackground={true} />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Not ready to have a chat?</h2>
                <p className="text-sm md:text-lg text-white/90 max-w-3xl mx-auto">
                  Let's connect on <strong>LinkedIn</strong>!<br className="mb-3" />
                  <span className="block mt-3">Or, if you're ready for a free 30-minute consultation on how motion design can boost your marketing efforts, just hit the Schedule a Meeting button. 😊</span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <ActionButton href={linkedInUrl} inverse={true} className="shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:text-neon">
                  Connect on LinkedIn
                </ActionButton>
                <ActionButton href={calendarUrl} boxed={true} className="shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Schedule a Meeting
                </ActionButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Updated Footer with two distinct sections */}
      <footer className="bg-black text-center text-white/60">
        {/* Section 1 - Copyright */}
        <div className="py-6">
          <div className="container mx-auto px-6">
            <p>© {new Date().getFullYear()} Daniel Bodnar. All rights reserved.</p>
          </div>
        </div>
        
        {/* Section 2 - Company Info with slightly different background */}
        <div className="py-4 bg-black/80">
          <div className="container mx-auto px-6">
            <div className="text-xs text-white/40 flex justify-center">
              <div className="flex flex-col space-y-1">
                <p>DB MOTION</p>
                <p>Danmarksgade 14B 1.6. 9000 Aalborg</p>
                <p>CVR: 43209493</p>
                <p>hello@danielbodnar.io</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
