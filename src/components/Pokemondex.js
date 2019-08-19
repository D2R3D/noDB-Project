import React, {Component} from 'react'

import './Pokemon.css'

import axios from 'axios';


export default class Pokemondex extends Component {
    constructor(){
        super()
        this.state={
            edit: false,
            editNickName: '',
        }
    }

handleToggle=()=>{
    this.setState({
        edit: !this.state.edit
    })
}


handleInput=(val)=>{
    this.setState({
        editNickName: val
    })
}

handleNickName = (id) => {
    let newNickName = {
        editNickName: this.state.editNickName
    }
    axios.put(`/api/pokemon/${id}`, newNickName).then(res =>{
        this.props.updateNickName(res.data)
        this.handleToggle()
    })
}

releaseToWild = (id) => {
    axios.delete(`/api/pokemon/${this.props.pokemon.id}`).then(res => {
        this.props.releaseToWild(res.data)
        if(this.state.edit){
            this.handleToggle() 
        }
    })
    alert(`${this.props.pokemon.name} has been released to the wild`)
}


    render() {
       
        
        return (
                <div>
                {!this.state.edit
                ?
              
                (<div className='poke-box'>
                <h4 className='pokename'>{this.props.pokemon.name}</h4>
                <ul> Type: {this.props.pokemon.type}</ul>
                <ul> Nickname: {this.props.pokemon.nickName} </ul>
                <img src={this.props.pokemon.image} alt =''/>
                <button  onClick= {this.handleToggle}>Change Nickname?</button>
                <button  onClick= {()=>this.releaseToWild(this.props.pokemon.id)}>Release</button>
                </div>
                
                )
                 :
                 (<div className='poke-box'>
                     <input placeholder='Nickname?' onChange ={(e) => 
                    this.handleInput(e.target.value)} value ={this.state.editNickName} />
                    <button onClick ={()=> this.handleNickName(this.props.pokemon.id)}>Submit</button>
                     <button onClick ={()=> this.releaseToWild(this.props.pokemon.id)}>Delete</button>
                    
                </div>)   
                }
            </div>
        )
    }
}


