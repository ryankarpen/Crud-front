import { useState, useEffect } from "react"
import productFetch from '../axios/productFetch'
import {useNavigate, Link } from 'react-router-dom'
import useToast from '../hooks/useToast'

import "./Products.css"



const Products = () => {

  const navigate = useNavigate()

  const [products, setProducts] = useState([])

  useEffect(() => {

    const loadProducts = async () => {
      const res = await productFetch.get("/products")

      setProducts(res.data)
    }

    loadProducts()

  }, [])


  const handleDelete = async (id) => {

    const res = await productFetch.delete(`/products/${id}`)
      
    if(res.status === 200){
      navigate('/')
      useToast(res.data.msg)
    }
  }

  if(!products) return <p>Carregando</p>

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product._id} className="product-details">
            <h2>{product.name}</h2>
            <p>Código: {product.code}</p>
            <p>Valor: R${product.price}</p>
            <p>Descrição: {product.description}</p>
            <Link to={`/products/edit/${product._id}`} className="btn-primary">Editar</Link>
            <button className="btn-secondary" onClick={() => handleDelete(product._id)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products