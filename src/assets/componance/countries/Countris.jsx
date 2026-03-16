import React, { use } from 'react';
import './Country.css'
import Countries from '../../../Countries/Countries';
const Countris = ({countrispromis}) => {
  const countriesData = use(countrispromis);
  const countries = countriesData .countries;
  
  return (
    <div >
      <h1>In the counrtis:{countries.length}</h1>
      <div className='country'>
        {
        countries.map(counsry=><Countries
          key={counsry.cca3.cca3}
          counsry={counsry}></Countries>)
      }
      </div>
    </div>
  );
};

export default Countris;