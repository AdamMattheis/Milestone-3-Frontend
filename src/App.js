import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Items from './components/items'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;