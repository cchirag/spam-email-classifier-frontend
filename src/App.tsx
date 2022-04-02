import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthenticationRouter from "./pages/Authentication/AuthenticationRouter.router";
import AppRouter from "./pages/App/AppRouter.router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="authentication" />} />
      <Route path="authentication/*" element={<AuthenticationRouter />} />
      <Route path="email" element={<AppRouter />} />
    </Routes>
  );
}

export default App;
