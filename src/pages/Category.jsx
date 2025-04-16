import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

export const Category = () => {
  const { category, subCategory } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:3000/api/getProduct')
      const filtered = res.data.filter(product => {
        if (subCategory) {
          return product.category.toLowerCase() === category.toLowerCase() &&
                 product.subCategory?.toLowerCase() === subCategory.toLowerCase()
        }
        return product.category.toLowerCase() === category.toLowerCase()
      })
      setProducts(filtered)
    }
    fetchProducts()
  }, [category, subCategory])

  return (
    <div className=" px-6">
      <div className="flex flex-row gap-6">
        <Sidebar></Sidebar>

    <Navbar></Navbar>
    <div className="pt-[100px]">
      <div className="grid grid-cols-5 m-auto">
        {products.map((p) => (
          <Card
            key={p._id}
            id={p._id}
            img={p.available[0].path}
            name={p.name}
            price={p.price}
            rated={p.rating}
            isOnSale={p.isOnSale}
          />
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Category
