import { useState } from 'react'
import TestChildren from './TestChildren'
import foto from '../images/Nala 1.jpg'
import foto2 from '../images/Nala 2.jpg'
import foto3 from '../images/Nala 3.jpg'
import foto4 from '../images/FotoNalaDeFone.jpg'

function Pet({ name }) {
    const [img, setImg] = useState(foto)
    let click = false

    const handleImgClick = () => {
        setImg(img === foto ? foto4 : foto)
        click = !click
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
                    Campo de descrição
                </div>
                <div className="w-1/2 mx-auto text-lg font-light font-serif text-center text-lime-700 m-2 p-4 border-2 border-black">
                    {name}
                </div>
                <div className="w-1/2 mx-auto text-lg font-light font-serif text-center text-lime-700 m-2 p-4 border-2 border-black">
                    Responsável - Contato
                </div>
                <div className="w-1/2 mx-auto text-lg font-light font-serif text-center text-lime-700 m-2 p-4 border-2 border-black">
                    Idade - 9 Meses
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
