
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface VideoEmbedProps {
  youtubeId: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ youtubeId }) => {
  return (
    <div className="w-full">
      <AspectRatio ratio={16 / 9} className="overflow-hidden">
        <iframe
          className="w-full h-full border-0"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </div>
  );
};

export default VideoEmbed;
