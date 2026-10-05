 
import SectionTitle from "../../../SectionTitle/SectionTitle"
import MenuItem from "../../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularSection = () => {
    const [menu] = useMenu(); 
    const popularMenu = menu.filter(item=> item.category === 'popular')
  return (
    <section className="mb-10">
        <SectionTitle subHeading={"Popular Item"}
        heading={"From Our Menu"}></SectionTitle>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                popularMenu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    </section>
  )
}

export default PopularSection