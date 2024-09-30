import React from 'react'
import PokemonCard from './PokemonCard'
import usePokemon from '../hooks/usePokemon'

export default function CardContainer() {

    const {data} = usePokemon();



  return (

    <div id='poke-card-container'>
        {data.map((pokemon) =><PokemonCard {...pokemon}/>) }
        
    </div>
  )
}
