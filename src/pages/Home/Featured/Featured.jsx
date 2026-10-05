import SectionTitle from "../../../SectionTitle/SectionTitle"

 import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item   text-white pt-8 my-20">
        <SectionTitle subHeading={"Check it out"} heading={"Featured item"}></SectionTitle>
        <div className="md:flex justify-center items-center  space-y-5 py-8 pb-20 pt-12 px-36">
            <div  >
                <img className="rounded-xl" src={featuredImg}alt="" />
            </div>
            <div className="space-y-2  md:ml-10">
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can i get some ?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ratione voluptatem similique libero tenetur veritatis incidunt, aperiam obcaecati nisi itaque autem veniam quod commodi sunt sit perspiciatis provident iure omnis.</p>
                <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Featured;