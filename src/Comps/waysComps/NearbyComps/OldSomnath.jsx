import React from 'react'
import nearby_media from './nearby_media.json'


const OldSomnath = () => {
    return (
        <>
            <div className="old_somnath_content h-auto w-full p-1">
                <h1 className="heading bg-red-700 h-14 text-2xl font-bold text-white flex items-center justify-center mb-4 rounded-md shadow-md">
                    Old Somnath
                </h1>
                <div className="content h-auto w-full p-4 bg-gray-100 text-gray-800">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:flex md:flex-col justify-start">
                                    <h2 className="text-2xl font-bold mb-2">Old Somnath</h2>
                                    <p>
                                        A remarkable example of Indian history, this temple was built by the Maratha ruler <span className="font-semibold">Ahilyabai Holkar</span> in the 17th century. The Marathas constructed numerous temples across India after defeating the Mughals, and this temple holds the same spiritual significance as the main Somnath Temple. It stands as a testament to the great legacy of the Maratha Empire.
                                    </p>
                                    <ul className="mt-4">
                                        <li className="md:text-lg font-semibold">1: Phones and electronic devices are allowed inside.</li>
                                        <li className="md:text-lg font-semibold">2: everybody is allowed to enter the garbagriha and perform pooja</li>
                                        <li className="md:text-lg font-semibold">3: A must-visit place to experience the rich history of India.</li>
                                        <li className="md:text-lg font-semibold">4: Located near the main temple entrance, this site beautifully showcases the Maratha Empire's dedication to preserving history.</li>
                                    </ul>
                                </div>
                                <div>
                                    <img
                                        src="https://masalabox.co.in/wp-content/uploads/2019/09/old-somnath-temple-1024x768.jpeg"
                                        alt="Placeholder"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">

                            <ul className="list-disc list-inside text-lg">
                                <li className="font-semibold">
                                    many shivlings to organise yagna
                                </li>
                                <li className="font-semibold"> It will be crowded in festival and vacation times so line can be longer </li>
                                <li className="font-semibold">
                                    Tells the tale of great history
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <img
                                    src="https://pbs.twimg.com/media/E9JhOoiUUAwmqxB?format=jpg"    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://cms.patrika.com/wp-content/uploads/2021/03/28/prachin_somnath_mandir_1.jpg"
                                    alt="Placeholder"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtTmc6JN5-Z_DDkutqFc9yuIX8eza9s_AuU4uNvY6hv5TI8Fly_oJZ9-x02J4hsg_ps8&usqp=CAU"
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

export default OldSomnath