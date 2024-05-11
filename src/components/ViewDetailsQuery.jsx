import { useLoaderData } from "react-router-dom";

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

      {/* modal starts  */}
      <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-focus-management-modal">
  Open modal
</button>

<div id="hs-focus-management-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
  <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
        <h3 className="font-bold text-gray-800 dark:text-white">
          Modal title
        </h3>
        <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-overlay="#hs-focus-management-modal">
          <span className="sr-only">Close</span>
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div className="p-4 overflow-y-auto">
        <label className="block text-sm font-medium mb-2 dark:text-white">Email</label>
        <input type="email" id="input-label" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-500 dark:text-neutral-400" placeholder="you@site.com"  />
      </div>
      <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#hs-focus-management-modal">
          Close
        </button>
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>


{/* modal end  */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight dark:text-white">
            {queryTitle}
          </h1>
          <p className="font-bold text-lg sm:text-xl mt-3">Product name: <span className=" font-semibold  rounded-3xl">{productName}</span></p>
          <p className="font-bold text-lg sm:text-xl mt-1">Product Brand: <span className=" font-semibold  rounded-3xl">{productBrand}</span></p>
          <p className="font-bold text-lg sm:text-xl mt-3">Product Brand: <span className="mt-3 text-lg font-normal text-gray-800  dark:text-neutral-400">
            {boycottingReasonDetails}.
          </span></p>
          

          <div className="mt-7 grid gap-3 w-full sm:inline-flex"></div>
          {/* <!-- End Buttons --> */}
        </div>
        {/* <!-- End Col --> */}

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
