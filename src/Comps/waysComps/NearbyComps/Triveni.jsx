import React from 'react'
import nearby_media from './nearby_media.json'


const Triveni = () => {
    return (
        <>

            <div className="Triveni_content h-auto w-full p-1">
                <h1 className="heading bg-red-700 h-14 text-2xl font-bold text-white flex items-center justify-center mb-4 rounded-md shadow-md">
                    Triveni
                </h1>
                <div className="content h-auto w-full p-4 bg-gray-100 text-gray-800">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:flex md:flex-col justify-start">
                                    <h2 className="text-2xl font-bold mb-2">The Last Place of Krishna</h2>
                                    <p>
                                        Triveni Sangam dates back thousands of years and is the sacred confluence of three rivers—Hiran, Kapila, and Saraswati. This is the site where Lord Krishna was cremated after his passing in Bhalka. People visit this holy place to perform Pitru Yagna and seek moksha for their ancestors.
                                    </p>
                                    <ul className="mt-4">
                                        <li className="md:text-lg font-semibold">1: You can bathe in the river here, with safety measures in place.</li>
                                        <li className="md:text-lg font-semibold">2: Booths are available for changing clothes and resting.</li>
                                        <li className="md:text-lg font-semibold">3: A profound place to understand the concept of moksha.</li>
                                        <li className="md:text-lg font-semibold">4: Offers a breathtaking view of the river along with many small, ancient temples.</li>
                                        <li className="md:text-lg font-semibold">5: A must-visit destination for those seeking to understand the cycle of life and death.</li>
                                    </ul>
                                </div>


                                <div>
                                    <img
                                        src="https://www.mysoultravels.com/wp-content/uploads/2020/05/visiting-somnath.jpg"
                                        alt="Placeholder"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
                                <img
                                    src="https://www.tyhotels.co.in/cdn/places/Sasan_Gir/Triveni_Sangam_Somnath_Sasan_Gir/Triveni_Sangam_Somnath_Sasan_Gir8650.jpg"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://www.savaari.com/blog/wp-content/uploads/2021/05/Somnath3-trivenui-sangam.jpg"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://somnathtravels.in/destinations/assets/images/blog/Triveni-Sangam-Ghat-in-Somnath.jpg"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <p>
                                The greatest significance of Triveni Sangam is that it is the site of Lord Krishna's cremation. It is believed that he took his last breath here and wished to be cremated on this sacred soil. Krishna's passing serves as a reminder that even gods must submit to death, teaching us about the cycle of life and death. You can learn more about this event in the Bhalka section.
                            </p>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Triveni