import React from 'react'
import nearby_media from './nearby_media.json'

const Baanganga = () => {
    return (
        <>
            <div className="Bannganga_content h-auto w-full p-1">
                <h1 className="heading bg-red-700 h-14 text-2xl font-bold text-white flex items-center justify-center mb-4 rounded-md shadow-md">
                    Bannganga
                </h1>
                <div className="content h-auto w-full p-4 bg-gray-100 text-gray-800">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:flex md:flex-col justify-start">
                                    <h2 className="text-2xl font-bold mb-2">Nature Worships Mahadev</h2>
                                    <p>
                                        Baan Ganga is known as the place where Jara shot the arrow that led to Krishna's passing. The Shivling here remains mostly submerged in water, as if the ocean itself worships Mahadev.
                                    </p>
                                    <p>
                                        You can view this Shivling from the Somnath main temple using binoculars. The ocean shore is lined with many temples, each deeply connected to history.
                                    </p>
                                    <ul className="mt-4">
                                        <li className="md:text-xl font-semibold">1: It is 3 km away, in the opposite direction of Bhalka. A special taxi is required to reach here.</li>
                                        <li className="md:text-xl font-semibold">2: A peaceful place near the ocean shore, perfect for relaxation.</li>
                                        <li className="md:text-xl font-semibold">3: This site is not managed by the Somnath Trust, so buses do not go there.</li>
                                        <li className="md:text-xl font-semibold">4: An old Hanuman temple is also located nearby.</li>
                                    </ul>
                                </div>


                                <div>
                                    <img
                                        src="https://www.tyhotels.co.in/cdn/places/Somnath/Ban_Ganga/attraction-1431616311.jpg"
                                        alt="Placeholder"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                       

                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
                                <img
                                    src="https://cdn1.tripoto.com/media/filter/tst/img/2167026/Image/1698900040_whatsapp_image_2023_11_02_at_10_10_20_am.jpeg.webp"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0b/ec/cc/b8/camel-ride-at-the-beach.jpg"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nXFlMrjIhBqarntQ46naX0-EIdNLtLc5FA&s"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                     

                    </div>
                </div>
            </div>

        </>
    )
}

export default Baanganga