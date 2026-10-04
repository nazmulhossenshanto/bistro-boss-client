 

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center my-10 space-y-5 md:w-3/12 mx-auto">
        <p className="text-sm text-yellow-400 md:text-xl">--- {subHeading} ---</p>
         
        <h3 className="text-lg border-y-3 py-5 border-gray-400 md:text-2xl lg:text-4xl"> {heading} </h3>
    </div>
  )
}

export default SectionTitle;