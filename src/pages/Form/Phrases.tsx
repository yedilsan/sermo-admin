import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import axios from 'axios';
import { getAccessToken } from '../Authentication/SignIn';

const Phrases = () => {
  const [textInput, setTextInput] = useState('');
  const [soundInput, setSoundInput] = useState<File | null>(null);
  const [emojiInput, setEmojiInput] = useState('');
  const [phrasebankIdInput, setPhraseBankIdInput] = useState('');
  const [phraseIdInput, setPhraseIdInput] = useState('');
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
      <Breadcrumb pageName="Phrases" />

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
                  Write text
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
                  emoji
                </label>
                <input
                  type="text"
                  placeholder="Default Input"
                  value={emojiInput}
                  onChange={(event) => setEmojiInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Chose Phrase Bank
                </label>
                <input
                  type="text"
                  placeholder="Default Input"
                  value={phrasebankIdInput}
                  onChange={(event) => setPhraseBankIdInput(event.target.value)}
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
                    setSoundInput(file);
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
                formData.append('emoji', emojiInput);
                formData.append('phraseBankId', phrasebankIdInput);

                if (soundInput !== null) {
                  formData.append('sound', soundInput);
                }

                axios
                  .post('http://localhost:3333/phrases/', formData)
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
      <hr className="mb-6" />
      <Breadcrumb pageName="Phrases Update" />

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
                  Id of phrase
                </label>
                <input
                  type="text"
                  placeholder="write id of phrase"
                  value={phraseIdInput}
                  onChange={(event) => setPhraseIdInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Write text
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
                  emoji
                </label>
                <input
                  type="text"
                  placeholder="Default Input"
                  value={emojiInput}
                  onChange={(event) => setEmojiInput(event.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Chose Phrase Bank
                </label>
                <input
                  type="text"
                  placeholder="Default Input"
                  value={phrasebankIdInput}
                  onChange={(event) => setPhraseBankIdInput(event.target.value)}
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
                    setSoundInput(file);
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
                formData.append('emoji', emojiInput);
                formData.append('phraseBankId', phrasebankIdInput);

                if (soundInput !== null) {
                  formData.append('sound', soundInput);
                }

                axios
                  .patch(
                    'http://localhost:3333/phrases/' + phraseIdInput,
                    formData
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
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr className="mb-10" />
      <Breadcrumb pageName="Phrase Bank DELETE" />
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
                  value={phraseIdInput}
                  onChange={(event) => setPhraseIdInput(event.target.value)}
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
                  .delete('http://localhost:3333/phrases/' + phraseIdInput)
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

export default Phrases;
