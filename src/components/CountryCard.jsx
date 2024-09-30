import React from 'react'

export default function CountryCard({img,arabicName,englishName,currency}) {


  return (
    <div className="country-card">
    <img className="country-flag" src={img} alt="flag" />
    <h2 className='arabic-name'>{arabicName}</h2>
    <h2 className='english-name'>{englishName}</h2>
    <h2 className='currency'>{currency}</h2>
    
</div>

  )
}
