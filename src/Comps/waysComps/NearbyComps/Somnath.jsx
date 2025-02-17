import React from 'react'
import nearby_media from './nearby_media.json'

const Somnath = () => {
    return (
        <>
            <div className="somnath_content h-auto w-full p-1">
                <h1 className="heading bg-red-700 h-14 text-2xl font-bold text-white flex items-center justify-center mb-4 rounded-md shadow-md">
                    Somnath
                </h1>
                
                <div className="content h-auto w-full p-4 bg-gray-100 text-gray-800">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:flex md:flex-col justify-start ">
                                    <h2 className="text-2xl font-bold mb-2">Main Temple of Somnath</h2>
                                    <p className=''>
                                        The main attraction of Somnath, this <span className='font-semibold'>Māru-Gurjara</span> architecture temple offers a serene and peaceful experience. It is open all day, allowing you to visit anytime at your convenience.
                                        The temple has a remarkable history, having been attacked and destroyed 17 times, yet it still stands tall as a testament to countless sacrifices. Known as Kailash Mahameru Prasad, this temple exemplifies the exceptional craftsmanship of the Sompura Salats.
                                    </p>
                                    <ul className="mt-4">
                                        <li className="md:text-xl font-semibold mb-2">1 : Technology or electronic devices are not allowed inside.</li>
                                        <li className="md:text-xl font-semibold mb-2">2 : Free services are available within the temple premises to securely store your important belongings.</li>
                                        <li className="md:text-xl font-semibold mb-2">3 : A light show is held at night, adding a magical touch to your visit.</li>
                                    </ul>
                                </div>

                                <div>
                                    <img
                                        src="https://static.toiimg.com/photo/46918916.cms"
                                        alt="Placeholder"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <p className="text-xl">
                                There are many interesting places you can explore after the darshan of Someshwar.
                            </p>
                            <ul className="mt-4 list-disc list-inside text-lg">
                                <li className="font-semibold">
                                    Representation of all Shivlingas and its stories in the form of statues
                                </li>
                                <li className="font-semibold">Hamirsinh Gohil's Memorial</li>
                                <li className="font-semibold">
                                    "Baan Stambh" – An ancient pillar with an arrow pointing towards the south. It signifies that there is no landmass from this point until the South Pole.
                                </li>
                                <li className="font-semibold">
                                    Remains of an old temple dedicated to Ma Parvati
                                </li>
                                <li className="font-semibold">
                                    Carts are available too, 25 rupees per person and free for elders and physically challanged
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
                                <img
                                    src="https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/Somnath%20Jyotirlinga%20%20Internet--870ebe.jpg"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://gujarati.cdn.zeenews.com/gujarati/sites/default/files/2022/06/15/389347-somnathzee3.jpg"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FPlacesOfInterest%2FSomnath-Evening-View.jpg&w=1080&q=90"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <ul className="mt-4 list-disc list-inside text-lg">
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Somnath