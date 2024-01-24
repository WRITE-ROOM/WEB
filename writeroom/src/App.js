import logo from './logo.svg';
import RecTopic from './components/RecTopic/RecTopic';
import RecTopicClose from './components/RecTopicClose/RecTopicClose';
import { useState } from 'react';
import SearchBox from "./components/SearchBox/SearchBox";
import {Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup';

function App() {
  const [isSNBOpen, setIsSNBOpen] = useState(false);

  const toggleSNB = () => {
    setIsSNBOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>      
      </Routes>

      {/* {isSNBOpen ? 
      <RecTopic onToggle={toggleSNB}></RecTopic>
      : <RecTopicClose onToggle={toggleSNB}> </RecTopicClose>}
      <SearchBox /> */}
    </div>
  );
}

export default App;
