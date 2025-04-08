
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
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col items-center">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">Video that makes <span className="text-neon">sense</span></h1>
            <h2 className="text-xl md:text-2xl mb-8"><span className="text-neon">*</span> for SaaS, IoT, Robotics</h2>
          </div>

          {/* Video Section */}
          <div className="w-full max-w-4xl mb-16">
            <VideoEmbed youtubeId={youtubeVideoId} />
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl">
            <div className="p-6 bg-white/5 rounded-lg text-center">
              <h3 className="font-semibold text-xl mb-2 text-neon">SaaS</h3>
              <p>Creating impactful videos to showcase your software solutions effectively.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg text-center">
              <h3 className="font-semibold text-xl mb-2 text-neon">IoT</h3>
              <p>Visualizing complex Internet of Things applications with clarity and precision.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg text-center">
              <h3 className="font-semibold text-xl mb-2 text-neon">Robotics</h3>
              <p>Bringing robotics innovations to life through compelling visual storytelling.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col md:flex-row gap-6 mb-16">
            <ActionButton href={linkedInUrl}>
              Connect on LinkedIn
            </ActionButton>
            <ActionButton href={calendarUrl}>
              Schedule a Meeting
            </ActionButton>
          </div>
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
