import React from "react";

export default function usePokemon(){

    function converter(obj){
        return {
            name : obj.name.en,
            img : obj.sprites.regular,
            type :obj.types[0].name,
            hp : obj.stats.hp
        }
    }

    const [pokemons, setPokemons] = React.useState([]);

    React.useEffect(()=> {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch("https://tyradex.tech/api/v1/gen/2", requestOptions)
            .then((response) => response.json())
            .then((result) => setPokemons(result?.map((item)=>converter(item))))
            .catch((error) => console.error(error));
    }, [])
    

    return {data: pokemons};
}