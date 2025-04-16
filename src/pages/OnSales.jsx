import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import SideBar from '../components/SideBar' // Assure-toi d'importer SideBar

export const OnSales = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const results = await axios.get('http://localhost:3000/api/getProduct')
      setProducts(results.data)
    }
    fetchProducts()
  }, [])

  return (
    <div className=" px-6">
      <div className="flex flex-row gap-6">
        <SideBar className="m-0"></SideBar>
        <div className="flex-1">
          <div className="grid grid-cols-5 gap-6">
            {products.map((element) => (
              <Card
                key={element._id}
                id={element._id}
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
    </div>
  )
}

export default OnSales