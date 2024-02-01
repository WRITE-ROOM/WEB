import logo from './logo.svg';
import RecTopic from './components/RecTopic/RecTopic';
import RecTopicClose from './components/RecTopicClose/RecTopicClose';
import { useState } from 'react';
import SearchBox from "./components/SearchBox/SearchBox";
import {Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Redirect from './pages/KakaoRedirect';
import Main from './pages/Main';
import RoomPage from "./pages/RoomPage.js";

function App() {
  return (
    <Header />
    <Routes>
      <Route path="/room" element={<RoomPage />}></Route>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />    
      <Route path="/oauth" element={<Redirect/>} />
      <Route path="/main" element={<Main/>} />
    </Routes>

    <div className="App">
      {isSNBOpen ? (
        <RecTopic onToggle={toggleSNB}></RecTopic>
      ) : (
        <RecTopicClose onToggle={toggleSNB}> </RecTopicClose>
      )}
    </div>

  );
}

export default App;
