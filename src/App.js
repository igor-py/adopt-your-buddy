import './App.css'
import Header from './components/Header'
import Pet from './components/Pet'

function App() {
    const title = 'ADOTE'

    return (
        <div className="">
            <Header title={title} />
            <Pet name="Nala" />
        </div>
    )
}

export default App
