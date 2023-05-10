import { Route, Routes } from 'react-router-dom';
import Game from './pages/game'
import Select from './pages/select'


function App() {

  return (
    <Routes>
      <Route path='/two-decks/' element={<Select />} />
      <Route path='/two-decks/:name' element={<Game />} />
    </Routes>
  );
}

export default App;