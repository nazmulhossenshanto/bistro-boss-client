 

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center my-10 space-y-5 ">
        <p className="text-sm text-yellow-400 md:text-xl">--- {subHeading} ---</p>
        <h3 className="text-lg w-1/4 mx-auto  text-center border-y-3 py-5 border-gray-400 md:text-2xl lg:text-4xl"> {heading} </h3>
    </div>
  )
}

export default SectionTitle;