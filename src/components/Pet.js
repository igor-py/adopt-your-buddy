import TestChildren from './TestChildren'

function Pet({ name, img }) {
    return (
        <div className="w-2/3 mx-auto m-2 py-4 border-2 rounded-md border-black">
            <div className="text-lg font-light font-serif text-center text-lime-700">
                {name}
            </div>
            <div className="rounded-md border-2 shadow-md w-1/2 mx-auto">
                <img
                    className="w-auto"
                    src={img}
                    alt="Cat with a headphone"
                ></img>
            </div>
        </div>
    )
}

export default Pet
