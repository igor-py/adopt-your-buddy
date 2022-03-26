import { useState } from 'react'
import TestChildren from './TestChildren'

function Pet({ name, lstImg, description, contact, age }) {
    const [imgPosition, setImgPosition] = useState(0)
    const img = lstImg[imgPosition]

    const handleImgClick = () => {
        setImgPosition((prevState) => {
            return prevState === lstImg.length - 1 ? 0 : prevState + 1
        })
    }

    return (
        <div className="w-5/6 mx-auto m-2 py-4 border-2 rounded-md border-black flex flex-row flex-nowrap justify-around">
            <div className="rounded-md shadow-md w-1/2 m-2 bg-stone-500">
                <img
                    className="w-auto h-[32rem] mx-auto"
                    src={img}
                    alt="Cat with a headphone"
                ></img>
            </div>
            <div className="border-2 border-black rounded-md shadow-md w-1/2 m-2 bg-blue-200 flex flex-col justify-evenly content-center">
                <div className="w-5/6 h-1/4 mx-auto text-lg font-light font-serif text-center text-lime-700 m-2 p-4 border-2 border-black">
                    {description}
                </div>
                <div className="w-1/2 mx-auto text-lg font-light font-serif text-center text-lime-700 m-2 p-4 border-2 border-black">
                    {name}
                </div>
                <div className="w-1/2 mx-auto text-lg font-light font-serif text-center text-lime-700 m-2 p-4 border-2 border-black">
                    Resposável: {contact}
                </div>
                <div className="w-1/2 mx-auto text-lg font-light font-serif text-center text-lime-700 m-2 p-4 border-2 border-black">
                    Idade: {age}
                </div>
            </div>
            <button
                className="my-auto m-2 p-4 hover:bg-black"
                onClick={handleImgClick}
            >
                Click Me
            </button>
        </div>
    )
}

export default Pet
