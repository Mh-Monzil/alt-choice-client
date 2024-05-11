const QueryCard = ({ query }) => {
  const {
    _id,
    queryTitle,
    productName,
    productBrand,
    productImage,
    boycottingReasonDetails,
    queryUser,
  } = query;



console.log(queryUser);


  return (
    <div className="max-w-96 mx-auto flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="p-3 text-gray-800 dark:text-white flex items-center gap-4">
        <div>
            <img className="w-12  h-12 rounded-full" src={queryUser?.image} alt="" />
        </div>
        <div>
            <p className="text-lg">{queryUser?.name}</p>
            <span className="text-[12px]">{queryUser?.currentDateTime}</span>
        </div>
      </div>
      <img
        className="w-full h-80 "
        src={productImage}
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {queryTitle}
        </h3>
        <div>
            <p>{productName}</p>
            <p>{productBrand}</p>
        </div>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
          {boycottingReasonDetails}
        </p>
        <p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">
          Last updated 5 mins ago
        </p>
      </div>
    </div>
  );
};

export default QueryCard;
