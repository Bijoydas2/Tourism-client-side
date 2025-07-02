import React from 'react';

const PhotoGallery = () => {
  const photos = [
    "https://i.ibb.co/ccZyrGg8/luca-bravo-O453-M2-Liufs-unsplash.jpg",
    "https://i.ibb.co/DHJC3SHG/travis-fish-B8-JID1-Gt-BU-unsplash.jpg",
    "https://i.ibb.co/ccZyrGg8/luca-bravo-O453-M2-Liufs-unsplash.jpg",
    "https://i.ibb.co/GQGh4R5j/kelvin-zyteng-bq-II05-VYu-Cw-unsplash.jpg",
    "https://i.ibb.co/ymfFKHwy/datingscout-Bmf-XYr-Gq-KJw-unsplash.jpg",
    "https://i.ibb.co/DDQ1gBxW/eva-darron-o-Cd-Vt-GFe-DC0-unsplash.jpg",
    "https://i.ibb.co/rG1Kpvw5/janis-oppliger-d-RHE-XF7wls-unsplash.jpg",
    "https://i.ibb.co/pj880bX2/il-vagabiondo-8e-Nt0-CQam-B0-unsplash.jpg"
  ];

  return (
    <section className="mt-16 px-6 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-600 ">Travel Moments</h2>
        <p className="text-center text-gray-400 mb-8 max-w-xl mx-auto">
          A glimpse of the beautiful journeys taken by our happy travelers.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {photos.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-110 transform transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
