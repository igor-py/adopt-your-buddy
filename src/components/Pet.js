import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import petDatabase from '../data/database'
import PetInfo from './PetInfo'
import loadingIcon from '../images/icons/loading-svgrepo-com.svg'
import authService from '../auth/authService'

function Pet({ name, lstImg, description, contact, age }) {
    const [petLst, setPetLst] = useState()
    const [owner, setOwner] = useState('')
    const [showPets, setShowPets] = useState(false)
    const [loadingCss, setLoadingCss] = useState(
        'mx-auto mt-2 animate-spin h-16 w-16'
    )
    let lstOfPets
    let ownerName
    // Get acces to the URLs params
    const params = useParams()


    useEffect(() => {
        if(petLst) {
            petLst.forEach((pet, index) => {
                pet.Id = index
            })
            setShowPets(true)
        } else {
            filterListOfPets(petLst)
        }
        
    }, [petLst])

    const filterListOfPets = (lstOfPets) => {
        authService
            .getPet(params.ownerId)
            .then((owner) => {
                console.log('Veio PET ', owner)
                ownerName = owner.email
                setPetLst(owner.pets)
            })
            .catch((error) => console.log('Deu o seguinte erro ', error))

        // const ownerObj = lstOfPets.filter(
        //     (data) => data.id == params.ownerId
        // )[0]
        // console.log('Chamou a seguinte lista ', ownerObj.pets)
        // setPetLst(ownerObj.pets)
        // setOwner(ownerObj.responsible)
    }

    return (
        <>
            {showPets && petLst ? (
                <>
                    {petLst.map((pet) => (
                        <PetInfo
                            key={pet.Id}
                            name={pet.name}
                            lstImg={pet.lstOfImg}
                            description={pet.description}
                            age={pet.age}
                            isMonth={pet.isMonth}
                            contact={pet.phone}
                        />
                    ))}
                </>
            ) : (
                <>
                    <p>Carregando</p>
                    <img className={loadingCss} src={loadingIcon} alt="Loading"></img>
                </>
            )}
        </>
    )
}

export default Pet
