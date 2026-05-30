import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import ProtectedRoute from "./routes/ProtectedRoute";
import MockInterview from "./pages/MockInterview";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import CodingEvaluator from "./pages/CodingEvaluator";
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
<Route path="/analytics" element={<Analytics />} />

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
   
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      

<Route
  path="/coding-evaluator"
  element={
    <ProtectedRoute>
      <CodingEvaluator />
    </ProtectedRoute>
  }
/>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
  path="/mock-interview"
  element={
    <ProtectedRoute>
      <MockInterview />
    </ProtectedRoute>
  }
/>
        <Route
  path="/resume-analyzer"
  element={
    <ProtectedRoute>
      <ResumeAnalyzer />
    </ProtectedRoute>
  }
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;