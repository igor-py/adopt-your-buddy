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
                    <p className="sm:mt-4 mt-2 font-mono text-justify sm:text-lg">
                        Adotar é muito importante, além de ter um companheiro
                        para todos os momentos voce estará ajudando um bichinho
                        a encontrar um lar. E você que encontrou aquele bichinho
                        que está precisando de um lar faça a doação e anuncie no
                        site.
                    </p>
                </div>
                <div className="p-4 my-2 sm:w-1/2 mx-auto">
                    <img
                        className="sm:max-h-[60rem] mx-auto h-64"
                        src={photoWomanWithPet}
                        alt="Dog Photo"
                    ></img>
                    <p className="mt-4 font-mono text-justify sm:text-lg">
                        Milhares de pets são abandonados todos os dias no
                        Brasil, esses animaizinhos que podem trazer muita
                        alegria e serem grandes companheiros, merecem um
                        recomeço feliz com um lar repleto de muito amor!
                    </p>
                    <p className="mt-4 font-mono text-justify sm:text-lg">
                        Adotar salva a vida dos animais e transborda a vida do
                        tutor de alegria. Faça esse ato de amor: <b className='text-orange-400 text-2xl animate-pulse'>ADOTE!</b>
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-8">
                    <div className="p-4 m-2">
                        <img
                            className="mx-auto hover:scale-105"
                            src={catPhoto}
                            alt="Cat Photo"
                            onClick={handleAdopt}
                        ></img>
                        <div
                            onClick={handleAdopt}
                            className="bg-emerald-400 sm:w-1/2 w-7/12 mx-auto text-center font-medium text-2xl animate-pulse"
                        >
                            Quer Adotar?
                        </div>
                    </div>
                    <div className="border p-4 m-2">
                        <img
                            className="mx-auto hover:scale-105"
                            src={dogPhoto}
                            alt="Dog photo"
                            onClick={handleDonate}
                        ></img>
                        <div
                            onClick={handleDonate}
                            className="bg-rose-400 sm:w-1/2 w-7/12 mx-auto text-center font-medium text-2xl animate-pulse"
                        >
                            Quer Doar?
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
