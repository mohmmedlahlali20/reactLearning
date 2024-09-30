import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({buttons}) {

  return (
    <header id='header'>
        
       
        <Link to={'/pokemones'}>       
            <button >PokemonCard</button>
        </Link>  
        <Link to={'/contries'}>       
            <button >PokemonCard</button>
        </Link>       

    </header>
  )

}
