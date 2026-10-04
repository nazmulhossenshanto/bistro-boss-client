import { useEffect, useState } from "react"
import SectionTitle from "../../../SectionTitle/SectionTitle"
import MenuItem from "../../../shared/MenuItem/MenuItem";


const PopularSection = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data => {
            const popularItem = data.filter(item=>item.category === 'popular');
            setMenu(popularItem)
        })
    }, [])
  return (
    <section className="mb-10">
        <SectionTitle subHeading={"Popular Item"}
        heading={"From Our Menu"}></SectionTitle>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    </section>
  )
}

export default PopularSection