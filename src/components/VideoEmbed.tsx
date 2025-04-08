
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface VideoEmbedProps {
  youtubeId: string;
  fullWidth?: boolean;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ youtubeId, fullWidth = false }) => {
  return (
    <div className={`${fullWidth ? 'w-full' : 'container mx-auto px-6'}`}>
      <AspectRatio ratio={16 / 9} className="overflow-hidden">
        <iframe
          className="w-full h-full border-0"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </div>
  );
};

export default VideoEmbed;
