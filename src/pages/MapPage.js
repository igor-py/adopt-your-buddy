/*
Lembrar que terá um input de raio também
*/
import { useState, useEffect } from 'react'
import { useHistory, Prompt } from 'react-router-dom'
import * as L from 'leaflet'

import Button from '../components/Button'

import petDatabase from '../data/database'
import petCatIconSvg from '../images/icons/cat-svgrepo-com.svg'
import petDogIconSvg from '../images/icons/dog-svgrepo-com.svg'
import petCatDogIconSvg from '../images/icons/cat-dog.svg'
import loadingIcon from '../images/icons/loading-svgrepo-com.svg'

function MapPage({}) {
    const [petDatabaseCopy, setPetDatabaseCopy] = useState(petDatabase)
    const [loadingCss, setLoadingCss] = useState(
        'mx-auto mt-2 animate-spin h-16 w-16'
    )
    const [clickedMarker, setClickedMarker] = useState(false)
    const [msgToShow, setMsgToShow] = useState('')
    const history = useHistory()

    // Utilizar esse array aqui para centralizar o mapa, incialmente
    const center = [-22.86, -43.09]
    var map
    var catIcon
    var dogIcon
    var catAndDogIcon
    const loadingCssArray = loadingCss.split(' ')

    // Use of componentDidMount for functions
    useEffect(() => {
        handleMap()
    }, [])

    const handleMap = () => {
        catIcon = L.icon({
            iconUrl: petCatIconSvg,
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
        })

        dogIcon = L.icon({
            iconUrl: petDogIconSvg,
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
        })

        catAndDogIcon = L.icon({
            iconUrl: petCatDogIconSvg,
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
        })

        map = L.map('map')
        const layer = L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                maxZoom: 19,
                attribution: '© OpenStreetMap',
            }
        )
        map.addLayer(layer)

        map.setView(center, 16)
        map.locate({ setView: true, maxZoom: 16 }).on(
            'locationfound',
            setDataForMap
        )

        setTimeout(() => {
            loadingCssArray.push('hidden')
            setLoadingCss(loadingCssArray.join(' '))
        }, 2500)
    }

    function setDataForMap() {
        petDatabaseCopy.forEach((data) => {
            const iconToShow =
                data.breed == 'both'
                    ? catAndDogIcon
                    : data.breed == 'cat'
                    ? catIcon
                    : dogIcon
            const marker = L.marker(data.local, {
                icon: iconToShow,
                title: data.id,
            })
                .addTo(map)
                .on('click', (e) => {
                    const idToOpen = e.target.options.title
                    console.log('Send to Page ', idToOpen)
                    setClickedMarker(true)
                    setMsgToShow(
                        `----------------------------------
                        Responsável: ${data.responsible}
                        Número de pets: ${data.pets.length}
                        -----------------------------------
                        Deseja abrir a página de Pets para esse local?`
                    )

                    // Maneira de mandar para a pagina ja passando o ID a ser utilizado
                    history.push('/pets/'+idToOpen)
                })
            const msg = `Responsável: ${data.responsible} - ${data.id}`
            marker.bindPopup(msg)
        })
    }

    return (
        <>
            <Prompt
                when={clickedMarker}
                message={(location, action) => {
                    console.log('Action --> ', action)
                    console.log('location --> ', location)
                    return msgToShow
                }}
            />

            <img className={loadingCss} src={loadingIcon} alt="Cat Logo"></img>

            <div id="map" className="border-2 bg-slate-50"></div>
            <div
                className="mx-auto p-2 border-2 flex flex-col justify-center content-between 
                            gap-1.5 w-1/4 my-8"
            >
                <div className="mx-auto font-bold underline">Legenda</div>
                <div className="flex flex-row content-center">
                    <img
                        className="w-12 h-12"
                        src={petCatIconSvg}
                        alt="Cat Logo"
                    ></img>
                    <div className="my-auto mx-2 font-medium text-blue-600">
                        Locais que contém apenas Gatos
                    </div>
                </div>
                <div className="flex flex-row content-center">
                    <img
                        className="w-12 h-12"
                        src={petDogIconSvg}
                        alt="Cat Logo"
                    ></img>
                    <div className="my-auto mx-2 font-medium text-green-600">
                        Locais que contém apenas Cachorros
                    </div>
                </div>
                <div className="flex flex-row content-center">
                    <img
                        className="w-12 h-12"
                        src={petCatDogIconSvg}
                        alt="Cat Logo"
                    ></img>
                    <div className="my-auto mx-2 font-medium text-yellow-600">
                        Locais que contém os dois
                    </div>
                </div>
            </div>
        </>
    )
}

export default MapPage
