import catImg from '../images/cat-alt-1.svg'

function Header({ title }) {
    return (
        <div className="bg-header-color ">
            <div className="mx-auto flex flex-row flew-wrap justify-between p-2">
                <a className="hover:text-teal-900 my-auto">Home</a>
                <div className="w-1/4 m-2 border-2 border-indigo-600 rounded-md shadow-lg shadow-indigo-500/50">
                    <h1 className="text-4xl text-black text-center p-1 m-2">
                        {title}
                    </h1>
                </div>
                <div className="border-2 rounded-full border-[#343633]">
                    <button className="hover:translate-x-1 p-4">
                        <img
                            src={catImg}
                            alt="Logo for login"
                            className="w-12 h-12"
                        ></img>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
