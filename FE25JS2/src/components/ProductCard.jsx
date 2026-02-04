import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <li>
      <article className="clothes-card">
        <Link to={`/clothes/${product.id}`}>
          <figure>
            <img src={product.image} alt={product.title} />
            <figcaption>
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
            </figcaption>
          </figure>
        </Link>
      </article>
    </li>
  )
}

export default ProductCard
