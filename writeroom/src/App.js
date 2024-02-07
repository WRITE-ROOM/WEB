import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Redirect from "./pages/KakaoRedirect";
import Main from "./pages/Main";
import RoomPage from "./pages/RoomPage.jsx";
import RoomSetting from "./pages/RoomSetting.jsx";
import RoomMember from "./pages/RoomMember.jsx";
import Header from "./components/Header/Header.jsx";
import Write from "./pages/Write.jsx";
import Note from "./pages/Note.jsx";
// import Myprofile from "./pages/Myprofile.jsx";
import MyprofileAccount from "./pages/MyprofileAccount.jsx";
import MyProfile from "./pages/Myprofile.jsx";
import MyprofilePw from "./pages/MyprofilePw.jsx";
// import MyBookmarkPage from "./pages/MyBookmarkPage.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/rooms" element={<RoomPage />} />
        <Route path="/rooms/:roomId" element={<RoomPage />} />
        <Route path="/rooms/setting" element={<RoomSetting />} />
        <Route path="/rooms/member" element={<RoomMember />} />

        <Route path="/write" element={<Write />} />
        <Route path="/rooms/:roomId/notes" element={<Note />} />
        <Route path="/rooms/:roomId/notes/:noteId" element={<Note />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth" element={<Redirect />} />
        <Route path="/main" element={<Main />} />

        <Route path="/myprofile/account" element={<MyProfile />} />
        <Route path="/myprofile/account/email" element={<MyprofileAccount />} />
        <Route path="/myprofile/account/pw" element={<MyprofilePw />} />
        {/* <Route path="/myprofile/bookmark" element={<MyBookmarkPage/>} /> */}
        {/* <Route path="/myprofile/none" component={NonePage} /> */}
      </Routes>
    </div>
  );
}

export default App;
