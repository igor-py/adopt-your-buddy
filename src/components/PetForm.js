import Input from './InputUtil'
import { useState } from 'react'
import xImg from '../images/x.svg'

function PetForm({ onFormSave, onFormClose }) {
    const [userInput, setUserInput] = useState({
        petName: '',
        petAge: '',
        petDescription: '',
        petResponsible: '',
        petPhone: '',
        petCep: '',
    })

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

    // Ainda falta colocar o input para as fotos dos pets.
    const submitHandler = (event) => {
        event.preventDefault()

        // Coleta os valores de input do campo Name
        console.log('Event', event)

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
            cep: event.target[7].value,
        }

        onFormSave(petData)

        console.log('petData', petData)
        // Tem que limpar os valores antigos do campos.
        setUserInput({
            petName: '',
            petAge: '',
            petDescription: '',
            petResponsible: '',
            petPhone: '',
            petCep: '',
        })
    }

    const closeForm = () => {
        onFormClose();
    }

    return (
        <div className="mt-32 m-2 border-2 border-black w-1/2 mx-auto">
            <div className="flex flex-row justify-end">
                <button className="hover:translate-y-1" onClick={closeForm}>
                    <img src={xImg} alt="Logo to close de form" className="w-8 h-8"></img>
                </button>
            </div>

            <form
                onSubmit={submitHandler}
                className="flex flex-col text-center"
            >
                <div className="m-2">
                    <label htmlFor="name">Nome</label>
                    <input
                        className="mx-2 border-2 rounded-sm border-black"
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
                    <label htmlFor="age">Idade</label>
                    <input
                        className="mx-2 border-2 rounded-sm border-black"
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
                    <label htmlFor="months">Meses</label>
                    <input
                        className="mx-2 border-2 rounded-sm border-black"
                        type="radio"
                        name="age-type"
                        id="months"
                        value="month"
                        checked
                    />
                    <label htmlFor="years">Anos</label>
                    <input
                        className="mx-2 border-2 rounded-sm border-black"
                        type="radio"
                        name="age-type"
                        id="years"
                        value="year"
                    />
                </div>
                <div className="m-2 flex flex-col">
                    <label htmlFor="description">Descrição</label>
                    <textarea
                        className="mx-2 border-2 rounded-sm border-black"
                        name="description"
                        id="description"
                        placeholder="Digite a descrição que quiser"
                        rows={4}
                        cols={20}
                        onChange={petDescriptionHandler}
                        value={userInput.petDescription}
                    />
                </div>
                <div className="m-2">
                    <label htmlFor="responsible">Resposável</label>
                    <input
                        className="mx-2 border-2 rounded-sm border-black"
                        type="text"
                        name="responsible"
                        id="responsible"
                        placeholder="Digite o nome do Resposável"
                        value={userInput.petResponsible}
                        onChange={petResponsibleHandler}
                        required
                    />
                </div>
                <div className="m-2">
                    <label htmlFor="phone">Contato</label>
                    <input
                        className="mx-2 border-2 rounded-sm border-black"
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
                <div className="m-2">
                    <label htmlFor="name">CEP</label>
                    <input
                        className="mx-2 border-2 rounded-sm border-black"
                        type="text"
                        name="cep"
                        id="cep"
                        placeholder="Digite o CEP do local que se encontra o Pet"
                        value={userInput.petCep}
                        onChange={petCepHandler}
                        required
                    />
                </div>

                <button className="m-2 p-2 border-2 border-black mx-auto">
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default PetForm
