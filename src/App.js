import './App.css'
import Header from './components/Header'
import Pet from './components/Pet'
import PetForm from './components/PetForm'

function App() {
    const title = 'ADOTE'

    return (
        <div className="">
            <Header title={title} />
            <Pet name="Nala" />
            <PetForm/>
        </div>
    )
}

export default App
