import { Link, useLoaderData } from "react-router-dom";

const ViewDetailsQuery = () => {
  const singleQuery = useLoaderData();
  console.log(singleQuery);

  const {
    queryTitle,
    productImage,
    productName,
    productBrand,
    boycottingReasonDetails,
  } = singleQuery;

  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8  pb-20">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight ">
            {queryTitle}
          </h1>
          <p className="font-bold text-lg sm:text-xl mt-3">
            Product name:{" "}
            <span className=" font-semibold  rounded-3xl">{productName}</span>
          </p>
          <p className="font-bold text-lg sm:text-xl mt-1">
            Product Brand:{" "}
            <span className=" font-semibold  rounded-3xl">{productBrand}</span>
          </p>
          <p className="font-bold text-lg sm:text-xl mt-3">
            Boycott Reason:{" "}
            <span className="mt-3 text-lg font-normal text-gray-800  dark:text-neutral-400">
              {boycottingReasonDetails}.
            </span>
          </p>
          <Link to='/my-queries' className>Go back</Link>

          <div className="mt-7 grid gap-3 w-full sm:inline-flex"></div>
        </div>

        <div className="relative ms-4">
          <img className="w-full rounded-md" src={productImage} />
          <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
};

export default ViewDetailsQuery;
