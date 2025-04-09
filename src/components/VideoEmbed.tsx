
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface VideoEmbedProps {
  youtubeId: string;
  fullWidth?: boolean;
  isHero?: boolean;
  isBackground?: boolean;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ 
  youtubeId, 
  fullWidth = false, 
  isHero = false,
  isBackground = false 
}) => {
  const videoParams = (isHero || isBackground)
    ? '?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=' + youtubeId
    : '';

  return (
    <div className={`${isBackground ? 'absolute inset-0 w-full h-full' : ''}`}>
      {isBackground ? (
        <iframe
          className="w-full h-full border-0 object-cover pointer-events-none"
          src={`https://www.youtube.com/embed/${youtubeId}${videoParams}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <AspectRatio ratio={16 / 9} className={`overflow-hidden ${isHero ? 'h-full' : ''}`}>
          <iframe
            className="w-full h-full border-0"
            src={`https://www.youtube.com/embed/${youtubeId}${videoParams}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      )}
    </div>
  );
};

export default VideoEmbed;
