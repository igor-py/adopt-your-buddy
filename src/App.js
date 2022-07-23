import './App.css'
import Header from './components/Header'
import Pet from './components/Pet'
import PetForm from './components/PetForm'
import Button from './components/Button'

import foto from './images/Nala 1.jpg'
import foto2 from './images/Nala 2.jpg'
import foto3 from './images/Nala 3.jpg'
import foto4 from './images/FotoNalaDeFone.jpg'
import { useState } from 'react'
import MapPage from './pages/MapPage'
import HomePage from './pages/HomePage'
import { Route } from 'react-router-dom'

const DUMMY_PETS = [
    {
        id: 0,
        name: 'Nala',
        img: [foto, foto2, foto3, foto4],
        responsible: 'Igor',
        age: '9 Meses',
        description: 'Uma gatinha muito amorosa',
    },
    // {
    //     id: 1,
    //     name: 'Simba',
    //     img: [foto, foto4],
    //     responsible: 'Igor',
    //     age: '9 Meses',
    //     description: 'Um gatinho muito bagunceiro e companheiro',
    // },
]

function App() {
    const title = 'ADOTE'

    const savePetFormData = (formData) => {
        const finalFormData = {
            ...formData,
            id: Math.random().toString(),
            img: [foto, foto4],
        }

        setPetLst((prevLst) => {
            return [finalFormData, ...prevLst]
        })
    }

    const handleFormButton = () => {
        setShowForm(true)
    }

    const handleFormClose = () => {
        setShowForm(false)
    }

    const [petLst, setPetLst] = useState(DUMMY_PETS)
    const [showForm, setShowForm] = useState(false)

    // Using react Router
    // domain --> home login page
    // domain/map
    // domain/adopter

    return (
        <>
            <Header title={title}></Header>
            <Route exact path="/">
                <HomePage></HomePage>
            </Route>
            
            <Route path="/cadastro">
                {petLst.map((pet) => (
                    <Pet
                        key={pet.id}
                        name={pet.name}
                        lstImg={pet.img}
                        description={pet.description}
                        age={pet.age}
                        contact={pet.responsible}
                    />
                ))}
                {showForm ? (
                    <PetForm
                        onFormSave={savePetFormData}
                        onFormClose={handleFormClose}
                    />
                ) : (
                    <Button
                        onButtonClick={handleFormButton}
                        label="Cadastrar novo Pet"
                    />
                )}
            </Route>

            <Route path="/mapa">
                <MapPage></MapPage>
            </Route>
        </>
    )
}

export default App
