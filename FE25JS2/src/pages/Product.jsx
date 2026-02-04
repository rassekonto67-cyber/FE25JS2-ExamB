import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import "./Product.css"

function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(() => {
        setError("Could not fetch product")
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Loading product...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="product-page">
      <Link to="/clothes" className="close-btn">×</Link>
      <img className="product-image" src={product.image} alt={product.title} width="200" />
      <div className="product-description">
      <h1>{product.title}</h1>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      </div>
    </div>
  )
}

export default Product
