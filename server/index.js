const express = require('express')
const cors = require('cors')
const ctrl = require('./controller')


const app = express();

app.use(express.json());
app.use(cors());

// Get request

app.get('/api/pokemon', ctrl.getPokemon)
app.post('/api/pokemon', ctrl.addPokemon)
app.put('/api/pokemon/:id', ctrl.updateNickName)
app.delete('/api/pokemon/:id', ctrl.releaseToWild)



app.listen(8080, () => {
    console.log('server is rocking 📱')
})