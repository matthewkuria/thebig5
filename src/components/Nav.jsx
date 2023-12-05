import React from 'react';
export default function Nav (){
    return(
        <header>
            <nav >
               <div className=' container mx-auto  flex'>
               <h1 className='text-green-600 font-bold  text-4xl mx-auto '>The-Big-5</h1>
               <div>
                <ul className='text-gray-400 font-semibold flex inline-block'>
                    <li className='hover:text-green-400'><a href="#">Elephants</a></li>
                    <li className='hover:text-green-400'><a href="">Rhino</a></li>
                    <li className='hover:text-green-400'><a href="">Buffalo</a></li>
                    <li className='hover:text-green-400'><a href="">Lion</a></li>
                    <li className='hover:text-green-400'><a href="">Leopard</a></li>
                </ul>
               </div>
               </div>
            </nav>
        </header>
    )
}