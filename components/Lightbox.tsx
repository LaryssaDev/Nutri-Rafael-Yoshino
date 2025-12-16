import React from 'react';
import { X } from 'lucide-react';
import { GalleryImage } from '../types';

interface LightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
      >
        <X size={32} />
      </button>
      
      <img 
        src={image.url} 
        alt="Resultado" 
        className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;