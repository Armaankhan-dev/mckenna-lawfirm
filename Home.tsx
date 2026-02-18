
import React from 'react';
import { X } from 'lucide-react';

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export const VideoLightbox: React.FC<VideoLightboxProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-accent-gold transition-colors z-[110]"
      >
        <X size={48} strokeWidth={1} />
      </button>
      
      <div className="relative w-full max-w-6xl aspect-video shadow-2xl animate-in zoom-in-95 duration-500">
        <iframe 
          src={`${videoUrl}?autoplay=1`}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="McKenna Laws Introduction"
        />
      </div>
    </div>
  );
};
