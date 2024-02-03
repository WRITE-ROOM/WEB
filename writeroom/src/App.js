import logo from "./logo.svg";
import RecTopic from "./components/RecTopic/RecTopic";
import RecTopicClose from "./components/RecTopicClose/RecTopicClose";
import { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Redirect from "./pages/KakaoRedirect";
import Main from "./pages/Main";
import RoomPage from "./pages/RoomPage.js";
import Header from "./components/Header/Header.jsx";
import Write from "./pages/Write.jsx";
import Note from "./pages/Note.jsx";
// import Myprofile from "./pages/Myprofile.jsx";
import MyprofileAccount from './pages/MyprofileAccount.jsx'
import MyProfile from "./pages/Myprofile.jsx"
import MyprofilePw from "./pages/MyprofilePw.jsx";

function App() {
  const [isSNBOpen, setIsSNBOpen] = useState(false);

  const toggleSNB = () => {
    setIsSNBOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/room" element={<RoomPage />}></Route>
        <Route path="/room/:roomId" element={<RoomPage />}></Route>
        <Route path="/write" element={<Write />} />
        <Route path="/note" element={<Note />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth" element={<Redirect />} />
        <Route path="/main" element={<Main />} />

        <Route path="/myprofile/account" element={<MyProfile/>} />
        <Route path="/myprofile/account/email" element={<MyprofileAccount/>} />
        <Route path="/myprofile/account/pw" element={<MyprofilePw/>} />
        {/* <Route path="/myprofile/bookmark" component={BookmarkPage} />
        <Route path="/myprofile/none" component={NonePage} /> */}
      </Routes>


      {/* {isSNBOpen ? (
        <RecTopic onToggle={toggleSNB}></RecTopic>
      ) : (
        <RecTopicClose onToggle={toggleSNB}> </RecTopicClose>
      )} */}
    </div>
  );
}

export default App;
