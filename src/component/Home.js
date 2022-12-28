import React from 'react'
import About from './About'
import Footer from './Footer'
import Products from './Products'
import Testimonial from './Testimonial'


const Home = () => {
  return (
    <div className='hero'>
    <div className="card text-bg-dark text-white border-0">
  <img src="assets/student.jpg" className="card-img" alt="background" height="650px"/>
  <div className="card-img-overlay ">
  <div className="container">
  
    
  </div>
    
  </div>
</div>

<Products/>
<About/>
<Testimonial/>
<Footer/>
    </div>
  )
}

export default Home