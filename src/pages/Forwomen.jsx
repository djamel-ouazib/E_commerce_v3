import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'

export const Formen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const results = await axios.get('http://localhost:3000/api/getProduct')
      // Filtrer uniquement les produits pour hommes
      const menProducts = results.data.filter(product => product.gender === 'men')
      setProducts(menProducts)
    }
    fetchProducts()
  }, [])

  return (
    

    <div style={{display : "flex", flexDirection : "row"}}>

    <SideBar></SideBar>
    <div className="pt-[100px] ">
      <h1 className="text-2xl font-bold text-center mb-6">Produits pour Hommes</h1>
      <div className="grid grid-cols-5 m-auto">
        {products.map((element) => (
          <Card
            id={element._id}
            key={element._id}
            img={element.available[0].path}
            name={element.name}
            price={element.price}
            rated={element.rating}
            isOnSale={element.isOnSale}
          />
        ))}
      </div>
    </div>
    </div>
    
  )
}

export default Formen
