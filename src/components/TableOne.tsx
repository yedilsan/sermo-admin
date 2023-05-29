import axios from 'axios';
import { useEffect, useState } from 'react';
import { getAccessToken } from '../pages/Authentication/SignIn';

interface Item {
  id: number;
  text: string;
  image: string;
}

const TableOne = () => {
  const [data, setData] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const accessToken = getAccessToken();

  if (accessToken) {
    // Include the access token in the request headers
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  } else {
    // Handle the case when the access token is not available
    // For example, redirect the user to the login page
    // or display an error message
    console.error('Access token not found');
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://sermo-backend.onrender.com/category'
        );
        setData(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const handleDelete = (itemId: number) => {
    axios
      .delete(`https://sermo-backend.onrender.com/category/${itemId}`)
      .then((response) => {
        console.log('Response:', response.data);
        window.alert('Delete request successful');

        // Remove the deleted item from the data state
        setData((prevData) => prevData.filter((item) => item.id !== itemId));
      })
      .catch((error) => {
        console.error('Error making delete request:', error);
      });
  };
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Channels
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Id</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Text
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Image
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </div>
        </div>
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4"
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="hidden text-black dark:text-white sm:block">
                  {item.id}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{item.text}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <a href={item.image} target="_blank" rel="noopener noreferrer">
                  <img
                    className="h-20 w-20 object-contain"
                    src={item.image}
                    alt="Image"
                  />
                </a>
              </div>
              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="mr-5 inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          <ul className="flex items-center text-lg">
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
              (_, index) => (
                <li
                  key={index}
                  className={`cursor-pointer px-2 ${
                    currentPage === index + 1 ? 'font-bold' : ''
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TableOne;
