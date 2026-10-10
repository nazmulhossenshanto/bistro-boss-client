 
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto my-10 w-full max-w-2xl space-y-4 px-4 text-center">

      <p className="text-sm italic text-yellow-500 md:text-lg">
        --- {subHeading} ---
      </p>

      <h3 className="mx-auto w-full border-y-2 border-gray-300 py-4 text-xl font-medium md:text-2xl lg:text-3xl">
        {heading}
      </h3>

    </div>
  );
};

export default SectionTitle;
 