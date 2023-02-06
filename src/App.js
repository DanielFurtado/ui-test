import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Gallery from './routes/gallery/gallery.component';
import Navigation from './routes/navigation/navigation.component';
import SignUp from './routes/sign-up/sign-up.component';

import './App.scss';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Gallery />} />
          <Route path='sign-up' element={<SignUp />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
