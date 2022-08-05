import dogPhoto from '../images/3.svg'
import catPhoto from '../images/2.svg'
import photoWomanWithPet from '../images/foto-pet-home.jpeg'

function HomePage() {
    return (
        <>
            <div className="flex flex-col border-2 border-amber-800 m-4 p-2 bg-slate-200 min-h-screen">
                <div className=" p-4 m-2 sm:w-1/2 sm:mx-auto">
                    <h1 className="font-extrabold text-center tracking-wide leading-10 text-2xl sm:text-4xl">
                        Adote um Pet
                    </h1>
                    <p className="mt-2 font-mono">
                        Adotar é muito importante, além de ter um companheiro
                        para todos os momentos voce estará ajudando um bichinho
                        a encontrar um lar.
                    </p>
                </div>
                <div className="p-4 m-2">
                    <img
                        className="sm:max-h-[60rem] mx-auto h-64"
                        src={photoWomanWithPet}
                        alt="Dog Photo"
                    ></img>
                    <p className="mt-4 font-mono">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row justify-center gap-2 sm:gap-8'>
                    <div className='p-4 m-2'>
                        <img
                            className="mx-auto hover:scale-105"
                            src={catPhoto}
                            alt="Cat with a headphone"
                        ></img>
                        <div className='bg-emerald-400 sm:w-1/2 w-7/12 mx-auto text-center font-medium text-2xl animate-pulse'>Quer Adotar?</div>
                    </div>
                    <div className='border p-4 m-2'>
                        <img
                            className="mx-auto hover:scale-105"
                            src={dogPhoto}
                            alt="Cat with a headphone"
                        ></img>
                        <div className='bg-rose-400 sm:w-1/2 w-7/12 mx-auto text-center font-medium text-2xl animate-pulse'>Quer Doar?</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
