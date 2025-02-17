import React from 'react'
import nearby_media from './nearby_media.json'


const Bhalkatirth = () => {
    return (
        <>

            <div className="Bhalkatirth_content h-auto w-full p-1">
                <h1 className="heading bg-red-700 h-14 text-2xl font-bold text-white flex items-center justify-center mb-4 rounded-md shadow-md">
                    Bhalkatirth
                </h1>
                <div className="content h-auto w-full p-4 bg-gray-100 text-gray-800">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:flex md:flex-col justify-start">
                                    <h2 className="text-2xl font-bold mb-2">Prabhas Kshetra</h2>
                                    <p>
                                        Bhalka has a long and significant history, as it is known as the place where Shri Krishna passed away. This sacred site is located 3 km from Somnath on the way to Veraval.
                                    </p>
                                    <p>
                                        An amazing temple with a divine atmosphere, this place represents the concept of <span className='font-bold'>Hari-Har</span>. It is truly a wonderful place to relax and enjoy a picnic. Somnath Trust buses also provide transportation to this location.
                                    </p>
                                    <ul className="mt-4">
                                        <li className="md:text-xl font-semibold">1: Another great spot for picnics and photoshoots.</li>
                                        <li className="md:text-xl font-semibold">2: Recently upgraded with all necessary facilities for visitors.</li>
                                        <li className="md:text-xl font-semibold">3: This temple was built by the Somnath Trust due to its ancient significance.</li>
                                    </ul>
                                </div>


                                <div>
                                    <img
                                        src="https://bhalkatirth.weebly.com/uploads/1/3/3/4/133480702/radhe-radhe_orig.jpg"
                                        alt="Placeholder"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
                                <img
                                    src="https://i0.wp.com/ranasafvi.com/wp-content/uploads/2019/07/img_7651.jpg?resize=1242%2C906&ssl=1"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://holydham.com/wp-content/uploads/2013/02/Bhalka-tirtha-4.jpg"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://live.staticflickr.com/4653/26578485108_8c82833cf2_b.jpg"
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

export default Bhalkatirth