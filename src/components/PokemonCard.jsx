import React from 'react'

export default function PokemonCard({name, img, hp,type}) {


  return (
    <div className="poke-card">
    <img className="poke-img" src={img} alt="pokemon" />
    <h2 className="poke-name">{name}</h2>
    <span className="poke-hp">HP: {hp}</span>
    <span className="poke-type">Type: {type}</span>
</div>

  )
}
