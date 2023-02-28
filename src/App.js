import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Items from './components/items';
import NewItemForm from './components/newItemForm';
import ItemDetails from './components/itemDetails';
import EditItemForm from './components/editItemForm';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/new" element={<NewItemForm />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="/items/:id/edit" element={<EditItemForm />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;