import React from "react";
export default function useCountry(){
   function converter(obj){
    return{
        img:obj.flags[0],
        arabicName:obj.translations.ara.official,
        englishName:obj.name,
        currency:obj.currencies
    }
   }
   

   const[countries,setCountries]=React.useState([]);
   React.useEffect(()=>{
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("https://restcountries.com/v3/all", requestOptions)
        .then((response) => response.json())
        .then((result) => setCountries(result?.map((item)=>converter(item))))
        .catch((error) => console.error(error));
   },[])
   console.log({data:countries});
   return {data:countries}
}