import "./CreateForm.css"
import { useState } from "react"
import productFetch from '../axios/productFetch'
import { useNavigate } from 'react-router-dom'

import useToast from '../hooks/useToast'

const CreateForm = () => {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [code, setCode] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  
  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      
      const product = {
        name, 
        code, 
        price, 
        description
      }
  
      const res = await productFetch.post("/products", product)
  
      if(res.status === 201){
        navigate("/")

        useToast(res.data.msg)
        
      }

    } catch (error) {
     useToast(error.response.data.msg, "error")
    }
  }

  return (
    <div className='form-container'>
      <h2>Informe os dados do produto:</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className='form-item'>
          <span>Nome</span>
          <input 
            type="text"
            placeholder="nome do produto"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className='form-item'>
          <span>Código</span>
          <input 
            type="number" 
            placeholder="código do produto"
            required
            onChange={(e) => setCode(e.target.value)}
          />
        </label>
        <label className='form-item'>
          <span>Preço</span>
          <input 
            type="number" 
            placeholder='R$'
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label className='form-item'>
          <span>Descrição</span>
          <textarea 
            placeholder="descrição do produto"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <input type="submit" value="Cadastrar" className="btn-primary" />
      </form>
    </div>
  )
}

export default CreateForm