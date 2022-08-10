import Input from './InputUtil'
import { useState, useEffect, useRef } from 'react'
import xImg from '../images/x.svg'

function PetForm({ onFormSave, onFormClose }) {
    const [responsiblePosition, setResponsiblePosition] = useState([])
    const [userInput, setUserInput] = useState({
        petName: '',
        petAge: '',
        petDescription: '',
        petResponsible: '',
        petPhone: '',
        petCep: '',
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

    const petCepHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, petCep: event.target.value }
        })
    }

    const handlePhoto = (event) => {
        const files = Object.values(event.target.files)
        files.forEach((file) => {
            console.log('Arquivo aqui ', file)
        })
    }

    // Ainda falta colocar o input para as fotos dos pets.
    const submitHandler = (event) => {
        event.preventDefault()

        // Coleta os valores de input do campo Name
        console.log('Event', event)
        console.log('Teste', photo)

        const greaterThanOne =
            parseInt(event.target[1].value) > 1 ? true : false

        const monthOrYear = event.target[2].checked
            ? `${greaterThanOne ? 'Meses' : 'Mês'}`
            : `${greaterThanOne ? 'Anos' : 'Ano'}`

        const petData = {
            name: event.target[0].value,
            age: `${event.target[1].value} ${monthOrYear}`,
            description: event.target[4].value,
            responsible: event.target[5].value,
            phone: event.target[6].value,
            position: responsiblePosition,
        }

        onFormSave(petData)

        console.log('petData', petData, responsiblePosition)
        // Tem que limpar os valores antigos do campos.
        setUserInput({
            petName: '',
            petAge: '',
            petDescription: '',
            petResponsible: '',
            petPhone: '',
        })
    }

    const closeForm = () => {
        onFormClose()
    }

    return (
        <div className="sm:mt-24 mt-12 border-2 w-4/5 border-black mx-auto sm:w-8/12 bg-slate-200 p-4">
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
                className="flex flex-col text-center flex-wrap"
            >
                <div className="flex flex-col flex-wrap mt-2 p-2 sm:flex-nowrap sm:justify-center">
                    <label htmlFor="name" className="font-semibold text-lg">
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
                        <label htmlFor="age" className="font-semibold text-lg">
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
                    <label htmlFor="months" className="font-semibold text-lg">
                        Meses
                    </label>
                    <input
                        className="mx-2 border-2 rounded-sm border-black"
                        type="radio"
                        name="age-type"
                        id="months"
                        value="month"
                        checked
                    />
                    <label htmlFor="years" className="font-semibold text-lg">
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
                <div className="m-2 flex flex-col">
                    <label
                        htmlFor="description"
                        className="font-semibold text-lg"
                    >
                        Descrição
                    </label>
                    <textarea
                        className="mx-2 border rounded-sm border-black"
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
                        className="font-semibold text-lg"
                    >
                        Resposável
                    </label>
                    <input
                        className="mx-2 border rounded-sm border-black"
                        type="text"
                        name="responsible"
                        id="responsible"
                        placeholder="Digite o nome do Resposável"
                        value={userInput.petResponsible}
                        onChange={petResponsibleHandler}
                        required
                    />
                </div>
                <div className="m-2 flex flex-col">
                    <label htmlFor="phone" className="font-semibold text-lg">
                        Contato
                    </label>
                    <input
                        className="mx-2 border rounded-sm border-black"
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

                <div className="m-2 flex flex-col">
                    <label htmlFor="photo" className="font-semibold text-lg">
                        Escolha as fotos que deseja fazer Upload
                    </label>
                    <input
                        className="mx-2 border rounded-sm border-black"
                        type="file"
                        value={photo}
                        onChange={handlePhoto}
                        id="photo"
                        accept="image/png, image/jpeg, image/svg+xml"
                        multiple
                    />
                </div>

                <button className="m-2 p-2 border-2 border-black mx-auto bg-blue-400 hover:translate-x-1">
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default PetForm
