// Falta colocar as fotos

const petDatabase = [
    {
        id: 0,
        responsible: 'Igor Marins',
        local: [-22.878830274842844, -43.10066139582702],
        breed: 'both',
        pets: [
            {
                petId: 0,
                type: 'cat',
                description: 'Uma gatinha muito amorosa',
                name: 'Nala',
                age: 9,
                isMonth: true,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
            {
                petId: 1,
                type: 'dog',
                description: 'Um cachorrinho muito brincalhão',
                name: 'Tobias',
                age: 2,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
        ],
    },
    {
        id: 1,
        responsible: 'Monique de França',
        local: [-22.87128463782488, -43.09415814157135],
        breed: 'cat',
        pets: [
            {
                petId: 0,
                type: 'cat',
                description: 'Um gato muito esperto',
                name: 'Simba',
                age: 7,
                isMonth: true,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
        ],
    },
    {
        id: 2,
        responsible: 'Cristiana Bentes',
        local: [-22.85991936781583, -43.09661253766825],
        breed: 'dog',
        pets: [
            {
                petId: 0,
                type: 'dog',
                description: 'uma amiguinha para todos os momentos',
                name: 'Belinha',
                age: 3,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
        ],
    },
    {
        id: 3,
        responsible: 'Ivo Filgueiras Marins',
        breed: 'dog',
        local: [-22.880708371774226, -43.10498511672377],
        pets: [
            {
                petId: 0,
                type: 'dog',
                description: 'uma amiguinha para todos os momentos',
                name: 'Belinha',
                age: 3,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
        ],
    },
    {
        id: 4,
        responsible: 'Elizabeth da Cruz',
        local: [-22.880487215276094, -43.10938236869527],
        breed: 'cat',
        pets: [
            {
                petId: 0,
                type: 'cat',
                description: 'uma amiguinha para todos os momentos',
                name: 'Belinha',
                age: 3,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
        ],
    },
    {
        id: 5,
        responsible: 'Matheus Alexandre',
        local: [-22.884757324872968, -43.11369536111228],
        breed: 'dog',
        pets: [
            {
                petId: 0,
                type: 'dog',
                description: 'uma amiguinha para todos os momentos',
                name: 'Belinha',
                age: 3,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
        ],
    },
    {
        id: 6,
        responsible: 'Thiago Pires',
        local: [-22.880199465700226, -43.101144039097036],
        breed: 'dog',
        pets: [
            {
                petId: 0,
                type: 'dog',
                description: 'uma amiguinha para todos os momentos',
                name: 'Belinha',
                age: 3,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
        ],
    },
    {
        id: 7,
        responsible: 'Matheus Peixoto',
        local: [-22.8894416181333, -43.11418206974892],
        breed: 'dog',
        pets: [
            {
                petId: 0,
                type: 'dog',
                description: 'uma amiguinha para todos os momentos',
                name: 'Belinha',
                age: 3,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
        ],
    },
    {
        id: 8,
        responsible: 'Juliana Marins',
        local: [-22.886870066924182, -43.08728876378357],
        breed: 'cat',
        pets: [
            {
                petId: 0,
                type: 'cat',
                description: 'uma amiguinha para todos os momentos',
                name: 'Belinha',
                age: 3,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
        ],
    },
    {
        id: 9,
        responsible: 'Jorge Valério',
        local: [-22.881199774711646, -43.092376845900645],
        breed: 'cat',
        pets: [
            {
                petId: 0,
                type: 'cat',
                description: 'uma amiguinha para todos os momentos',
                name: 'Belinha',
                age: 3,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
        ],
    },
    {
        id: 10,
        responsible: 'Ramon Letieri',
        local: [-22.881239613650767, -43.08883104348189],
        breed: 'both',
        pets: [
            {
                petId: 0,
                type: 'dog',
                description: 'uma amiguinha para todos os momentos',
                name: 'Belinha',
                age: 3,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
            {
                petId: 1,
                type: 'cat',
                description: 'uma amiguinha para todos os momentos',
                name: 'Belinha',
                age: 3,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            }
        ],
    },
    {
        id: 11,
        responsible: 'Jota Félix',
        local: [-22.880349874448775, -43.08717345310711],
        breed: 'cat',
        pets: [
            {
                petId: 0,
                type: 'cat',
                description: 'uma amiguinha para todos os momentos',
                name: 'Belinha',
                age: 3,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
        ],
    },
    {
        id: 12,
        responsible: 'Leonardo Barroso',
        local: [-22.876405736364372, -43.08815359348538],
        breed: 'cat',
        pets: [
            {
                petId: 0,
                type: 'cat',
                description: 'uma amiguinha para todos os momentos',
                name: 'Belinha',
                age: 3,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
        ],
    },
    {
        id: 13,
        responsible: 'Jacqueline Peixoto',
        local: [-22.875555806098262, -43.09214622421421],
        breed: 'both',
        pets: [
            {
                petId: 0,
                type: 'dog',
                description: 'uma amiguinha para todos os momentos',
                name: 'Belinha',
                age: 3,
                isMonth: false,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            },
            {
                petId: 1,
                type: 'cat',
                description: 'uma amiguinha para todos os momentos',
                name: 'Bela',
                age: 2,
                isMonth: true,
                lstOfImg: ['Nala 1.jpg', 'Nala 2.jpg', 'Nala 3.jpg', 'FotoNalaDeFone.jpg']
            }
        ],
    }
]

export default petDatabase
