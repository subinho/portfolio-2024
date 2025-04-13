import './scss/style.scss';
import { Header, Footer, Hero } from './components';
import { Home, About } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
        <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>
        </main>
      <Footer />
    </>
  );
}

export default App;
