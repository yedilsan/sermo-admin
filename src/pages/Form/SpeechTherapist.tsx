import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import axios from 'axios';

const SpeechTherapist = () => {
  const [NameInput, setNameInput] = useState('');
  const [PhoneInput, setPhoneInput] = useState('');
  const [EmailInput, setEmailInput] = useState('');
  const [AddressInput, setAddressInput] = useState('');
  const [RatingInput, setRatingInput] = useState('');

  return (
    <DefaultLayout>
      <Breadcrumb pageName="SpeechTherapist" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Speech Therapist
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={NameInput}
                  onChange={(event) => setNameInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  value={PhoneInput}
                  onChange={(event) => setPhoneInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  value={EmailInput}
                  onChange={(event) => setEmailInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  value={AddressInput}
                  onChange={(event) => setAddressInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Rating
                </label>
                <input
                  type="text"
                  placeholder="Rating"
                  value={RatingInput}
                  onChange={(event) => setRatingInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="p-4 md:p-6 xl:p-9">
              <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">
                <button
                  onClick={() => {
                    axios
                      .post('http://localhost:3333/speech-therapist', {
                        name: NameInput,
                        phone: PhoneInput,
                        email: EmailInput,
                        address: AddressInput,
                        rating: RatingInput,
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
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SpeechTherapist;
