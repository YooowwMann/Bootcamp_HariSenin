import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { getSession } from "./utils/auth";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Films from "./pages/Films";
import MyList from "./pages/MyList";
import Profile from "./pages/Profile";

// 🔐 PRIVATE ROUTE
function ProtectedRoute({ children }) {
  const session = getSession();
  if (!session?.isLogin) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const session = getSession();

  const resetSearch = () => setSearchQuery("");

  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>

        {/* AUTH */}
        <Route
          path="/auth/login"
          element={
            session?.isLogin
              ? <Navigate to="/app/home" replace />
              : <Login />
          }
        />
        <Route path="/auth/register" element={<Register />} />

        {/* APP (PRIVATE) */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Navigate to="/app/home" replace />
            </ProtectedRoute>
          }
        />

        <Route
          path="/app/home"
          element={
            <ProtectedRoute>
              <Home
                searchQuery={searchQuery}
                onSearch={setSearchQuery}
                onNavigate={resetSearch}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/app/films"
          element={
            <ProtectedRoute>
              <Films
                searchQuery={searchQuery}
                onSearch={setSearchQuery}
                onNavigate={resetSearch}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/app/series"
          element={
            <ProtectedRoute>
              <Series
                searchQuery={searchQuery}
                onSearch={setSearchQuery}
                onNavigate={resetSearch}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/app/mylist"
          element={
            <ProtectedRoute>
              <MyList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/app/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* FALLBACK */}
        <Route
          path="*"
          element={
            session?.isLogin
              ? <Navigate to="/app/home" replace />
              : <Navigate to="/auth/login" replace />
          }
        />
      </Routes>
    </div>
  );
}

export default App;