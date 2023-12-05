import React from "react";

export default function Card (){
    return(
        <div className=" gap-8 columns-1 md:columns-2 box-content p-4 border-2">
            <img className="aspect-[4/3] rounded  w-full" src="../elephant.jpeg" alt="elephant " />
            <p className="w-full">This is an elephant it is among the big Five animals in Kenya.
            An African Savanna elephant can grow to 30 ft. (9 meters) from trunk to tail, 
            weigh more than 13,000 lbs. (6 tons/5,442 kilograms) and stand as tall as 12 ft. (4 meters)
             at the shoulder. 
             The African Savanna elephant is classified as an Endangered Species.
            </p>
        </div>
    )
}