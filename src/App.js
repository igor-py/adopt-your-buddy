import './App.css'
import Header from './components/Header'
import Pet from './components/Pet'
import PetForm from './components/PetForm'
import foto from './images/Nala 1.jpg'
import foto2 from './images/Nala 2.jpg'
import foto3 from './images/Nala 3.jpg'
import foto4 from './images/FotoNalaDeFone.jpg'

function App() {
    const title = 'ADOTE'

    const savePetFormData = (formData) => {
        const finalFormData = {
            ...formData,
            id: Math.random().toString(),
        }
        console.log('Recebi dado do filho ', finalFormData)
    }

    const petLst = [
        {
            id: 0,
            name: 'Nala',
            img: [foto, foto2, foto3, foto4],
            contact: 'Igor',
            age: '9 Meses',
            description: 'Uma gatinha muito amorosa',
        },
        {
            id: 1,
            name: 'Simba',
            img: [foto, foto4],
            contact: 'Igor',
            age: '9 Meses',
            description: 'Um gatinho muito bagunceiro e companheiro',
        },
    ]

    return (
        <div className="">
            <Header title={title} />
            {petLst.map((pet) => (
                <Pet
                    name={pet.name}
                    lstImg={pet.img}
                    description={pet.description}
                    age={pet.age}
                    contact={pet.contact}
                />
            ))}
            <PetForm onFormSave={savePetFormData} />
        </div>
    )
}

export default App
