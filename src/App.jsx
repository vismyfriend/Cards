import { Route, Routes } from 'react-router-dom';
import Game from './pages/game'
import Select from './pages/select'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Select />} />
      <Route path='/:name' element={<Game />} />
    </Routes>
  );
}

export default App;