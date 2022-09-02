import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./pages/users/UserList";
import Single from "./pages/single/Single";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":customerId" element={<Single />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<UserList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
