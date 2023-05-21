import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from './pages/Authentication/SignIn';
//import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import AacCategory from './pages/Form/Category';
import AacPhraseBank from './pages/Form/Phrasebank';
import AacPhrases from './pages/Form/Phrases';
import Exercise from './pages/Form/Exercises';
import ExerciseCategory from './pages/Form/ExerciseCategory';
import ExerciseSubCategory from './pages/Form/ExerciseSubCategory';
import SpeechTherapist from './pages/Form/SpeechTherapist';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Users from './pages/UsersTable';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <p className=" text-center text-danger">Failed to lead app</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forms/form-elements" element={<FormElements />} />
        <Route path="/forms/form-layout" element={<FormLayout />} />
        <Route path="/forms/Category" element={<AacCategory />} />
        <Route path="/forms/PhraseBank" element={<AacPhraseBank />} />
        <Route path="/forms/Phrases" element={<AacPhrases />} />
        <Route path="/forms/ExerciseCategory" element={<ExerciseCategory />} />
        <Route
          path="/forms/ExerciseSubCategory"
          element={<ExerciseSubCategory />}
        />
        <Route path="/forms/Exercise" element={<Exercise />} />
        <Route path="/forms/SpeechTherapist" element={<SpeechTherapist />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/ui/alerts" element={<Alerts />} />
        <Route path="/ui/buttons" element={<Buttons />} />
      </Routes>
    </>
  );
}

export default App;
