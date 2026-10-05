import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import Featured from "./Featured/Featured"
import PopularSection from "./PopularSection/PopularSection"
import Testimonial from "./Testimonial/Testimonial"
import { Helmet } from "react-helmet-async";

 
const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularSection></PopularSection>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home