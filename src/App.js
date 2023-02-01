import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignUp from './routes/sign-up/sign-up.component';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sign-up' element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
