


let pokemon = [
    {id: 1,
    name: "Pikachu",
    type: "Electri",
    nickName:"Shockers",
    image: 'https://img.pokemondb.net/artwork/large/pikachu-lets-go.jpg'
    },
    {
    id: 2,
    name: "Charizard",
    type: "Fire",
    nickName: "Hot Stuff",
    image: 'https://vignette.wikia.nocookie.net/vsbattles/images/3/35/Charizard_SSBu.png/revision/latest?cb=20180721110519'
    },
    {
        id: 3,
        name: 'Blastoise',
        type: 'Water',
        nickName: 'Super Soaker',
        image: 'https://vignette.wikia.nocookie.net/vsbattles/images/8/81/009Blastoise_RB.png/revision/latest?cb=20180516200529'
    }
];


// Get request
module.exports={

getPokemon: (req, res) => {
    res.status(200).send(pokemon)
},

// Add new Pokemon 

addPokemon: (req, res) => {
const {name, type, nickName,image,} = req.body;
let id;
    if(pokemon.length === 0){
    id = 1;
} else {
    id = pokemon[pokemon.length -1].id +1
}

const newPokemon = {
    id,
    name,
    type,
    nickName,
    image,
}
    pokemon.push(newPokemon)
    res.status(200).send(pokemon)
},

updateNickName: (req, res)=>{
    
        const {id} =req.params

        const newNickName = req.body
    console.log(req.body)
        let myPokemon = pokemon.find(pokemon => {
            return pokemon.id === +id
        })

        myPokemon.nickName = newNickName.editNickName

        res.status(200).send(pokemon)
    },


releaseToWild: (req, res) => {
    const {id} = req.params
    pokemon = pokemon.filter((pokemon) => pokemon.id !== +id) 

    
    res.status(200).send(pokemon)
}
}



