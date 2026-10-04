import SectionTitle from "../../../SectionTitle/SectionTitle"

 import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
  return (
    <div>
        <SectionTitle subHeading={"Check it out"} heading={"Featured item"}></SectionTitle>
        <div className="md:flex justify-center items-center py-8 px-16">
            <div>
                <img src={featuredImg}alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can i get some ?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ratione voluptatem similique libero tenetur veritatis incidunt, aperiam obcaecati nisi itaque autem veniam quod commodi sunt sit perspiciatis provident iure omnis.</p>
                <button className="btn btn-outline">Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Featured