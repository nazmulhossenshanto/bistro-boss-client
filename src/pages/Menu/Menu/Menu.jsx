 import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../../SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu"
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/dessert-bg.jpeg'


const Menu = () => {
  const [menu ] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    console.log(offered);

  return (
    <div>
         <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
        
        <Cover image={menuImg} title={"Our menu"}></Cover>
        {/* Today's offer */}
        <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
       <div className="space-y-10">
        <MenuCategory categoryMenu={offered}></MenuCategory>
        {/* Dessert section */}
        <Cover image={dessertImg} title={"DESSERT"}></Cover>
        <MenuCategory categoryMenu={dessert}></MenuCategory>
        {/* Pizza section */}
        <Cover image={pizzaImg} title={"PIZZA"}></Cover>
        <MenuCategory categoryMenu={pizza}></MenuCategory>
        {/* Salad section */}
        <Cover image={saladImg} title={"SALAD"}></Cover>
        <MenuCategory categoryMenu={salad}></MenuCategory>
        {/* Soup section */}
        <Cover image={soupImg} title={"SOUP"}></Cover>
        <MenuCategory categoryMenu={soup}></MenuCategory>
        </div>
        
        </div>
  )
}

export default Menu