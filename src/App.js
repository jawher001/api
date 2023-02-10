import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Details } from './components/Details';
import { UserList } from './components/UserList';

function App() {
  return (
    <div className="App">
   
  <Routes>
    <Route path='/' element={<UserList/>} />
    <Route path= '/:id' element={<Details/>} />
  </Routes>
    </div>
  );
}

export default App;
