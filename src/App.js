import './App.css'
import Header from './components/Header'
import Pet from './components/Pet'
import foto from './images/Nala 1.jpg'
import foto2 from './images/Nala 2.jpg'
import foto3 from './images/Nala 3.jpg'
import foto4 from './images/FotoNalaDeFone.jpg'

function App() {
    const title = 'ADOTE'

    return (
        <div className="">
            <Header title={title} />
            <Pet img={foto} name="Nala" />
            <Pet img={foto2} name="Nala" />
            <Pet img={foto3} name="Nala" />
            <Pet img={foto4} name="Nala" />
        </div>
    )
}

export default App
