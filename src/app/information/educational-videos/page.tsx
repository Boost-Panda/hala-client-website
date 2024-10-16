import Layout from '@/components/website/Layout';
import Locations from '@/components/website/Locations';

import { videos } from '@/lib/videos';

const EducationalVideos = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">Oral Surgery Educational Videos</h1>
        <h2 className="text-2xl font-bold mb-4">Informed Consent Presentations</h2>
        <p className="mb-12">
          Our oral surgery videos are designed to enhance your understanding of the various oral surgery procedures we
          offer. Simply click on the image and select a specific video that piques your interest, allowing you to delve
          deeper into our comprehensive collection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {videos.map((video) => (
            <div className="aspect-video" key={video.title}>
              <iframe
                className="min-w-full min-h-full"
                src={video.url}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <h4 className="font-bold">{video.title}</h4>
            </div>
          ))}
        </div>

        <Locations />
      </div>
    </Layout>
  );
};

export default EducationalVideos;
