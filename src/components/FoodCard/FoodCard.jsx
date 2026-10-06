 

const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item
  return (
    <div className="card    shadow-lg">
  <figure>
    <img
      src={image}
      alt='' />
  </figure>
  <p className="absolute top-3 bg-black/80 text-white py-1 px-2 text-xs right-8">${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center mt-5">
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
  )
}

export default FoodCard