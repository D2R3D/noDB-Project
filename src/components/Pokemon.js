import React, {Component} from 'react';

import Pokemondex from './Pokemondex';
import axios from 'axios';
import './Pokemon.css'


export default class Pokemon extends Component {
  constructor() {
    super();
    this.state ={
      pokemon: [],
      name: '',
      type: '',
      image: '',
      nickName: ''
   
    }
  }

    componentDidMount() {
      this.getPokemon();
    }

    handleImage=(val)=>{
      this.setState({
          image: val
      })
  }

  handleName(val){
      this.setState({
          name: val
      })
  }
  handleType(data) {
    this.setState({
      type:data
    })
  }

  handleNickName(val) {
    this.setState({
      nickName:val
    })
  }

    getPokemon = () => {
      axios.get(`/api/pokemon`).then(response => {
        this.setState({pokemon: response.data})
      })
      .catch(err =>{
        console.log(err)
    })
    }

    addPokemon =() => {
    

      const {name, type, image, nickName} = this.state;
  

      const body = {
        name,
        type,
        image,
        nickName
       
      };

      axios.post(`/api/pokemon`, body).then(response => {this.setState({
        pokemon: response.data,
        name: '',
        type: '',
        image: '',
        nickName: ''

      })
    })
    .catch(err => {
      console.log(err)
    })
    alert('Pokemon has been caught')
  }
  
  updateNickName = (data) => {
    this.setState({pokemon: data})
  }

  releaseToWild = (data) => {
    this.setState({pokemon: data})
  }

    
  render() {

    const mappedPokemon = this.state.pokemon.map((pokemon, i) => {
      return < Pokemondex key= {i} pokemon ={pokemon} updateNickName ={this.updateNickName} releaseToWild ={this.releaseToWild}  />
    })

    return(
      

      
      <div className="poke-header">
     
        <h1>Catch a Pokemon</h1>
        <div className='pokedex'>
          <input placeholder = "Add a Pokemon" onChange ={(e) => this.handleName(e.target.value)}></input>
        <input placeholder ="Add image URL" onChange ={(e) => this.handleImage(e.target.value)}></input>
        <input placeholder ='Type' onChange ={(e) => this.handleType(e.target.value)}value ={this.state.type}></input>
        <input placeholder ="Give Nickname?" onChange ={(e) => 
        this.handleNickName(e.target.value)} value ={this.state.nickName}></input>


          <button className= "add-pokemon" onClick={this.addPokemon}>Add Pokemon</button>

        </div>
        <div className ="pokemon">
         {mappedPokemon}
         </div>

</div>

    )

  }

  }

