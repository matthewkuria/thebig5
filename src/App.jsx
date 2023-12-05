import { useState } from 'react';
import Nav from './components/Nav';
import Card from './components/Card'
import './App.css'

function App() {
 

  return (
    <>
    <Nav />
    <h1 className="text-green-600 font-bold ">The Big 5 Animals</h1>
      <Card />
    </>
  )
}

export default App
