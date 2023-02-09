import {Routes, Route} from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MintsPage from './pages/MintsPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout children={<HomePage />} />}/>
      <Route path='/mints' element={<Layout children={<MintsPage />} />}/>
    </Routes>
  );
}

export default App;
