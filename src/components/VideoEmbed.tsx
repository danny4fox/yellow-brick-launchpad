
import React, { useState, useEffect } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface VideoEmbedProps {
  youtubeId: string;
  fullWidth?: boolean;
  isHero?: boolean;
  isBackground?: boolean;
  lazyLoad?: boolean;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ 
  youtubeId, 
  fullWidth = false, 
  isHero = false,
  isBackground = false,
  lazyLoad = true
}) => {
  const [shouldLoad, setShouldLoad] = useState(!lazyLoad);
  
  useEffect(() => {
    if (lazyLoad) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        { rootMargin: '200px' }
      );
      
      const currentContainer = document.getElementById(`video-container-${youtubeId}`);
      if (currentContainer) {
        observer.observe(currentContainer);
      }
      
      return () => observer.disconnect();
    }
  }, [lazyLoad, youtubeId]);

  // Optimize video parameters
  const videoParams = new URLSearchParams();
  
  if (isHero || isBackground) {
    videoParams.append('autoplay', '1');
    videoParams.append('mute', '1');
    videoParams.append('controls', '0');
    videoParams.append('showinfo', '0');
    videoParams.append('rel', '0');
    videoParams.append('loop', '1');
    videoParams.append('playlist', youtubeId);
    videoParams.append('modestbranding', '1');
  } else {
    videoParams.append('rel', '0');
    videoParams.append('modestbranding', '1');
  }
  
  const videoSrc = `https://www.youtube.com/embed/${youtubeId}?${videoParams.toString()}`;
  
  // Placeholder for non-loaded videos
  const placeholderImage = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  
  return (
    <div 
      id={`video-container-${youtubeId}`}
      className={`${isBackground ? 'absolute inset-0 w-full h-full' : ''}`}
      data-video-id={youtubeId}
    >
      {isBackground ? (
        <div className="relative w-full h-full">
          {shouldLoad ? (
            <iframe
              className="w-full h-full border-0 object-cover pointer-events-none scale-[1.5] opacity-20"
              src={videoSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          ) : (
            <div 
              className="w-full h-full border-0 object-cover pointer-events-none scale-[1.5] opacity-20"
              style={{
                backgroundImage: `url(${placeholderImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          )}
          {/* Gradient overlays for fading the edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-darknavy via-transparent to-darknavy pointer-events-none"></div>
        </div>
      ) : (
        <AspectRatio ratio={16 / 9} className={`overflow-hidden ${isHero ? 'h-full' : ''}`}>
          {shouldLoad ? (
            <iframe
              className="w-full h-full border-0"
              src={videoSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          ) : (
            <div 
              className="w-full h-full border-0 flex items-center justify-center bg-darknavy/20 cursor-pointer"
              style={{
                backgroundImage: `url(${placeholderImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onClick={() => setShouldLoad(true)}
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
          )}
        </AspectRatio>
      )}
    </div>
  );
};

export default VideoEmbed;
