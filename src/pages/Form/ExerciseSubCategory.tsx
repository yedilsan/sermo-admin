import axios from 'axios';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { getAccessToken } from '../Authentication/SignIn';
import { useState } from 'react';

const ExerciseSubCategory = () => {
  const [textInput, setTextInput] = useState('');
  const [categoryIdInput, setCategoryIdInput] = useState('');
  const [exerciseSubCatIdInput, setExerciseSubCatIdInput] = useState('');

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
      <Breadcrumb pageName="ExerciseSubCategory" />

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
                  Write name of exercise
                </label>
                <input
                  type="text"
                  placeholder="name of exercise"
                  value={textInput}
                  onChange={(event) => setTextInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Chose Category
                </label>
                <input
                  type="text"
                  placeholder="Category Id"
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
                  .post('http://localhost:3333/exercise-sub-categories/', {
                    text: textInput,
                    exerciseCategoryId: categoryIdInput,
                  })
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
      <Breadcrumb pageName="Sub category Update" />
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
                  value={exerciseSubCatIdInput}
                  onChange={(event) =>
                    setExerciseSubCatIdInput(event.target.value)
                  }
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Write text
                </label>
                <input
                  type="text"
                  placeholder="Write phrase bank name"
                  value={textInput}
                  onChange={(event) => setTextInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Chose Category
                </label>
                <input
                  type="text"
                  placeholder="Category Id"
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
                  .patch(
                    'http://localhost:3333/exercise-sub-categories/' +
                      exerciseSubCatIdInput,
                    {
                      text: textInput,
                      exerciseCategoryId: categoryIdInput,
                    }
                  )
                  .then((response) => {
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
    </DefaultLayout>
  );
};

export default ExerciseSubCategory;
