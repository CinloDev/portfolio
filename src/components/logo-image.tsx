import React from 'react';
import Image from 'next/image';

export default function LogoImage() {
  return (
    <div className="inline-flex items-center">
      <Image
        src="/assets/logo.png"
        alt="CinloDev logo"
        width={160}
        height={48}
        className="object-contain"
        priority
      />
    </div>
  );
}