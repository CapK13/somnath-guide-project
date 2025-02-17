import React, { useState } from 'react';

const Food = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const picnicSpots = [
    { id: 1, image: 'https://somnath.org/static/img/ram-mandir-3.jpg', description: 'A great resting place to find peace', moreInfo: 'a food cafe and place available behind the temple' },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRDLfcvV7ls404f-Tz0fe-iCHKmw9WzV9oA&s', description: 'Huge campus near the river', moreInfo: 'Also a good place to have picnic with family' },
    { id: 3, image: 'https://somnath.org/static/img/van%20mahotshav.jpg', description: 'Educational Expriance', moreInfo: 'A huge garden containing knowledge of green' },
    { id: 4, image: 'https://avathioutdoors.gumlet.io/travelGuide/dev/somnath_P2474.jpg', description: 'Somnath chopati', moreInfo: 'A breathtaking view of ocean' },
    { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQrLmZop6cH6Lin3kCc9EHzgaVBRmkJGKsA&s', description: 'Triveni Sangam', moreInfo: 'A place where 3 rivers meet' },
  ];

  const restaurants = [
    { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1DNBevh5OQHQo3lNDTsDzb6syJFC5zbbYPEHQBhG3XSJHVSzdkGsXHTGPYTo8K28nR0&usqp=CAU', description: 'Sun Plaza', moreInfo: 'A charming hotel with a warm ambiance.' },
    { id: 2, image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/52/4d/ea/the-fern-residency-somnath.jpg', description: 'THE FERN RESIDENCY', moreInfo: 'Experience Majestic service by Fern' },
    { id: 3, image: 'https://res.cloudinary.com/simplotel/image/upload/x_0,y_96,w_1024,h_576,c_crop,q_80,fl_progressive/w_900,h_506,f_auto,c_fit/vits-the-somnath-gateway/IMG20210302150449_kkplfy_sawnyj', description: 'The Somnath Gateway', moreInfo: 'Enjoy the Luxurious Expriance' },
    { id: 4, image: 'https://content.jdmagicbox.com/comp/veraval/g6/9999p2876.2876.130118172751.p2g6/catalogue/hotel-shubh-suvidha-somnath-veraval-hotels-1rcxig1.jpg', description: 'Hotel Shubhsuvidha', moreInfo: 'Authentic food and drinks' },
  ];
  
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleBackdropClick = () => {
    setSelectedCard(null);
  };

  const renderCards = (items) => (
    items.map(item => (
      <div key={item.id} className="card" onClick={() => handleCardClick(item)}>
        <img src={item.image} alt={item.description} className="card-image" />
        <p className="card-description">{item.description}</p>
      </div>
    ))
  );

  return (
    <div className="h-screen w-full bg-gray-900 text-gray-100 p-4 relative">
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleBackdropClick}>
          <div className="bg-white text-black p-6 rounded-lg max-w-md" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCard.image} alt={selectedCard.description} className="w-full h-64 object-cover rounded" />
            <h2 className="text-xl font-bold mt-4">{selectedCard.description}</h2>
            <p className="mt-2">{selectedCard.moreInfo}</p>
          </div>
        </div>
      )}
      <div>
        <h1 className="text-2xl font-bold p-2">Picnic Spots</h1>
        <div className="scroll-container">
          {renderCards(picnicSpots)}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold p-2">Food and Restaurants</h1>
        <div className="scroll-container">
          {renderCards(restaurants)}
        </div>
      </div>
    </div>
  );
};

export default Food;
