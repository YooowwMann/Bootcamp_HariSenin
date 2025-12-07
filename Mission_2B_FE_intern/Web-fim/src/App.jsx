// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Film from "./pages/Films";
import MyList from "./pages/MyList";
import Profile from "./pages/Profile";

// Protek route khusus yang sudah login
function PrivateRoute({ children }) {
  const session = JSON.parse(localStorage.getItem("session"));

  // jika tidak ada login lempar ke halaman LOGIN
  if (!session) {
    return <Navigate to="/auth/login" replace />;
  }
  // jika ada http://localhost:5173/home dll maka langsung ke buka
  return children;
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  
  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>    {/*Privat tidak mudah di akses orang umum ajg*/}
              <Home searchQuery={searchQuery} onSearch={setSearchQuery} /> 
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>    {/*Privat tidak mudah di akses orang umum ajg*/}
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/auth/series"
          element={
            <PrivateRoute>    {/*Privat tidak mudah di akses orang umum ajg*/}
              <Series searchQuery={searchQuery} onSearch={setSearchQuery} />
            </PrivateRoute>
          }
        />

        <Route
          path="/auth/film"
          element={
            <PrivateRoute>    {/*Privat tidak mudah di akses orang umum ajg*/}
              <Film searchQuery={searchQuery} onSearch={setSearchQuery} />
            </PrivateRoute>
          }
        />

        <Route
          path="/auth/mylist"
          element={
            <PrivateRoute>    {/*Privat tidak mudah di akses orang umum ajg*/}
              <MyList />
            </PrivateRoute>
          }
        />

        {/* DEFAULT: kalo route tidak dikenal seperti http://localhost:5173/c/s maka redirect ke Login */}
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
