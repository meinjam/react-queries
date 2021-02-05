import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import Planet from './components/Planet';
import People from './components/People';

const App = () => {
  const [page, setPage] = useState('planet');

  return (
    <div className='App'>
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      {page === 'planet' ? <Planet /> : <People />}
      <Footer />
    </div>
  );
};

export default App;
