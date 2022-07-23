/*
Lembrar que terá um input de raio também
*/
import { useState } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'

function MapPage({}) {
    const handleProcessCEP = (cep) => {
        console.log('CLicou botão cep ', cep)
    }

    const cepHandler = (event) => {
        console.log('onChange ', event.target.value)
        setCep((prevState) => {
            console.log(prevState)
            return event.target.value
        })
    }

    const [cep, setCep] = useState('')

    return (
        <>
            <div className="m-2 flex flex-col md:flex-row md:justify-center">
                <label htmlFor="name">CEP</label>
                <input
                    className="mx-2 border-2 rounded-sm border-blue"
                    type="text"
                    name="cep"
                    id="cep"
                    placeholder="Digite o CEP"
                    value={cep}
                    onChange={cepHandler}
                    required
                />
            </div>
            <Button onButtonClick={handleProcessCEP} label="Enviar CEP" />
        </>
    )
}

export default MapPage
