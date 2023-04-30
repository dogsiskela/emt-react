import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home/Home';
import BookPreview from './screens/book/BookPreview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/books/:id' Component={BookPreview} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
