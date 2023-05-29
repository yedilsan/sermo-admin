import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import axios from 'axios';
import { getAccessToken } from '../Authentication/SignIn';

const Category = () => {
  const [textInput, setTextInput] = useState('');
  const [categoryIdInput, setCategoryIdInput] = useState('');
  const [imageInput, setImageInput] = useState<File | null>(null);

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

  return (
    <DefaultLayout>
      <Breadcrumb pageName="AAC Category" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Input Fields
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Text
                </label>
                <input
                  type="text"
                  placeholder="Write category name"
                  value={textInput}
                  onChange={(event) => setTextInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          {/* <!-- File upload --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                File upload
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Attach file
                </label>
                <input
                  type="file"
                  onChange={(event) => {
                    const file = event.target.files && event.target.files[0];
                    setImageInput(file);
                  }}
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6 xl:p-9">
          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">
            <button
              onClick={() => {
                const formData = new FormData();
                formData.append('text', textInput);

                if (imageInput !== null) {
                  formData.append('image', imageInput);
                }

                axios
                  .post('https://sermo-backend.onrender.com/category', formData)
                  .then((response) => {
                    console.log('Response:', response.data);

                    window.alert('Post request successful');
                  })
                  .catch((error) => {
                    console.error('Error making post request:', error);
                  });
              }}
              className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr className="mb-10" />
      <Breadcrumb pageName="Category Update" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Input Fields
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Text
                </label>
                <input
                  type="text"
                  placeholder="Default Input"
                  value={textInput}
                  onChange={(event) => setTextInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Id
                </label>
                <input
                  type="text"
                  placeholder="write id of category"
                  value={categoryIdInput}
                  onChange={(event) => setCategoryIdInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          {/* <!-- File upload --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                File upload
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Attach file
                </label>
                <input
                  type="file"
                  onChange={(event) => {
                    const file = event.target.files && event.target.files[0];
                    setImageInput(file);
                  }}
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6 xl:p-9">
          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">
            <button
              onClick={() => {
                const formData = new FormData();
                formData.append('text', textInput);

                if (imageInput !== null) {
                  formData.append('image', imageInput);
                }

                axios
                  .patch(
                    'https://sermo-backend.onrender.com/category/' +
                      categoryIdInput,
                    formData
                  )
                  .then((response) => {
                    console.log('Post request successful');
                    console.log('Response:', response.data);

                    window.alert('Patch request successful');
                  })
                  .catch((error) => {
                    console.error('Error making post request:', error);
                  });
              }}
              className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <hr className="mb-10" />
      <Breadcrumb pageName="Category DELETE" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Input Fields
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Id
                </label>
                <input
                  type="text"
                  placeholder="write id of category"
                  value={categoryIdInput}
                  onChange={(event) => setCategoryIdInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6 xl:p-9">
          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">
            <button
              onClick={() => {
                axios
                  .delete(
                    'https://sermo-backend.onrender.com/category/' +
                      categoryIdInput
                  )
                  .then((response) => {
                    console.log('Response:', response.data);

                    window.alert('Delete request successful');
                  })
                  .catch((error) => {
                    console.error('Error making post request:', error);
                  });
              }}
              className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Category;
