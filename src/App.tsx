import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from './pages/Authentication/SignIn';
//import SignUp from './pages/Authentication/SignUp';
import AacCategory from './pages/Form/Category';
import AacPhraseBank from './pages/Form/Phrasebank';
import AacPhrases from './pages/Form/Phrases';
import Exercise from './pages/Form/Exercises';
import ExerciseCategory from './pages/Form/ExerciseCategory';
import ExerciseSubCategory from './pages/Form/ExerciseSubCategory';
import SpeechTherapist from './pages/Form/SpeechTherapist';
import Profile from './pages/Profile';
import Tables from './pages/Tables';
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
      </Routes>
    </>
  );
}

export default App;
