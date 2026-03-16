import React, { use, useState } from 'react';
import './Country.css'
import Countries from '../../../Countries/Countries';
const Countris = ({countrispromis}) => {
  const [visitedCountris, setVisitedCountris] = useState([])

  const handleVisitedCountries=(counsry)=>{
    console.log('handle visited country',counsry)
  }
  const countriesData = use(countrispromis);
  const countries = countriesData .countries;
  
  return (
    <div >
      <h1>In the counrtis:{countries.length}</h1>
      <h3>Total country visited:</h3>
      <div className='country'>
        {
        countries.map(counsry=><Countries
          key={counsry.cca3.cca3}
          handleVisitedCountries ={handleVisitedCountries}
          counsry={counsry}></Countries>)
      }
      </div>
    </div>
  );
};

export default Countris;