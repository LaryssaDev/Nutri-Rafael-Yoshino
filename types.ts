import React from 'react';

export interface ExpertData {
  name: string;
  role: string;
  whatsappUrl: string;
  instagramUrl: string;
  address: string;
}

export interface GalleryImage {
  url: string;
  id: string;
  alt?: string;
}

export interface Feature {
  title: string;
  icon: React.ComponentType<any>;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}