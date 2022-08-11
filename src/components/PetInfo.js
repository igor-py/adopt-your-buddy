import { useState, useEffect } from 'react'
import useImage from '../utils/useImage'
import Button from './Button'

const PetInfo = ({ key, name, lstImg, description, age, contact, isMonth }) => {
    const [imgPosition, setImgPosition] = useState(0)
    const loadImage = (imageName) => setImg(imageName)
    const [img, setImg] = useState()
    const { loading, error, image } = useImage(img)

    useEffect(() => {
        if (lstImg) {
            loadImage(lstImg[imgPosition])
        }
    })

    const handleImgClick = () => {
        setImgPosition((prevState) => {
            // Se a imagem for a última, volta para a primeira imagem.
            return prevState === lstImg.length - 1 ? 0 : prevState + 1
        })
    }

    return (
        <div
            className="sm:w-5/6 mx-auto m-2 py-4 sm:border-2 rounded-md border-black flex 
                        flex-col justify-center content-center bg-purple-100 2xl:w-1/2"
        >
            <div
                className="sm:border-2 border-zinc-300 rounded-md shadow-md w-9/12 m-2 bg-blue-200 
                            flex flex-col justify-evenly content-center mx-auto 2xl:p-8 lg:w-1/2"
            >
                <h1 className="mt-2 text-center font-serif font-semibold">
                    Nome
                </h1>
                <div
                    className="sm:w-1/2 mx-auto text-lg font-extralight font-serif text-center 
                            text-slate-900 m-2 p-4 border-2 border-black"
                >
                    {name}
                </div>
                <h1 className="mt-2 text-center font-serif font-semibold">
                    Responsável
                </h1>
                <div
                    className="sm:w-1/3 mx-auto text-lg font-light font-serif text-center 
                    m-2 p-2 border-2 border-black text-slate-900"
                >
                    {contact}
                </div>
                <h1 className="mt-2 text-center font-serif font-semibold">
                    Idade
                </h1>
                <div
                    className="sm:w-1/5 mx-auto text-lg font-light font-serif text-center 
                            text-slate-900 m-2 p-2 border-2 border-black"
                >
                    {age} {isMonth ? 'Meses' : 'Anos'}
                </div>

                <h1 className="mt-2 text-center font-serif font-semibold">
                    Descrição
                </h1>
                <div
                    className="sm:w-5/6 sm:mx-auto text-lg font-light font-serif text-justify 
                            text-slate-900 m-2 p-4 border-2 border-black min-h-max indent-2"
                >
                    {description}
                </div>
            </div>
            <div
                className="sm:rounded-md sm:shadow-md sm:w-1/2 m-2 mx-auto 
                    md:w-1/2 lg:w-1/3 md:bg-white  p-2 sm:p-0"
            >
                <img
                    className="w-9/12 sm:h-[32rem] h-1/2 mx-auto sm:w-full "
                    src={image}
                    alt="Cat with a headphone"
                ></img>
            </div>
            <button
                className="my-auto mx-auto m-2 p-4 border-2 bg-teal-500/75 
                    hover:scale-105 rounded-md w-1/4"
                onClick={handleImgClick}
            >
                Mudar de Foto
            </button>
        </div>
    )
}

export default PetInfo
