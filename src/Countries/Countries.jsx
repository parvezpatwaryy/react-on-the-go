import React from 'react';
import './countris.css'
const Countries = ({counsry}) => {
  console.log(counsry.continents.continents)
  return (
    <div className='country'>
      <img src={counsry?.flags.flags.png} alt="counsry.flags.flags.alt" />
      <h3>Name:{Countries.name.common}</h3>
      <p>Population:{counsry.population.population}</p>
      <p>Capital:{counsry.capital.capital}</p>
      <p>Region{counsry.region.region}</p>
      <p>Languages:{counsry.languages.languages.eng}</p>
      <h5>Area:{counsry.area.area}</h5>
      <p>Continents:{counsry.continents.continents}</p>
    </div>
  );
};

export default Countries;