/* eslint-disable array-callback-return */
import './Home.css'
import { headerItems, products } from '../../utils/ProductsData'
import Slider from '../../components/Slider/Slider'
import Banner1 from '../../BannerImages/Banner1.jpg'
import Banner2 from '../../BannerImages/Banner2.jpg'
import Banner3 from '../../BannerImages/Banner3.jpg'
import Banner4 from '../../BannerImages/Banner4.jpg'
import Banner5 from '../../BannerImages/Banner5.jpg'
import Banner6 from '../../BannerImages/Banner6.jpg'
import Product from '../../components/Product/Product'
import BackToTop from '../../components/BackToTop/BackToTop'

const Home = () => {
  const bannerImage = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6]
  return (
    <>
      <div className='item-container'>
        {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
      </div>
      <div className='home'>
        <div className='home-container'>
          {/** Slider */}
          <Slider images={bannerImage} />
          <div className='home-row'>
            {/** products */}
            {products.slice(0, 2).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <div className='home-row'>
            {/** products */}
            {products.slice(2, 5).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <div className='home-row'>
            {/** products */}
            {products.slice(5, 6).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <div style={{ marginTop: '40px' }}>
            {/** Back to top */}
            <BackToTop />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
