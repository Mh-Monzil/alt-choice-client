import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Queries = () => {
    const query = useLoaderData();
    const [allQuery, setAllQuery] = useState(query);
    // console.log(query);
    console.log(allQuery);

    useEffect(() => {
        setAllQuery([...allQuery].sort((a, b) => new Date(b.queryUser.currentDateTime) - new Date(a.queryUser.currentDateTime)));
    }, [])

    console.log(allQuery);


    return (
        <div>
            <h2 className="font-semibold text-4xl text-center">All query</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
                {
                    allQuery.map(query => <div key={query._id} className="max-w-96 min-w-96 mx-auto flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div className="p-3 text-gray-800 dark:text-white flex items-center gap-4">
                      <div>
                          <img className="w-12  h-12 rounded-full" src={query?.queryUser?.image} alt="" />
                      </div>
                      <div>
                          <p className="text-lg">{query?.queryUser?.name}</p>
                          <span className="text-[12px]">{query?.queryUser?.currentDateTime}</span>
                      </div>
                    </div>
                    <img
                      className="w-full h-80 "
                      src={query?.productImage}
                    />
                    <div className="p-4 md:p-5">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {query?.queryTitle}
                      </h3>
                      <div className="text-gray-800 dark:text-white font-semibold flex justify-between items-center my-3">
                          <p className="bg-green-400/20 text-green-500 py-2 px-4 rounded-lg">{query?.productName}</p>
                          <p className="bg-green-400/20 text-green-500 py-2 px-4 rounded-lg">{query?.productBrand}</p>
                      </div>
                      <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        {query?.boycottingReasonDetails}
                      </p>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Queries;