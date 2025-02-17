import React from 'react'
import nearby_media from './nearby_media.json'


const Musuem = () => {
    return (
        <>
            <div className="musuem_content h-auto w-full p-1">
                <h1 className="heading bg-red-700 h-14 text-2xl font-bold text-white flex items-center justify-center mb-4 rounded-md shadow-md">
                    Somnath Musuem
                </h1>
                <div className="content h-auto w-full p-4 bg-gray-100 text-gray-800">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:flex md:flex-col justify-start">
                                    <h2 className="text-2xl font-bold mb-2">Tour of History</h2>
                                    <p>
                                        The Somnath Museum is still under construction, so the old artifacts are currently housed in the old museum. This place contains artifacts discovered from ancient times and excavations in Somnath. You will find many idols and remnants of old temples. Several pieces were also found underground.
                                    </p>
                                    <ul className="mt-4">
                                        <li className="md:text-lg font-semibold">1: You will have to pay extra for cameras, but the entry fee is just 5 rupees.</li>
                                        <li className="md:text-lg font-semibold">2: The museum showcases old temple artifacts from the 16th century, built by Bhimdev Solanki. There are many ancient idols that highlight the fine artistry of the past.</li>
                                        <li className="md:text-lg font-semibold">3: Take your time observing the idols, as they contain intricate details reflecting the craftsmanship of the era.</li>
                                    </ul>
                                </div>


                                <div>
                                    <img
                                        src="https://www.gujarattourism.com/content/dam/gujrattourism/images/museums/prabhas-patan-museum/Prabhas-Patan-Museum-1.jpg"
                                        alt="Placeholder"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
                                <img
                                    src="https://res.cloudinary.com/kmadmin/image/upload/v1719648321/kiomoi/Prabhas_Patan_Museum_6982.jpg"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/51/b2/f0/rows-of-ruins-from-somnath.jpg?w=1200&h=1200&s=1"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://www.trawell.in/admin/images/upload/894169889Somnath_Prabhas_Patan_Museum_Main.jpg"
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

export default Musuem