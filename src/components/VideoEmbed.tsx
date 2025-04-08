
import React from 'react';

interface VideoEmbedProps {
  youtubeId: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ youtubeId }) => {
  return (
    <div className="relative w-full overflow-hidden pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
