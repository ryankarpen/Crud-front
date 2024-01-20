import productFetch from "../axios/productFetch"
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import useToast from "../hooks/useToast"

const EditForm = () => {

    const navigate = useNavigate()

    const {id} = useParams()

    const [product, setProduct] = useState("")

    useEffect(() => {

        const loadProduct = async () => {
            
            const res = await productFetch.get(`/products/${id}`)

            setProduct(res.data)
        }

        loadProduct()

    }, [])


    const updateForm = async (e) => {
        e.preventDefault()

        try {

            const res = await productFetch.put(`/products/${id}`, product)
            
            if(res.status === 200){
                navigate('/')
                useToast(res.data.msg)
            }

        } catch (error) {
            useToast(error.response.data.msg, "error")
        }
    }


    if(!product) return <p>Carregando...</p>



  return (
    <div className='form-container'>
      <h2>Editando {product.name}</h2>
      <form onSubmit={(e) => updateForm(e)}>
        <label className='form-item'>
          <span>Nome</span>
          <input 
            type="text"
            placeholder="nome do produto"
            required
            value={product.name}
            onChange={(e) => setProduct({...product, name: e.target.value})}
          />
        </label>
        <label className='form-item'>
          <span>Código</span>
          <input 
            type="number" 
            placeholder="código do produto"
            required
            value={product.code}
            onChange={(e) => setProduct({...product, code: e.target.value})}
          />
        </label>
        <label className='form-item'>
          <span>Preço</span>
          <input 
            type="number" 
            placeholder='R$'
            required
            value={product.price}
            onChange={(e) => setProduct({...product, price: e.target.value})}
          />
        </label>
        <label className='form-item'>
          <span>Descrição</span>
          <textarea 
            placeholder="descrição do produto"
            required
            value={product.description}
            onChange={(e) => setProduct({...product, description: e.target.value})}
          />
        </label>
        <input type="submit" value="Alterar" className="btn-primary" />
      </form>
    </div>
  )
}

export default EditForm