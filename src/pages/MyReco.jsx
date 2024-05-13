import { useEffect, useState } from "react";
import UseAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const MyReco = () => {
    const {user} = UseAuth();
    const [myRecommendation, setMyRecommendation] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/recommendations/user-email/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyRecommendation(data)
        })
    }, [])

    const handleDelete = (id, queryId) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
          if (result.isConfirmed) {
            const {data} = await axios.delete(`http://localhost:5000/delete-recommendation/${id}`)
            console.log(data);
            const remaining = myRecommendation?.filter((item) => item._id !== id);
            setMyRecommendation(remaining);

            const {data2 } = await axios.post(`http://localhost:5000/decrement/${queryId}`)
            console.log(data2);
    
            Swal.fire({
              title: "Deleted!",
              text: "Recommendation has been deleted.",
              icon: "success"
            });
          }
        });
    }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 text-center"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {
                    myRecommendation.map(reco => <tr key={reco._id} className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {reco?.userName}
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {reco?.userEmail}
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                    {reco?.productName}
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                    {reco?.currentTimeStamp}
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                      onClick={() => handleDelete(reco?._id, reco?.queryId)}
                        type="button"
                        className="mx-auto inline-flex items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-white bg-red-500 p-2 hover:bg disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReco;
