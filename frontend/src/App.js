import './App.css';
import LoginPage from './Components/LoginPage/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import SignUp from './Components/LoginPage/SignUp/SignUp';
import SignIn from './Components/LoginPage/SignIn/SignIn';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <LoginPage/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;