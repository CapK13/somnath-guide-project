import React, { useState } from "react";
import Gall from "./explore_media.json";

const Photoshoots = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeBackdrop = () => {
    setSelectedItem(null);
  };

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="h-[130vh] w-full bg-gray-900 px-2 overflow-auto flex flex-col justify-around items-center">
      <div className="photo_places h-[40vh] w-full p-2 overflow-x-auto flex gap-4 custom-scrollbar">
        {Gall.photo_places.map((card) => (
          <div
            key={card.id}
            className="min-w-[250px] max-w-[250px] h-full bg-gray-600 shadow-md rounded-md overflow-hidden flex-shrink-0 cursor-pointer flex flex-col justify-center"
            onClick={() => handleItemClick(card)}
          >
          
            <img
              src={card.imgSrc}
              alt={card.title}
              className={`h-2/3 w-full object-cover ${loadedImages[card.id] ? "" : "hidden"}`}
              onLoad={() => handleImageLoad(card.id)}
              loading="lazy"
            />
            <div className="p-2 text-center flex flex-col justify-center items-center">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-sm text-white">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`photo_gallery h-[80vh] w-full p-4 overflow-auto photo_gal_box grid
                    grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2`}
      >
        {Gall.photoshoot_gallery.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer max-sm:h-40"
            onClick={() => handleItemClick(image)}
          >
            <img
              src={image.im_src}
              alt={image.alt}
              className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-110 
                 `}
              onLoad={() => handleImageLoad(image.id)
              }
            />
            <div
              className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <p className="text-white font-bold text-lg">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeBackdrop}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-4/5 max-w-3xl"
            onClick={(e) => e.stopPropagation()} 
          >

            <img
              src={selectedItem.imgSrc || selectedItem.im_src}
              alt={selectedItem.title || selectedItem.alt}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg mb-4"
            />
            <h3 className="text-2xl text-gray-700  font-bold mb-2">
              {selectedItem.title || selectedItem.alt}
            </h3>
            <p className="text-gray-700  text-center">
              {selectedItem.description || "No description available."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photoshoots;
