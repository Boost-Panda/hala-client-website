import { memo } from 'react';
import Image from 'next/image';

import { galleryImages } from '@/lib/gallery';

const Gallery = memo(() => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-4">Our Office</h2>
      <p className="text-center text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-12">
        Take a look around our office.
      </p>

      <div className="flex flex-wrap gap-4 justify-center items-center">
        {galleryImages.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={300}
            height={200}
            loading="lazy"
            className="rounded-lg object-cover h-60 md:h-40 md:w-[300px]"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        ))}
      </div>
    </div>
  );
});

Gallery.displayName = 'Gallery';

export default Gallery;
