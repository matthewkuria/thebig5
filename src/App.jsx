import { useState } from 'react';
import Nav from './components/Nav';
import Card from './components/Card'
import './App.css'
import animalsData from './animalsData';

function App() {
  //populate the card using data
  const animalElement = animalsData.map(animal =>{
    return(
      <Card 
      key={animal.id}
      name={animal.name}
      img={animal.img}
      more={animal.more}
      />
    )
  })

  return (
    <div className='relative'>
    <Nav  />
    <h1 className="text-green-600 font-bold my-10">The Big 5 Animals</h1>
      {/* Display animal in a card */}
      {animalElement}
    </div>
  )
}

export default App
