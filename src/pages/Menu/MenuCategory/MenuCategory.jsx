import MenuItem from "../../../shared/MenuItem/MenuItem"

 

const MenuCategory = ({categoryMenu}) => {
    

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                categoryMenu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
  )
}

export default MenuCategory