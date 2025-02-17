import React from 'react'
import nearby_media from './nearby_media.json'


const Geetamandir = () => {
    return (
        <>

            <div className="GeetaMandir_content h-auto w-full p-1">
                <h1 className="heading bg-red-700 h-14 text-2xl font-bold text-white flex items-center justify-center mb-4 rounded-md shadow-md">
                    GeetaMandir
                </h1>
                <div className="content h-auto w-full p-4 bg-gray-100 text-gray-800">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:flex md:flex-col justify-start">
                                    <h2 className="text-2xl font-bold mb-2">Temple Dedicated to Krishna</h2>
                                    <p>
                                        Geeta Mandir is known for its dedication to the Bhagavad Gita. The pillars of the temple are inscribed with shlokas from the Bhagavad Gita, meaning the entire scripture is engraved on them. Additionally, the temple complex includes the Laxminarayan Temple and Balram Cave.
                                    </p>
                                    <ul className="mt-4">
                                        <li className="md:text-lg font-semibold">1: A perfect place for picnics and photoshoots.</li>
                                        <li className="md:text-lg font-semibold">2: Krishna’s Charan Paduka (footprints) can also be found here.</li>
                                        <li className="md:text-lg font-semibold">3: An old temple nearby is a beautiful sight from a distance.</li>
                                        <li className="md:text-lg font-semibold">4: Information about all the Avatars of Vishnu is well-described on the walls.</li>
                                        <li className="md:text-lg font-semibold">5: Geeta Mandir is located in the opposite direction of Somnath, making it an ideal final stop, as it remains open all day.</li>
                                    </ul>
                                </div>


                                <div>
                                    <img
                                        src="https://eindiatourism.in/wp-content/uploads/2023/07/Gita_Mandir_Somnath_Gujarat_during_Dwaraka_DWARASPDB_2015_3.jpg"
                                        alt="Placeholder"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
                                <img
                                    src="https://hblimg.mmtcdn.com/content/hubble/img/somnath/mmt/activities/m_Gita%20Temple_l_364_549.jpg?im=Resize=(288,162)"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://media-cdn.tripadvisor.com/media/photo-s/0d/aa/e5/37/idol-of-shri-lord-krishna.jpg"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/0b/6e/50/gita-mandir.jpg?w=900&h=-1&s=1"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <p>
                                Geeta Mandir was built around the beginning og 2000s, some old temples and caves were always there, these temples were built as an upgrade, so the whole place contains a part of history as well, belived to be an important place for scholrs in old times.
                            </p>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Geetamandir