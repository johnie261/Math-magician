import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/calculator';
import Quote from './components/quote';
import Error from './components/error';
import SharedNav from './components/sharedNav';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedNav />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
