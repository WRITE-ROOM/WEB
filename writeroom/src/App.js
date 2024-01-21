import logo from './logo.svg';
import './App.css';
import RecTopic from './components/RecTopic/RecTopic';
import RecTopicClose from './components/RecTopicClose/RecTopicClose';
import { useState } from 'react';


function App() {
  const [isSNBOpen, setIsSNBOpen] = useState(false);

  const toggleSNB = () => {
    setIsSNBOpen((prev) => !prev);
  };

  return (
    <div className="App">
      {isSNBOpen ? 
      <RecTopic onToggle={toggleSNB}></RecTopic>
      : <RecTopicClose onToggle={toggleSNB}> </RecTopicClose>}
    </div>
  );
}

export default App;
