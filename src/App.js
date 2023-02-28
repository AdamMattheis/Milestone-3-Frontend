import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Items from './components/items';
import NewItemForm from './components/newItemForm';
import ItemDetails from './components/itemDetails';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/new" element={<NewItemForm />} />
          <Route path="/items/:_id" element={<ItemDetails />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;