import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';


export const Links = () => {

   const forgender = ["For men", "For women"];
    const [show, setShow] = useState(false);
    let timeoutId = null; // Pour gérer le délai de fermeture

    const handleMouseEnter = () => {
        clearTimeout(timeoutId); // Empêche la fermeture immédiate
        setShow(true);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setShow(false);
        }, 200); // Délai de 200ms avant fermeture
    };

  return (
    <div className="grid grid-cols-[1fr_1fr_2fr_1fr]  font-poppins-light text-md">
      <div className="relative">
                <Link to="/shop" className="mt-30px relative top-3" >
                    <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        Shop
                    </p>
                </Link>

                {/* Menu déroulant */}
                {show && (
                    <div
                        className="absolute right-3 bg-white border rounded shadow-md mt-4 p-2 "
                        onMouseEnter={handleMouseEnter} // Empêche la fermeture immédiate
                        onMouseLeave={handleMouseLeave} // Ferme après un délai
                    >
                        <ul className='w-20 h-10' >
                         
                                <li className='cursor-pointer hover:bg-black hover:text-white  w-24 relative right-2 bottom-0.5 pl-2 text-sm' > <Link to="/formen" className="m-auto">  {forgender[0]}  </Link></li>
                          
                          
                                <li className='cursor-pointer hover:bg-black hover:text-white  w-24 relative right-2 mt-0.5 pl-2 text-sm'><Link to="/forwomen" className="m-auto"> {forgender[1]} </Link></li>
                          
                        </ul>
                    </div>
                )}
            </div>

      <Link to="/onSales" className=" m-auto ">
        on Sale
      </Link>
      <Link to="/" className="m-auto ">
        New Arrivals
      </Link>
      <Link to="/" className=" m-auto ">
        Brands
      </Link>
    </div>
  )
}

export default Links
