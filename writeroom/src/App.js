import { Route, Routes } from "react-router-dom";
import RoomPage from "./pages/RoomPage.js";
function App() {
  return (
    <Routes>
      <Route path="/room" element={<RoomPage />}></Route>
    </Routes>
  );
}

export default App;
