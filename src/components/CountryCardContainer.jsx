import React from "react"

import CountryCard from "./CountryCard"
import useCountry from "../hooks/useCountry"
export default function CountryCardContainer(){

    const {data}= useCountry()
    return(
        <div id="countries-container">

    {data.map((country)=><CountryCard img={country.img} arabicName={country.arabicName}/>)}

        </div>
    )
}