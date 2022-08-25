import dogPhoto from '../images/3.svg'
import catPhoto from '../images/2.svg'
import photoWomanWithPet from '../images/foto-pet-home.jpeg'
import { useHistory, Prompt } from 'react-router-dom'

function HomePage() {
    const history = useHistory()

    const handleAdopt = () => {
        console.log('Handle Adopt')
        history.push('/mapa')
    }

    const handleDonate = () => {
        history.push('/cadastro')
    }

    return (
        <>
            <div className="flex flex-col border-2 border-amber-800 m-4 p-2 bg-slate-200 min-h-screen">
                <div className=" p-4 m-2 sm:w-1/2 sm:mx-auto">
                    <h1
                        className="font-extrabold text-center tracking-wide leading-10 
                    text-3xl sm:text-5xl"
                    >
                        Adote um Pet
                    </h1>
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-8">
                        <div className="p-4 m-2">
                            <img
                                className="mx-auto hover:scale-105"
                                src={catPhoto}
                                alt="Cat Photo"
                            ></img>
                        </div>
                        <div className="border p-4 m-2">
                            <img
                                className="mx-auto hover:scale-105"
                                src={dogPhoto}
                                alt="Dog photo"
                            ></img>
                        </div>
                    </div>
                    <p className="sm:mt-4 mt-2 font-mono text-justify sm:text-lg">
                        Adotar é muito importante, além de ter um companheiro
                        para todos os momentos voce estará ajudando um bichinho
                        a encontrar um lar. E você que encontrou aquele bichinho
                        que está precisando de um lar faça a doação e anuncie no
                        site.
                    </p>
                </div>
                <div className="p-4 my-2 sm:w-1/2 mx-auto">
                    <p className="mt-4 font-mono text-justify sm:text-lg">
                        Milhares de pets são abandonados todos os dias no
                        Brasil, esses animaizinhos que podem trazer muita
                        alegria e serem grandes companheiros, merecem um
                        recomeço feliz com um lar repleto de muito amor!
                    </p>
                    <p className="mt-4 font-mono text-justify sm:text-lg">
                        Adotar salva a vida dos animais e transborda a vida do
                        tutor de alegria. Faça esse ato de amor
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-8 w-1/2 mx-auto">
                    <button
                        onClick={handleAdopt}
                        className="bg-emerald-400 hover:bg-emerald-700 mx-auto text-center 
                        font-medium text-xl shadow border rounded-full p-12 sm:h-44 sm:w-44 w-36 h-36"
                    >
                        Quer Adotar?
                    </button>

                    <div
                        onClick={handleDonate}
                        className="bg-rose-400 hover:bg-rose-700 mx-auto text-center font-medium text-xl shadow border 
                        rounded-full p-12 sm:h-44 sm:w-44 w-36 h-36"
                    >
                        Quer Doar?
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
