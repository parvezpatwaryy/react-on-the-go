import React, { useState } from 'react';
import './countris.css'
const Countries = ({counsry,handleVisitedCountries}) => {
  const  [visited , setVisited]= useState(false)
  console.log(handleVisitedCountries)
  // console.log(counsry.continents.continents)


  const handleVisited=()=>{
    if (visited){
      setVisited(false)
    }
    else{
      setVisited(true)
    }
  }

    handleVisitedCountries(counsry)
  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={counsry?.flags.flags.png} alt="counsry.flags.flags.alt" />
      <h3>Name:{Countries.name}</h3>
      <p>Population:{counsry.population.population}</p>
      <p>Capital:{counsry.capital.capital}</p>
      <p>Region{counsry.region.region}</p>
      <p>Languages:{counsry.languages.languages.eng}</p>
      <h5>Area:{counsry.area.area}{counsry.area.area >300000 ? "Big city":"small city"}</h5>
      <p>Continents:{counsry.continents.continents}</p>


      <button onClick={handleVisited}>
        {visited ? 'visited':'Not visited'}
      </button>
    </div>
  );
};

export default Countries;