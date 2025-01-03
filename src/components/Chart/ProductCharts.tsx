import ProductsOverview from '../DataAnalyst/ProductsOverview'
import ProductsAmountOverview from '../DataAnalyst/ProductsAmountOverview'

const ProductCharts = () => {
  return (
    <div className="bg-white shadow-lg mb-10 rounded-lg flex flex-col lg:flex-row items-center justify-center gap-6 p-2 lg:p-6">
      <div className="w-full lg:w-xl">
        <ProductsOverview />
      </div>
      <div className="w-full lg:w-96">
        <ProductsAmountOverview />
      </div>
    </div>
  )
}

export default ProductCharts