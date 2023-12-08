import React from "react";

export default function Card (props){
    return(
        <div  className="  columns-1  md:columns-2 box-content p-4 border-2">
            <h1 className="text-green-600 font-semibold">{props.name}</h1>
            <img className="aspect-[4/3] rounded  object-cover  h-80 w-110  flex-1" src={props.img} alt="elephant " />
            <p className="w-full">{props.more}
             <button className=" block bg-green-600 text-white font-bold mx-auto my-9 py-3 px-2 border-2 hover:bg-white hover:text-green-600 hover:border-green-600" >
                <a href="/gallery">
                    View Gallery
                 </a>
            </button>
            </p>
        </div>
    )
}