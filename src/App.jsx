
import { Suspense } from 'react'
import './App.css'
import Countris from './assets/componance/countries/Countris'


const countrispromis = fetch ('https://openapi.programming-hero.com/api/all').then(res =>res.json());

function App() {

  return (
    <>
          <h1>React world on the go...</h1>
          
          <Suspense fallback ={<p>Parvez vai loding...</p>}>
          <Countris countrispromis={countrispromis}></Countris>
          </Suspense>
    </>
  )
}

export default App
