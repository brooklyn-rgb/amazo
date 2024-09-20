import EcommerceFeatures from '@/components/shared/product/ecommerce-features'
import ProductCard from '@/components/shared/product/product-card'
import ProductCarousel from '@/components/shared/product/product-carousel'
import ProductList from '@/components/shared/product/product-list'
import ProductPromotion from '@/components/shared/product/product-promotion'
import {
  getAllProducts,
  getFeaturedProducts,
  getLatestProducts,
} from '@/lib/actions/product.actions'
import { cookies } from 'next/headers'

export default async function Home() {
  const latestProducts = await getLatestProducts()
  const featuredProducts = await getFeaturedProducts()
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')
 
  return (
    <div>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <div className="space-y-8">
        <ProductList title="Newest Arrivals" data={latestProducts} />
        <ProductList title="Camera Gear Collection" data={latestProducts} />
        <ProductPromotion />
        <ProductList title="Amazing Views" data={latestProducts} />
        <EcommerceFeatures />           
      </div>
    </div>
  )
}