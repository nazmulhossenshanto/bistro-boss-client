import { Link } from "react-router";
import MenuItem from "../../../shared/MenuItem/MenuItem";


const MenuCategory = ({ categoryMenu, route }) => { 
  return (
    <div className="text-center">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {categoryMenu.map((item) => (
        <MenuItem key={item._id} item={item}></MenuItem>
      ))} 
    </div>
    <Link to={`/order/${route}`}> <button className="btn btn-outline     border-0 border-b-4 border-b-gray-400 mt-4">Order Your Favourite Food</button></Link>
    </div>
  );
};

export default MenuCategory;
