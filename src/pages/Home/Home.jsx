import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import Featured from "./Featured/Featured"
import PopularSection from "./PopularSection/PopularSection"

 
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularSection></PopularSection>
      <Featured></Featured>
    </div>
  )
}

export default Home