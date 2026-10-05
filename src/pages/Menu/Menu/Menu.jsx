 import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../../SectionTitle/SectionTitle";

const Menu = () => {
  return (
    <div>
         <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
        
        <Cover image={menuImg} title={"Our menu"}></Cover>
        <SectionTitle subHeading={"Don't miss"} heading={"Today Offer"}></SectionTitle>
        
        
        </div>
  )
}

export default Menu