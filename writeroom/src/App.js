import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgetPwdPage from "./pages/ForgetPwdPage.jsx";
import Redirect from "./pages/KakaoRedirect";
import Main from "./pages/Main";
import RoomPage from "./pages/RoomPage.jsx";
import RoomSetting from "./pages/RoomSetting.jsx";
import RoomMember from "./pages/RoomMember.jsx";
import Header from "./components/Header/Header.jsx";
import Write from "./pages/Write.jsx";
import Note from "./pages/Note.jsx";
import MyprofileAccount from './pages/MyprofileAccount.jsx'
import MyProfile from "./pages/Myprofile.jsx"
import MyprofilePw from "./pages/MyprofilePw.jsx";
import MyBookmarkPage from "./pages/MyBookmarkPage.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/room" element={<RoomPage />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/room/setting" element={<RoomSetting />} />
        <Route path="/room/member" element={<RoomMember />} />

        <Route path="/write" element={<Write />} />
        <Route path="/note" element={<Note />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPwd" element={<ForgetPwdPage />} />
        <Route path="/oauth" element={<Redirect />} />
        <Route path="/main" element={<Main />} />

        <Route path="/myprofile/account" element={<MyProfile/>} />
        <Route path="/myprofile/account/email" element={<MyprofileAccount/>} />
        <Route path="/myprofile/account/pw" element={<MyprofilePw/>} />
        <Route path="/myprofile/bookmark" element={<MyBookmarkPage/>} />
        {/* <Route path="/myprofile/none" component={NonePage} /> */}
      </Routes>
    </div>
  );
}

export default App;
