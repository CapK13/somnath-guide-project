import React from 'react'
import nearby_media from './nearby_media.json'


const RamMandir = () => {
    return (
        <>

            <div className="Ram_mandir_content h-auto w-full p-1">
                <h1 className="heading bg-red-700 h-14 text-2xl font-bold text-white flex items-center justify-center mb-4 rounded-md shadow-md">
                    Ram mandir
                </h1>
                <div className="content h-auto w-full p-4 bg-gray-100 text-gray-800">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:flex md:flex-col justify-start">
                                    <h2 className="text-2xl font-bold mb-2">Ram Mandir Built by Somnath Trust </h2>
                                    <p>
                                        This temple was built in 2017 by the Somnath Trust. It is a peaceful place for worship and relaxation, making it an excellent picnic spot as well. The temple's spacious campus offers a great environment to explore, take photographs, and create lasting memories. This place reflects modern society’s deep-rooted love for culture and heritage.
                                    </p>
                                    <p>
                                        Behind the Ram Mandir, you will find an ancient <span className="font-semibold">Parshuram Temple</span> and a sacred kund, further highlighting the spiritual significance of the Prabhas region in ancient times.
                                    </p>
                                    <ul className="mt-4">
                                        <li className="md:text-lg font-semibold">1: Technology and electronic devices are allowed inside, so you can capture your memories.</li>
                                        <li className="md:text-lg font-semibold">2: Enjoy a breathtaking panoramic view of Somnath from above.</li>
                                        <li className="md:text-lg font-semibold">3: The temple remains closed between 12 PM and 3 PM.</li>
                                        <li className="md:text-lg font-semibold">4: You can leave your mark by writing "Ram" in the designated books, which are later sent to Ayodhya.</li>
                                    </ul>
                                </div>
                                <div>
                                    <img
                                        src="https://utsav.gov.in/public/uploads/darshan_picture/darshan_151/17225842601182227429.jpg"
                                        alt="Placeholder"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <img
                                    src="https://media-cdn.tripadvisor.com/media/photo-s/1a/52/6e/10/divine-temple-temple.jpg"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/fa/88/9a/shree-ram-mandir-somnath.jpg?w=1200&h=-1&s=1"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://live.staticflickr.com/4708/25308511817_c028c875b6_b.jpg"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                        {/* <div className="bg-white rounded-lg shadow p-6">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in facilis fugit deserunt quo dicta culpa rem ullam consequuntur voluptatem optio est sapiente maxime magnam magni aliquam accusamus, mollitia ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam consequatur nam totam sed impedit, reiciendis explicabo inventore! Vitae ducimus exercitationem rem adipisci, facilis, cumque eligendi incidunt tempora pariatur corrupti fugit quis iste. Asperiores, qui odio quia quibusdam ullam est!
                            </p>
                        </div> */}

                    </div>
                </div>
            </div>

        </>
    )
}

export default RamMandir