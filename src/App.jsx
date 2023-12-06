import { useState } from 'react';
import Nav from './components/Nav';
import Card from './components/Card'
import './App.css'

function App() {
 

  return (
    <div className='relative'>
    <Nav  />
    <h1 className="text-green-600 font-bold my-10">The Big 5 Animals</h1>
      <Card />
    </div>
  )
}

export default App
