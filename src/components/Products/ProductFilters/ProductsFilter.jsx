import CategorieFilter from "./CategorieFilter"
import PriceFilter from "./PriceFilter"


const ProductsFilter = () => {
  return (
    <div className="products-filter">
        <CategorieFilter/>
        <PriceFilter/>
    </div>
  )
}

export default ProductsFilter