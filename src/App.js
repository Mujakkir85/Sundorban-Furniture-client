import { Route, Routes } from 'react-router-dom';
import Addfurniture from './components/Addfurniture/Addfurniture';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
//import './App.css';
import Login from './components/Login/Login';
import Managefurniture from './components/Managefurniture/Managefurniture';
import Mycollections from './components/Mycollections/Mycollections';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/managefurniture'
          element={<RequireAuth>
            <Managefurniture></Managefurniture>
          </RequireAuth>}>
        </Route>

        <Route path='/addfurniture'
          element={<RequireAuth>
            <Addfurniture></Addfurniture>
          </RequireAuth>}>
        </Route>

        <Route path='/mycollections'
          element={<RequireAuth>
            <Mycollections></Mycollections>
          </RequireAuth>}>
        </Route>

        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div >
  );
}

export default App;
