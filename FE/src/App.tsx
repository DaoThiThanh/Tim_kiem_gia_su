import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import SearchTutor from './pages/SearchTutor';
import Layout from './layouts/Layout';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tim-gia-su" element={<SearchTutor />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
