import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Components/Add/Add';
import ContactList from './Components/Contactlist/Contactlist';
import Edit from './Components/Edit/Edit';
import NavBar from './Components/Navbar/Nav';
import { current } from './JS/ACTIONS/user';
import Error from './Pages/ERREUR/Err';
import Home from './Pages/HOME/Ho';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem("token")){
      dispatch(current())
    }
  }, [dispatch])
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/*' element={<Error/>}/>
          <Route  path='/contactlist' element={<ContactList/>}/>
          <Route path='/edit/:id' element={<Edit/>} />
          <Route path="/add" element={<Add/>}/>
          <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Profile' element={<Profile/>} />


      </Routes>
    </div>
  );
}

export default App;
