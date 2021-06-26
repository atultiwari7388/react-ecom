import './Home.css'
import { headerItems, products } from '../../utils/ProductsData'

const Home = () => {
  return (
    <>
      <div className='item-container'>
        {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
      </div>
    </>
  )
}

export default Home
