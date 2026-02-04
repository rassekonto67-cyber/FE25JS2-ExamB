import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Clothes.css"
import ProductCard from "../components/ProductCard"


function Clothes() {
  const [clothes, setClothes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [sortBy, setSortBy] = useState("none")
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => {
        if (!res.ok) throw new Error("Error fetching products")
        return res.json()
      })
      .then(data => {
        const clothingItems = data.filter(
          item =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        )
        setClothes(clothingItems)
        setLoading(false)
      })
      .catch(() => {
        setError("Could not fetch clothes")
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading clothes...</p>
  if (error) return <p>{error}</p>

  let filteredClothes = [...clothes]
  if (filter === "men") filteredClothes = filteredClothes.filter(item => item.category === "men's clothing")
  if (filter === "women") filteredClothes = filteredClothes.filter(item => item.category === "women's clothing")

  const sortedClothes = filteredClothes.sort((a, b) => {
    if (sortBy === "price") return a.price - b.price
    if (sortBy === "name") return a.title.localeCompare(b.title)
    return 0
  })

  return (
    <main className="clothes-page">
      <h1>Clothes</h1>

<div className="filter-buttons" aria-label="Filter clothes">
    <button
      className={filter === "all" ? "active" : ""}
      onClick={() => setFilter("all")}
    >
      All
    </button>
    <button
      className={filter === "men" ? "active" : ""}
      onClick={() => setFilter("men")}
    >
      Men
    </button>
    <button
      className={filter === "women" ? "active" : ""}
      onClick={() => setFilter("women")}
    >
      Women
    </button>
  </div>

      {/* Filter + Sortering */}
      <form className="controls" aria-label="Filter och sortering">
       
        <fieldset>
          <label htmlFor="sort">Sort after: </label>
          <select id="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="none">None</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </fieldset>
      </form>

      {/* Lista med produkter (props) från ProductCard */}
      <ul className="clothes-grid">
        {sortedClothes.map(item => (
  <ProductCard key={item.id} product={item} />
    ))} 
      </ul>
    </main>
  )
}

export default Clothes
