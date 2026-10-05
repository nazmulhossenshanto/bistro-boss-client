import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import Featured from "./Featured/Featured"
import PopularSection from "./PopularSection/PopularSection"
import Testimonial from "./Testimonial/Testimonial"

 
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularSection></PopularSection>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home