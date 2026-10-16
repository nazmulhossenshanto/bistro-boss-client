
 

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item; 
    
  return (
    <div className="flex space-x-4">
        <img src={image} className="w-30 h-20  rounded-tr-4xl rounded-br-4xl rounded-bl-4xl " alt="" />
        <div>
            <h3 className="uppercase font-semibold">{name}---------- </h3>
            <p className="text-sm text-gray-500">{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p> 
       
         
    </div>
  )
}

export default MenuItem;