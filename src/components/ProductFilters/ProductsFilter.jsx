import CategorieFilter from "./CategorieFilter"
import PriceFilter from "./PriceFilter"
import DateFilter from './DateFilter'


const ProductsFilter = () => {
  return (
    <div className="products-filter">
        <CategorieFilter/>
        <DateFilter/>
        <PriceFilter/>
    </div>
  )
}

export default ProductsFilter