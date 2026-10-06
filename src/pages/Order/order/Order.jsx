import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../../shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";



const Order = () => {
  const [tabIndex, setTavIndex] = useState(0);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover image={orderCoverImg} title={"Our Shop"}></Cover>

      <Tabs className={'my-12'} defaultIndex={tabIndex} onSelect={(index) => console.log(index)}>
        <TabList className={'text-center'}>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {
              salad.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {
              pizza.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {
              soup.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {
              dessert.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {
              drinks.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
