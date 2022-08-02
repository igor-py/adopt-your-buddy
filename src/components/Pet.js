import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import petDatabase from '../data/database'
import PetInfo from './PetInfo'

function Pet({ name, lstImg, description, contact, age }) {
    const [petLst, setPetLst] = useState(petDatabase)
    const [owner, setOwner] = useState('')
    // Get acces to the URLs params
    const params = useParams()

    useEffect(() => {
        filterListOfPets(petLst)
    }, [])

    const filterListOfPets = (lstOfPets) => {
        const ownerObj = lstOfPets.filter(
            (data) => data.id == params.ownerId
        )[0]
        console.log('Chamou a seguinte lista ', ownerObj.pets)
        setPetLst(ownerObj.pets)
        setOwner(ownerObj.responsible)
    }

    return (
        <>
            {petLst.map((pet) => (
                <PetInfo
                    key={pet.petId}
                    name={pet.name}
                    lstImg={pet.lstOfImg}
                    description={pet.description}
                    age={pet.age}
                    isMonth={pet.isMonth}
                    contact={owner}
                />
            ))}
        </>
    )
}

export default Pet
