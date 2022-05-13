
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import MannageInventory from './components/ManageInventory/MannageInventory';
import MyItem from './components/MyItem/MyItem';
import Navber from './components/Navber/Navber';
import NotFound from './components/NotFound/NotFound';
import AddItem from './components/AddItem/AddItem';
import RequerAuth from './components/RequerAuth/RequerAuth';
import SignUp from './components/SignUp/SignUp';



function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <RequerAuth>
            <Inventory></Inventory>
          </RequerAuth>
        }
        ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/manageInventory' element={<MannageInventory></MannageInventory>}></Route>
        <Route path='/myItem' element={<MyItem></MyItem>}></Route>
        < Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
