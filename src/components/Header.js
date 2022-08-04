import catImg from '../images/cat-alt-1.svg'
import { NavLink } from 'react-router-dom'

function Header({ title }) {
    return (
        <div className="bg-header-color">
            <div className="flex flex-row flew-wrap justify-between p-2 content-center">
                <div className="border-2 rounded-full border-[#343633] sm:ml-4">
                    <button className="hover:translate-x-1 p-4">
                        <img
                            src={catImg}
                            alt="Logo for login"
                            className="w-12 h-12"
                        ></img>
                    </button>
                </div>

                {/* <div className="sm:w-1/7 hidden sm:block sm:ml-8 my-2 border-2 border-indigo-600 rounded-md shadow-lg shadow-indigo-500/50">
                    <h1 className="sm:text-4xl text-2xl text-black text-center p-2 sm:m-2">
                        {title}
                    </h1>
                </div> */}


                <div className="my-auto sm:mr-4">
                    <NavLink
                        to="/home"
                        activeClassName="text-green-700 underline underline-offset-4"
                        className="hover:text-teal-900 my-auto"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/mapa"
                        activeClassName="text-green-700 underline underline-offset-4"
                        className="hover:text-teal-900 my-auto mx-2"
                    >
                        Map
                    </NavLink>
                    <NavLink
                        to="/cadastro"
                        activeClassName="text-green-700 underline underline-offset-4"
                        className="hover:text-teal-900 my-auto mx-2"
                    >
                        Cadastro
                    </NavLink>
                    <NavLink
                        to="/pets"
                        activeClassName="text-green-700 underline underline-offset-4"
                        className="hover:text-teal-900 my-auto mx-2"
                    >
                        Pets
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
