import { useState, useEffect, useRef } from 'react'
import xImg from '../images/x.svg'
import authService from '../auth/authService'
import FileBase64 from 'react-file-base64'

function PetForm({ onFormSave, onFormClose }) {
    const [responsiblePosition, setResponsiblePosition] = useState([])
    const [userInput, setUserInput] = useState({
        petName: '',
        petAge: '',
        petDescription: '',
        petResponsible: '',
        petPhone: '',
        petPhotos: [],
    })

    const [photo, setPhoto] = useState('')
    const fileInput = useRef(null)

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log('Latitude is :', position.coords.latitude)
                    console.log('Longitude is :', position.coords.longitude)
                    setResponsiblePosition([
                        position.coords.latitude,
                        position.coords.longitude,
                    ])
                },
                (error) => {
                    console.log(
                        'Error Code = ' + error.code + ' - ' + error.message
                    )
                    if (error.code === 1) {
                        alert('Por Favor - Habilite o acesso à localização')
                    }
                }
            )
        } else {
            alert('Navegador não suportado')
        }
    }, [])

    // If your state update depends on a previous value always use this kind of function
    const petNameHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, petName: event.target.value }
        })
    }

    const petAgeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, petAge: event.target.value }
        })
    }

    const petDescriptionHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, petDescription: event.target.value }
        })
    }

    const petResponsibleHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, petResponsible: event.target.value }
        })
    }

    const petPhoneHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, petPhone: event.target.value }
        })
    }

    const handlePhoto = (files) => {
        console.log('Imagem aqui ', files)
        const base64Array = files.map((file) => {
            // return {
            //     mimeType: file.type,
            //     name: file.name,
            //     base64: file.base64,
            // }

            return file.base64
        })
        setUserInput((prevState) => {
            return { ...prevState, petPhotos: base64Array }
        })
    }

    // Ainda falta colocar o input para as fotos dos pets.
    const submitHandler = (event) => {
        event.preventDefault()

        // Coleta os valores de input do campo Name
        console.log('Event Principal', event)

        const greaterThanOne =
            parseInt(event.target[1].value) > 1 ? true : false

        const monthOrYear =
            event.target.elements['age-type'].value == 'month'
                ? `${greaterThanOne ? 'Meses' : 'Mês'}`
                : `${greaterThanOne ? 'Anos' : 'Ano'}`

        const isMonth =
            event.target.elements['age-type'].value == 'month' ? true : false

        const catOrDog = event.target.elements['pet-type'].value
            ? event.target.elements['pet-type'].value
            : 'cat'

        const petData = {
            email: event.target[7].value,
            position: responsiblePosition,
            breed: catOrDog,
            pets: {
                name: event.target[0].value,
                age: event.target[1].value,
                description: event.target[6].value,
                phone: event.target[8].value,

                lstOfImg: userInput.petPhotos,
                isMonth: isMonth,
                pettype: catOrDog,
            },
        }

        // onFormSave(petData)

        console.log('petData', petData)
        // Tem que limpar os valores antigos do campos.
        setUserInput({
            petName: '',
            petAge: '',
            petDescription: '',
            petResponsible: '',
            petPhone: '',
            petPhotos: [],
        })

        callBackend(petData)
    }

    const callBackend = async (petData) => {
        try {
            return await authService.register(petData)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.responde.data.message) ||
                error.message ||
                error.toString()
            console.log(message)
        }
    }

    const closeForm = () => {
        onFormClose()
    }

    return (
        <div className="sm:mt-24 mt-12 border-2 border-black mx-auto sm:w-8/12 bg-slate-200 sm:p-4">
            <div className="flex flex-row justify-end">
                <button
                    className="hover:translate-y-1 bg-red-400"
                    onClick={closeForm}
                >
                    <img
                        src={xImg}
                        alt="Logo to close de form"
                        className="w-8 h-8"
                    ></img>
                </button>
            </div>

            <form
                onSubmit={submitHandler}
                className="flex flex-col text-center flex-wrap sm:p-4"
                encType="multipart/form-data"
            >
                <div className="flex flex-col flex-wrap mt-2 p-2 sm:flex-nowrap justify-center">
                    <label
                        htmlFor="name"
                        className="sm:font-semibold sm:text-lg"
                    >
                        Nome
                    </label>
                    <input
                        className="sm:mx-2 mx-auto border rounded-sm border-black"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Digite o nome do Pet"
                        value={userInput.petName}
                        onChange={petNameHandler}
                        required
                    />
                </div>
                <div className="m-2">
                    <div className="p-2 flex flex-col">
                        <label
                            htmlFor="age"
                            className="sm:font-semibold sm:text-lg"
                        >
                            Idade
                        </label>
                        <input
                            className="mx-auto sm:mx-2 border rounded-sm border-black"
                            type="text"
                            name="age"
                            id="age"
                            minLength={1}
                            maxLength={2}
                            value={userInput.petAge}
                            placeholder="Digite a idade"
                            onChange={petAgeHandler}
                            required
                        />
                    </div>
                    <label
                        htmlFor="months"
                        className="sm:font-semibold sm:text-lg"
                    >
                        Meses
                    </label>
                    <input
                        className="mx-2 border-2 rounded-sm border-black"
                        type="radio"
                        name="age-type"
                        id="months"
                        value="month"
                    />
                    <label
                        htmlFor="years"
                        className="sm:font-semibold sm:text-lg"
                    >
                        Anos
                    </label>
                    <input
                        className="mx-2 border rounded-sm border-black"
                        type="radio"
                        name="age-type"
                        id="years"
                        value="year"
                    />
                </div>

                <div className="m-2 bg-slate-100 border border-white rounded-sm">
                    <h2 className="font-medium text-lg text-gray-900">
                        Selecione qual o tipo de pet?
                    </h2>
                    <label
                        htmlFor="cat"
                        className="sm:font-semibold sm:text-lg"
                    >
                        Gato
                    </label>
                    <input
                        className="mx-2 border-2 rounded-sm border-black"
                        type="radio"
                        name="pet-type"
                        id="cat"
                        value="cat"
                    />
                    <label
                        htmlFor="dog"
                        className="sm:font-semibold sm:text-lg"
                    >
                        Cachorro
                    </label>
                    <input
                        className="mx-2 border rounded-sm border-black"
                        type="radio"
                        name="pet-type"
                        id="dog"
                        value="dog"
                    />
                </div>

                <div className="m-2 flex flex-col">
                    <label
                        htmlFor="description"
                        className="sm:font-semibold sm:text-lg"
                    >
                        Descrição
                    </label>
                    <textarea
                        className="sm:mx-2 border rounded-sm border-black sm:w-10/12 w-1/2 mx-auto"
                        name="description"
                        id="description"
                        placeholder="Digite a descrição que quiser"
                        rows={4}
                        cols={20}
                        onChange={petDescriptionHandler}
                        value={userInput.petDescription}
                    />
                </div>
                <div className="m-2 flex flex-col">
                    <label
                        htmlFor="responsible"
                        className="sm:font-semibold sm:text-lg"
                    >
                        Resposável
                    </label>
                    <input
                        className="sm:mx-2 border rounded-sm border-black w-1/2 mx-auto sm:w-full"
                        type="text"
                        name="responsible"
                        id="responsible"
                        placeholder="Digite o email do Resposável"
                        value={userInput.petResponsible}
                        onChange={petResponsibleHandler}
                        required
                    />
                </div>
                <div className="m-2 flex flex-col">
                    <label
                        htmlFor="phone"
                        className="sm:font-semibold sm:text-lg"
                    >
                        Contato
                    </label>
                    <input
                        className="sm:mx-2 border rounded-sm border-black w-1/2 mx-auto sm:w-full"
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Digite o contato do Resposável"
                        value={userInput.petPhone}
                        onChange={petPhoneHandler}
                        required
                    />
                    <small>Format: (21)-9XXXX-XXXX</small>
                </div>

                {/* <div className="m-2 flex flex-col">
                    <label
                        htmlFor="photo"
                        className="sm:font-semibold sm:text-lg w-1/2 sm:w-full sm:mx-0 mx-auto"
                    >
                        Escolha as fotos que deseja fazer Upload
                    </label>
                    <input
                        className="sm:mx-2 border rounded-sm border-black w-1/2 sm:w-full mx-auto"
                        type="file"
                        onChange={handlePhoto}
                        id="photo"
                        name="photo"
                        accept="image/png, image/jpeg"
                    />
                </div> */}

                <div className="m-2 flex flex-col">
                    <label
                        htmlFor="photo"
                        className="sm:font-semibold sm:text-lg w-1/2 sm:w-full sm:mx-0 mx-auto"
                    >
                        Escolha as fotos que deseja fazer Upload
                    </label>
                    <div className="sm:mx-2 border rounded-sm border-black w-1/2 sm:w-full mx-auto p-2">
                        <FileBase64
                            id="photo"
                            multiple={true}
                            onDone={handlePhoto}
                        />
                    </div>
                </div>

                <button className="m-2 p-2 border-2 border-black mx-auto bg-blue-400 hover:translate-x-1">
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default PetForm
